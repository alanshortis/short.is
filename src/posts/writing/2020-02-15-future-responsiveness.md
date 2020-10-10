---
title: 'Future responsiveness'
layout: 'writing'
date: '2020-02-15'
updated: '2020-10-10'
tags: writing
permalink: '/writing/future-responsiveness/'
intro: 'Using media queries to adapt layouts for screen size has defined responsive design for a long time, but now we can respond to more.'
---

For nearly 10 years, media queries have been commonplace in styling webistes for use across screen sizes and devices. The question 'should this site be responsive' is going away because, yes, in all but the rarest of cases, a website should be responsive to provide a good user experience.

## Defining responsive

What are we responding to? Until recently, a 'responsive' site would adapt based on the viewport size and _maybe_ provide print styles. We can and should respond to much more than that, and there are media queries that can provide information on a user's preferences or hardware.

Each example will be written in CSS, but it's possible to use media queries in JavaScript too, with [`window.matchMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

## Colour Scheme

The `prefers-color-scheme` [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) can tell us if the user prefers a dark theme over a light one. This is something I have written about before, covering not only the media query itself but an approach to using it in both CSS and JavaScript: [Detect, set and save Dark Mode](/writing/detect-set-and-save-dark-mode).

## Motion

The `prefers-reduced-motion` [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) can tell us if the user has opted to have less motion/animation in the operating system, which is especially important for people with motion-triggered vestibular spectrum disorder.

There are a couple of ways this can be implemented, either in place or as part of a global CSS reset.

```css
@keyframes slidein {
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.content {
  animation: slidein 250ms 1 forward;
}

@media (prefers-reduced-motion: reduce) {
  .content {
    animation: none;
  }
}
```

Here we have a subtle keyframes animation that will slide and fade in the `content` class, and the media query removes the animation if reduced motion is preferred. It might be necessary to change some other CSS properties depending on your pre/post animation settings.

To suppress animations globally:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-delay: 0 !important;
    animation-duration: 0 !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0 !important;
  }
}
```

Here we are taking advantage of a couple of CSS features that we often never want to use; the universal selector and `!important`. In this case, these are the right tools for the job.

By applying delay and duration of zero and ensuring animations only run once on every element, and using `!important` to increase specificity, we can write all animations and transitions normally knowing that their properties will be trumped if the media query matches the preferred settings.

The downside of this is less control over a non-animated state which could lead to some jank, and also differentiating decorative animation (which you definitely want to stop) and animation with some meaning (which you may want to keep).

You also don't need to stop animations entirely - you could speed them up, slow them down, or just simplify. The media query looks for preference of _reduced_ motion so it doesn't need to be all or nothing.

### In HTML

You can use this in the `picture` element as well as in CSS. In this example, we can show a still image by default, or show the animated version if the user has no preference for motion:

```html
<picture>
  <source srcset="microwave.gif" media="(perfers-reduced-motion: no-preference)" />
  <img src="microwave.png" alt="A potato cooking in a microwave" />
</picture>
```

## Transparency

The `prefers-reduced-transparency` [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) states if the user has opted to have fewer transparent elements in the operating system.

```css
.header {
  background-color: rgba(0, 0, 0, 0.5);
}

@media (prefers-reduced-transparency: reduce) {
  .header {
    background-color: rgba(0, 0, 0, 1);
  }
}
```

This has not yet been implemented in any browser, but the option exists in MacOS so adoption should only be a matter of time.

## Pointer

The `pointer` [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) can hint if the device has a touch screen or uses a mouse or other pointing device. This isn't something I have tried yet, but for a rather reduced example we can make a form input larger on a touch (coarse) device.

```css
input[type='checkbox'] {
  width: 1rem;
  height: 1rem;
}

@media (pointer: coarse) {
  input[type='checkbox'] {
    width: 2rem;
    height: 2rem;
  }
}
```

## Data

The `prefers-reduced-data` [media query](https://github.com/w3c/csswg-drafts/issues/2370) could be used to adjust styles and assets to make a site as light weight as possible. For instance, we could choose not to serve fonts and instead specify a [closely matching system font](https://meowni.ca/font-style-matcher/).

This isn't yet supported in any browser and is still a proposal, but the possibilities are pretty huge for mobile and people with limited data plans. The internet is supposed to be an equaliser: everyone with access to the information they want and need, but as developers we're increasingly sending more and more data to serve simple sites.

This, combined with tailoring our websites to a users preferences will help us move towards a truly inclusive internet.
