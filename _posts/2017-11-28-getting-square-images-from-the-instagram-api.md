---
layout: post
title: "Square media from the Instagram API"
date: 2017-11-28 00:00:00 +0000
categories: development
---

## TL;DR

You can get square versions of your media at all supported sizes from the instagram API even though they're not included in the response.

1. Take the `thumbnail` URL from the response: `https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c136.0.751.751/23594098_1264835943621917_2571360077885734912_n.jpg`, noting the image size defined in the url: `s150x150`.

2. Replace the dimensions with the size you want: `https://scontent.cdninstagram.com/t51.2885-15/s640x640/e35/c136.0.751.751/23594098_1264835943621917_2571360077885734912_n.jpg`.

3. Marvel at the square images you now have. Note: You can only get square images in the dimensions returned by the API.

## A little more detail

There was a time that Instagram only allowed square images to be uploaded. When images in their original aspect ratio were allowed, to provide a smooth transition for third party apps using the API an option was added to state whether or not your app supported non-square media. That option is still there, and it does absolutely nothing.

All images sizes apart from the smallest thumbnail are provided by the API in their original aspect ratio. This is a bit of a pain for designers who want nice even grids of images that come back in unpredictable aspect ratios.

## An anomaly

I was close to changing my design, but when looking at Instagram in a web browser I realised all image thumbnails are square, and much larger than the 150px square thumbnails provided by the API. This isn't some CSS trick (or wizardry) either - inspecting the source confirms that cropped images are being loaded.

Taking a closer look at the URLs of the images loaded gave the game away. There is an additional parameter in the URL for each square image: `c136.0.751.751`. This is present in the `thumbnail` URL returned by the API but not any of the larger, non-square sizes. Adding this parameter (or changing the dimensions in the URL, which is a little easier to do) will get you square images. The only restriction is that you specify sizes that instagram supports in the API - 320px and 640px. It's not a image resizing service.

In JavaScript, something like will get you the URL of a larger square image:

{% highlight javascript %}
  const response = // However you're getting your JSON from the API...
  const largeSquareGram = response.images.thumbnail.url.replace('s150x150', 's640x640');
{% endhighlight %}

## Documentation

This isn't documented anywhere as far as I can see, and presumably the URLs we are constructing are the ones once returned by the API before the 'non-square media' option stopped working. You could look at this approach as being a hack, and it's implementation is just that, but instagram themselves are using these square cropped versions on the web version and, I would guess, in the app too as a 150px thumbnail isn't going to be sharp on a high-density display.
