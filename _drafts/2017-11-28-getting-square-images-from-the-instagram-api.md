---
layout: post
title: "Getting square images from the Instagram API"
date: 2017-11-28 00:00:00 +0000
categories: development
---

The worst thing about interacting with any third party API has to be misleading or incomplete documentation. I recentlt had a tearing-my-hair-out moment when using Instagram's API to show a feed of images. It had nothing to do with actually obtaining my data - that was pretty easy - it was just the _wrong data_.

There was a time that Instagram only allowed square images to be uploaded and if you were interested in any other aspect ration you'd have to fake it (which is someting I still do). When images in their original aspect ratio were allowed, to provide a smooth transition for third party apps using the API an option was added to state whether or not you supported non-square media. That option is still there, and it does absolutely nothing (though to be fair, it does say 'This migration will be forced on June 1, 2016').

All images sizes apart from the smallest thumbnail are provided by the API in their original aspect ratio. So I either need to change my design or use CSS to make the images look square, right?

## Hold on...

When looking at an Instagram in a web browser all images are square. This isn't some styling trick - inspecting the source and trying some of the image URLs confirms that real square images are being loaded. So it's possbl, but undocumented.

## The lighbulb moment

 
