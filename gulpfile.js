const pkg = require('./package.json');
const path = pkg.path;

const del = require('del');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const header = require('gulp-header');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const cheerio = require('gulp-cheerio');
const cssnano = require('gulp-cssnano');
const run = require('gulp-run');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');
const notifier = require('node-notifier');
const browserSync = require('browser-sync').create();

const fileHeader = `/* ${pkg.name} | ${new Date()} */\n`;


gulp.task('jekyll', () => {
  return run('jekyll build').exec()
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


gulp.task('svg', () => {
  return gulp.src(path.src.icons)
  .pipe(svgmin())
  .pipe(cheerio({
    run: function ($) {
      $('[fill]').removeAttr('fill');
      $('style').remove();
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(rename({
    prefix: 'icon-'
  }))
  .pipe(svgstore())
  .pipe(gulp.dest(path.dest.icons));
});


gulp.task('clean', () => {
  return del.sync([path.dest.site]);
});


gulp.task('deploy', () => {
  const args = minimist = require('minimist')(process.argv.slice(2));
  const remotePath = '/websites/short.is/www/';
  const conn = ftp.create({
    host: args.host,
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src('./_site/**/*', {buffer: false, dot: true})
    .pipe(conn.dest(remotePath));
});


gulp.task('watch', ['default', 'jekyll'], () => {
  browserSync.init({
    server: {
      baseDir: './_site',
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  gulp.watch(path.src.sass, ['css']);
  gulp.watch(['**/*.html', '**/*.md'], ['jekyll']);
});


gulp.task('default', ['clean', 'svg', 'minify']);
