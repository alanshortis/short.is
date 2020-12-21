---
title: 'Icons with SVG Sprites'
layout: 'post'
date: '2017-02-21'
tags: writing
permalink: '/writing/icons-with-svg-sprites/'
intro: 'First there were sprite sheets. Then icon fonts. Then SVGs. Now there are SVG sprites, and some .'
---

Icons have been an important aspect of UI design for a very long time, and approaches to loading and displaying icons has evolved.

Sprites are nothing new. When icons were png or gif it was common to compile them all into a single image and use CSS to reveal only the icon required. This was good for limiting HTTP requests, but a bit of a faff to reveal the icon which relied on magic numbers.

Icon fonts were next, with [icomoon](https://icomoon.io/) and various Gulp/Grunt utilities making it extremely easy to put together a font full of icons. And of course, [Font Awesome](http://fontawesome.io/). Using a font means the icons are vector based and can be styled with CSS, but it does still feel as if we're highjacking something to fill a gap. There is also the temptation to include the entire Font Awesome library in order to show a hamburger icon (you may laugh, but I've seen it done more than once).

SVG sprites offer a combination of the two approaches. Control of the actual icons available, using images for icons and not hijacking fonts, and having icons available as vectors that can be styled with CSS and look sharp everywhere. There are some steps involved to produce the sprite but once you've set this process up and running it's as easy as saving an icon and using it in your markup.

## Making your icons

Once you've designed your icons in Illustrator (or wherever) you can save them as SVGs. Illustrator adds a fair amount of extra markup that we don't need but we'll take care of that as we build the sprite.

If you aren't designing your own icons you can take them from somewhere like [icomoon](https://icomoon.io/) or even get hold of the icons from [Font Awesome](https://github.com/encharm/Font-Awesome-SVG-PNG) and use them in the same way.

Place all of your icons in a folder that will go into your source control, e.g. `src/icons`.

## Building the sprite

If you're unfamiliar with [NPM](https://www.npmjs.com/) and [Gulp](http://gulpjs.com/) then I would recommend looking at the basics before moving forwards. These steps can be achieved with [Grunt](https://gruntjs.com/), [Webpack](https://webpack.github.io/) or NPM scripts if your prefer, but I'll be using Gulp in these examples.

This gulp task will do a few things for us:

- Optimise each SVG.
- Remove `fill` attributes and `style` elements.
- Take the file name for each SVG and use it for the ID of the path, prepended with `icon-`. This is how we'll refer to individual icons.
- Create a single SVG with multiple paths.

You can install all the packages required for this particular task with NPM using `npm i --save-dev gulp gulp-svgo gulp-rename gulp-svgstore`.

```js
const gulp = require('gulp');
const svgo = require('gulp-svgo');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

gulp.task('icons', () => {
  const task = themes.map(theme => {
    return gulp
      .src('src/icons/*_/_.svg')
      .pipe(svgo({ plugins: [{ removeStyleElement: true }] }))
      .pipe(rename({ prefix: 'icon-' }))
      .pipe(svgstore())
      .pipe(gulp.dest('_includes'));
  });
});
```

Using the Jekyll file structure as an example, the individual icons will be taken from the `src/icons` folder, optimised and built into a sprite which is saved to `_includes`.

## Using the sprite

To display each icon (which is now a path in an SVG) we need to add the entire SVG to our HTML document just after the opening body tag. In Jekyll (liquid) we can just include it as we would any partial, but you should adjust this depending on your stack. Alternatively you could use AJAX to append the SVG to an existing element if including dynamically is not an option for you.

```liquid
<body>
  <div class="is-hidden">
    {% raw %}{% include icons.svg %}{% endraw %}
  </div>
  ...
</body>
```

Note that the SVG is included inside an element that is hidden: `display: none;`. This isn't because your icons will appear on the page, it's just because the appended SVG element will take up some space.

To display the individual icons we need the `use` element within an SVG to get a path in our sprite by ID:

```html
<svg class="icon icon--large" role="img" aria-labelledby="unique-id">
  <title id="unique-id">A Title for your icon</title>
  <use xlink:href="#icon-menu"></use>
</svg>
```

With no styling the icon will be huge and black.

## Styling icons

We can use CSS to style these icons rather than using the inline styling more common with SVG. Our glup task removes all styling from the SVGs to avoid conflicts. The `fill` property determines the color of your icon and we can use `currentColor` for this property to match the color of our type automatically.

```css
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
```

This is a basic introduction to get started with SVG Sprites as an icon system. There is plenty of space for refinement around how the sprite is included in your site and how the icons are styled, both of which will vary depending on your stack, design, audience and intent.
