---
layout: post
title: "Icons with SVG Sprites"
date: 2017-02-21 00:00:00 +0000
categories: development
---

Icons have been an important aspect of UI design for a very long time, and approaches to loading and displaying icons has evolved.		

Sprites are nothing new. When icons were .png files (or gif if you go back far enough for transpareny in pngs to be an issue) it was common to compile them all into a single image and use CSS to reveal only the icon required. This was good for HTTP requests, but a bit of a faff to reveal the icon desired as it relied on using pixel coordinates

Icon fonts were next, with tools like [icomoon](https://icomoon.io/) making it extremely easy to put together a font of your own. That is, if you weren't using the excellent [Font Awesome](http://fontawesome.io/). Using a font means the icons are vector based which is perfect for scalability and high density displays, yet it does still feel as if we're highjacking something to fill a gap (not that this is anything new in web dev). There is also a tendency to include the entire Font Awesome collection in order to show two or three icons purely because it's quick and easy to do so.

SVG sprites offer a combination of the two approaches. Control of the actual icons available, using images for icons and not hijacking fonts, and having icons available as vectors to they can be styled and look sharp everywhere. There are some steps involved to produce the sprite but once you've set this up it's as easy as saving an icon and using it.

### Making your icons

Once you've designed your icons in Illustrator (or wherever) you can save them as SVGs. Illustrator adds a fair amount of extra junk in the SVG that we do not need but we'll take care of that as we build the sprite.

If you aren't designing your own icons you can take them from somewhere like [icomoon](https://icomoon.io/) or even get hold of the icons from [Font Awesome](https://github.com/encharm/Font-Awesome-SVG-PNG) and use them in the same way.

Place all of your icons in a folder that will go into your source control, e.g. `src/icons`.

### Building the sprite

If you're unfamiliar with [NPM](https://www.npmjs.com/) and [Gulp](http://gulpjs.com/) then I would recommend looking at the basics before moving forwards. These steps can also be achieved with [Grunt](https://gruntjs.com/) or [webpack](https://webpack.github.io/) if your prefer them.		

This gulp task will take your folder of icons and turn them into a sprite after a few extra things:

* Optimise each SVG.
* Remove `fill` attributes and `style` elements.
* Take the file name for each SVG and use it for the ID of the path, prepended with `icon-`.
* Create a single SVG with multiple paths.

You can install all the packages required for this particular task with NPM using `npm i --save-dev gulp gulp-svgmin gulp-cheerio gulp-rename gulp-svgstore`.

{% highlight javascript %}
const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');

gulp.task('svg', () => {
  return gulp.src('src/icons/**/*.svg')
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
  .pipe(gulp.dest('_includes'));
});
{% endhighlight %}

Using the Jekyll file structure as an example, the individual icons will be taken from the `src` folder built into the sprite is output to `_includes`. Those familiar with Jekyll may see this folder as an odd choice of destination but the reason will be made clear below.

### Using the sprite

To display each icon (which is now a path in an SVG) we need to add the entire SVG to our HTML document just after the opening body tag. In Jekyll (Liquid templating) we can just include it as we would any partial, but you should adjust this depending on your stack. Alternatively you could use AJAX to append the SVG to an existing element if including dynamically is not an option for you.

{% highlight liquid %}
<body>
  <div class="is-hidden">
    {% raw %}{% include icons.svg %}{% endraw %}
  </div>
  ...
</body>
{% endhighlight %}

Note that the SVG is included inside an element that is hidden: `display: none;`. This isn't because your icons will appear on the page, it's just because the appended SVG element will take up some space.

To display the individual icons we need the `use` element within an SVG to get a path in our sprite by ID:

{% highlight html %}
<svg class="icon icon--large" role="presentation">
  <use xlink:href="#icon-menu"></use>
</svg>
{% endhighlight %}

With no styling the icon will be huge and black.

### Styling icons

I like to use BEM syntax in SASS to style icons. If you're unfamiliar with these approaches it's worth reading up on the basics. They're not essential for using icons in this way; you can style them however you'd like, taking into account your designs and coding style.

Note the `fill` property; this determines the color of your SVG icon and is possible as we stripped all inline styling in the SVG itself in our gulp task.		

{% highlight scss %}
.icon {
  width: 1em;
  height: 1em;
  fill: $color__icon;
  &--large {
    width: 2em;
    height: 2em;
  }
}
{% endhighlight %}

This is a basic introduction to get started with SVG Sprites as an icon system. There is plenty of space for refinement around how the sprite is included in your site and how the icons are styled, both of which will vary depending on your stack, design, audience and intent.
