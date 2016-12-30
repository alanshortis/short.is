const pkg = require('./package.json'),
      browserify = require('browserify'),
      buffer = require('vinyl-buffer'),
      source = require('vinyl-source-stream'),
      del = require('del'),
      gulp = require('gulp'),
      eslint = require('gulp-eslint'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      sass = require('gulp-sass'),
      sassLint = require('gulp-sass-lint'),
      header = require('gulp-header'),
      rename = require('gulp-rename'),
      cssnano = require('gulp-cssnano'),
      run = require('gulp-run'),
      uglify = require('gulp-uglify'),
      gutil = require('gulp-util'),
      ftp = require('vinyl-ftp'),
      notifier = require('node-notifier'),
      browserSync = require('browser-sync').create();

const fileHeader = `/* ${pkg.name} | ${new Date()} */\n`;

const path = {
  "src": {
    "sass": "_src/sass/**/*.scss",
    "js": "_src/js"
  },
  "dest" : {
    "site": "_site",
    "css": "_site/css",
    "js": "_site/js"
  }
};

function reportError() {
  console.log('ERROR');
}


gulp.task('serve', ['clean', 'jekyll', 'css', 'js'], () => {
  browserSync.init({
    server: {
      baseDir: './_site',
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  gulp.watch(path.src.sass, ['css']);
  gulp.watch(`${path.src.js}/**/*.js`, ['js']);
  gulp.watch(['**/*.html', '**/*.md'], ['jekyll']);
});


gulp.task('jekyll', () => {
  return run('jekyll build --incremental').exec()
    .pipe(browserSync.stream());
});


gulp.task('css', ['sasslint'], () => {
  return gulp.src(path.src.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})
    .on('error', function(err) {
      sass.logError.call(this, err);
      notifier.notify({
        title: 'Gulp',
        message: 'SASS error'
      });
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dest.css))
    .pipe(browserSync.stream());
});


gulp.task('sasslint', () => {
  return gulp.src(path.src.sass)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .on('error', () => {
      notifier.notify({
        title: 'Gulp',
        message: 'SASS liniting failed'
      });
    });
});


gulp.task('minify', ['css'], () => {
  return gulp.src(`${path.dest.css}/as.css`)
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(header(fileHeader))
    .pipe(gulp.dest(path.dest.css));
});


gulp.task('js', ['eslint'], () => {
  return browserify({entries: `${path.src.js}/as.js`, extensions: ['.js'], debug: true})
    .bundle()
    .pipe(source('as.js'))
    .pipe(buffer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${path.dest.js}/`));
});


gulp.task('eslint', () => {
  return gulp.src(['gulpfile.js', `${path.src.js}/*.js`])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', () => {
      notifier.notify({
        title: 'Gulp',
        message: 'JS liniting failed'
      });
    });
});


gulp.task('uglify', ['js'], () => {
  return gulp.src([`${path.dest.js}/*.js`, `!${path.dest.js}/**/*.min.js`])
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(header(fileHeader))
    .pipe(gulp.dest(path.dest.js));
});


gulp.task('clean', () => {
  return del.sync([path.dest.site]);
});


gulp.task('deploy', () => {
  const args = minimist = require('minimist')(process.argv.slice(2));
  const remotePath = '/websites/short.is/test/';
  const conn = ftp.create({
    host: args.host,
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src('./_site/**/*.*', {buffer: false})
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});


gulp.task('default', ['minify', 'uglify']);
