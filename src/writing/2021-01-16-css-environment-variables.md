---
title: 'CSS environment variables'
layout: 'post'
date: '2021-01-18'
tags: writing
permalink: '/writing/css-environment-variables/'
intro: 'Not all viewports are perfect uninterrupted rectangles. How can the user agent help us tailor the experience to account for this?'
---

With the introduction of the infamous notch and the removal of the home button on the iPhone X, it became necessary to consider scenarios where parts of the operating system's UI or even the absence of the display itself could interfere with a design and layout.

This makes the safe area in which you can show content less predictable, but fortunately Apple considered this and provides [environment variables](https://drafts.csswg.org/css-env-1/#env-in-shorthands) to help mitigate issues.

## Environment variables

Environment variables are common in applications that need to run in multiple environments. This might be local development, a test environment, and a production environment, all needing to know the location of an equivalent API. You set the appropriate value in each environment and refer to a variable in code.

By having the environment (in this case, the user agent/browser) provide a variable which tells us how much additional space needs to be allowed for parts of the UI, we can make better spacing decisions pretty easily.

iOS currently provides four environment variables:

```css
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);
```

When first introduced in iOS 11, these variables were available using `constant()`. This was changed to `env()` in iOS 11.2.

## Cramped user interfaces

A common issue for newer iPhones is that a footer or static menu at the bottom of the viewport can appear very crowded and hard to use because iOS adds a bar to the edge of the screen to indicate that you can swipe up to close the app.

When viewing [pitchfork](https://pitchfork.com/) with an affected device, this is really obvious:

<picture>
  <source srcset="/img/pitchfork@2x.webp 2x" type="image/webp">
  <source srcset="/img/pitchfork.webp" type="image/webp">
  <img src="/img/pitchfork.png" srcset="/img/pitchfork@2x.png" loading="lazy" alt="A screenshot of pitchfork.com, where the part of the OS overlaps with the website's footer menu"/>
</picture>

Fixing this cramped layout would usually be as simple as increasing the bottom padding on the menu, but that would mean extra space on every device. This is where the `env(safe-area-inset-bottom)` environment variable steps in:

```css
:root {
  --safe-area-inset-bottom: var(safe-area-inset-bottom);
}

.footer-menu {
  border-top: 1px solid #ccc;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  width: 100%;
}

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .footer-menu {
    padding-bottom: calc(var(--safe-area-inset-bottom) + 1rem);
  }
}
```

There is quite a lot happening even in this stripped back example, so let's go over each part.

First, we need to add the value of the environment variable to a CSS custom property (variable). You cannot use `env()` inside `calc()`, so this gets around that issue. Then we have some pretty standard styling for a footer menu like this, spacing our icons horizontally and adding padding on every side of the menu. This is pretty close to what was done for Pitchfork, as seen above. It looks great on most devices, but not so good on a newer iPhone.

To allow space, we need to increase the padding at the bottom of the menu. We can't redefine `padding-bottom` immediately as browsers that do not support `env()` will just see an invalid padding value and default back to zero. By wrapping the declaration in `@supports` we can hide it completely from any browser that doesn't understand.

And that's it! Let's take a look, either by [viewing the example](https://examples.short.is/css-env-vars/), or this screen shot:

<picture>
  <source srcset="/img/bottom-menu@2x.webp 2x" type="image/webp">
  <source srcset="/img/bottom-menu.webp" type="image/webp">
  <img src="/img/bottom-menu.png" srcset="/img/bottom-menu@2x.png" loading="lazy" alt="A screenshot of an iPhone will a well spaced footer menu"/>
</picture>

## Use in JavaScript

There isn't a way to access these environment variables in in JavaScript directly, but we can access CSS custom properties. Once a custom property has been defined (as above), we can use `getComputedStyle` to read it in JavaScript:

```js
getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-bottom');
```

## Future

I have looked hard for information on new environment variables and found nothing, but I hope that more are added in time. There is a lot of information that is specific to the environment that a website is in, some of which we need JavaScript to calculate, some are in media queries, but none are quite as simple to access as a simple variable.
