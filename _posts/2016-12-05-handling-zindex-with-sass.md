---
layout: post
title:  "Handling z-index with SASS"
date:   2017-01-31 08:50:00 +0000
categories: development
---

In the wide range of CSS features, `z-index` is something that we don't really consider very often. It's entirely possible to make a fairly large website without using it at all, but once you introduce vendor CSS or use sticky elements or modals it becomes essential.

This post is not about the intricacies of z-index. What seems to be a very simple concept on the surface can be maddeningly frustrating at times. [This article by Philip Walton](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/) explains the quirks better than I can and will help you understand why a higher z-index does not always mean an element will sit at the top.

## Enter SASS

While SASS cannot alter the behaviour of `z-index`, it can be used to make it the stacking order easier to manage by placing control in one place. In vanilla CSS these values are peppered through your code leading to `z-index: 9000;` on the element you know you want at the top so you just pick a high number.

## Solution 1

{% highlight scss %}
// Apply values to variables.
$z-menu: 10;
$z-header: 20;
$z-footer: $z-header;
$z-modal: 30;

// Use.
.header {
  z-index: $z-header; // 20
}
{% endhighlight %}




This is the simplest way to use SASS to manage `z-index`. It's quick and easy to read and write, very clear as to what's going on and allows you to match values by setting new variables with those previously defined.

I like to set the values in multiples of 10 as this allows you to set a new variable to, say, `15` if you need something to sit between existing levels.


## Solution 2

{% highlight scss %}
// Create a map to contain elements and values.
$z: (
  'modal': 30,
  'header': 20,
  'menu': 10
);

// Use a function to get the value from the map, if available.
@function z($value) {
  @if map-has-key($z, $value) {
    @return map-get($z, $value);
  }
  // Use @warn instead of @error to get a more detailed backtrace.
  @warn 'The element defined is not included in the $z map.';
}

// Use.
.header {
  z-index: z(header); // 20
}
{% endhighlight %}

Moving in to some slightly more advanced SASS, this solution uses a map and a function to retrieve the values.

This makes your stacking order (arguably) more portable between projects, and I really like the syntax of calling a function with the element name as an argument to get the `z-index` value.

While trying to use an non-existent variable will always show an error, passing a value as an argument that doesn't appear in a map will not. Without checking if the value exists in the function first, the function will fail silently and you could end up with something like `z-index: z(unknown-element);` in your CSS.

Another issue with this solution and with Solution 3 is that if you are trying to enforce a rule in a linter that states that particular properties must be set using variables, a function call will appear invalid. This means a developer could start adding arbitrary values to `z-index` without the linter preventing them, a scenario even more likely if your chosen solution is hard to understand for a new or lazy developer.

## Solution 3

{% highlight scss %}
// Create a list of elements that need a z-index value.
$z: (
  'menu',
  'header',
  'modal'
);

// Use a function to get the element position in the map, if available.
@function z($value) {
  @if index($z, $value) {
    @return index($z, $value);
  }
  @warn 'The element defined is not included in the $z list.';
}

// Use.
.header {
  z-index: z(header); // 2
}
{% endhighlight %}

By using a list, we can remove the need to add values at all.

Our function finds the index of the element in the map and returns that value. If you need an element to sit above another in the stacking order you just need to ensure that it comes later in the list. This takes advantage of SASS not being zero indexed: The first item in the list has an index of `1`, not `0` as you'd expect in JavaScript.

For a developer working alone or someone who has a high level of understanding of the lesser-used features of SASS this is a really clean and elegant solution. For less experienced developers or those more used to vanilla CSS this is going to cause some head-scratching.

This has the same disadvantages as Solution 2, with an extra one thrown in: The values returned are going to be small numbers, so if you're fighting against some vendor CSS with typically massive `z-index` values you'll need to add to your function:

{% highlight scss %}
@function z($value) {
  @if index($z, $value) {
    // Return a larger number by multiplying the index.
    @return (index($z, $value) * 10);
  }
  @warn 'The element defined is not included in the $z list.';
}
{% endhighlight %}

## Which one?

I am currently using Solution 3 in a very large project and really enjoying how little effort is required to add a new element to the stacking order. Thinking about `z-index` as a stack and not a series of numbers works for me. However, I am lucky in this project as there is no vendor CSS to work with, only about a dozen elements that need their position in the stack explicitly set and I am the only developer touching the CSS.

Its hard to argue with Solution 1. It may be less elegant or clever, but it's simplicity and flexibility are difficult to argue with. You can set new variables based on existing ones, error handling and linter compatibility is free and any new developer is going to get it immediately, which means they're more likely to use it.
