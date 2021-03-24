---
title: 'Make your own website'
date: '2019-11-22'
updated: '2020-11-15'
slug: '/writing/make-your-own-website/'
intro: "There are a lot of places to quickly post some content. It's quick, convenient but ultimately bad for you and your work."
---

There is a bit of a backlash against the likes of [Medium](https://www.medium.com) happening, and for developers it goes deeper than their paywall and irritating clutter clogging up the page when you first visit. Writing about this industry is a great thing to do—with new concepts and approaches unfolding constantly, we're all googling questions every single day. Plus, if you're anything like me, writing about a subject while figuring it out is a great way to learn.

With Medium and similar services you do not truly _own_ your content. Your own site, entirely under your control is invaluable if you have a web presence.

Consider [adactio.com](https://adactio.com/). Jeremy Keith has been posting to his own website since 2001. How many platforms have come and gone in that time?

## Pick a library, framework, or neither

If you're a working front end developer chances are you're using React or some other library/framework on a daily basis, so it makes sense to stick with workflows and syntax you're comfortable with. You may even have some components ready to go. [Gatsby](https://www.gatsbyjs.org/) is the king of this sector now, but there are a lot of other options for static site generators that let you keep your programatic approach for good developer experience while producing static assets for speed and performance.

The more I use it, the more I love [Eleventy](https://www.11ty.dev/). In building this very website with 11ty I have felt close to the markup in a way that is totally lost with React. There is so little opinion and so many options you can really make it your own which is not how I feel when using Gatsby. It also pushed me to write a Web Component for the first time and finally realise just how good they are; components with zero dependencies! What's not to love.

Writing totally plain HTML and CSS is pretty rare now, but I love the idea of starting a project not with `npm i` but with `touch index.html`. Write the exact code that the browser will use and eliminate all third party dependencies. This sounds like it'd be a lot of fun, like going back to my roots, but it also presents issues with CSS vendor prefixes and minification; those things we have automated away.

## Prepare your content

I'd always opt for Markdown when writing technical blogs. It's very light, unobtrusive, supports inline code and code blocks, can be massively augmented with [MDX](https://mdxjs.com/), can understand plain old HTML, and can be written in all kinds of editors very quickly. It also keeps your content very portable and readable even it's not parsed.

If you really love using a CMS, there are plenty of headless options that will let you keep your rich editor and still produce a static site via the JAM stack.

## Design and build

The appearance and code is where you can really show what you can do. Use it to show off, appeal to peers and recruiters, but don't overdo it. A site comprised of mostly static text doesn't need complex state management, containers, and heavy animation libraries. An incredibly fast and accessible site will show that you know what really counts.

Most importantly - build _something_, deliver it, then iterate. If you're the only one ever touching the code, allow yourself to take some shortcuts if it gets it out faster.

I promise you, the very site you're reading this on is very far from perfect and will never be finished, whatever 'finished' means in this industry.

> Don't let perfect get in the way of good enough.

## Deploy

This is easy. [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). If you need more power, you've probably made things too complex.

## What next?

- **Keep writing.** Even if you think it's something basic; if you faced a challenge in figuring something out or came across some gotchas, someone else may be in the same boat. However...
- **Write for yourself first.** Writing about a problem while solving it will help it stick in your mind. You can also read your own posts if you get stuck again in the future.
- **Iterate.** Seen some design/feature elsewhere and want to try and replicate it? You have a site for that.
- **Strike a balance.** I don't feel that sites like this need to be feature rich. If you have an idea for a side project that is more complex, involved, and interesting to you as a developer, do it. Don't neglect it either. It's your shop window, and if your bio mentions the job you had 2 years ago it's not an ideal first impression.
