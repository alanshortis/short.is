---
title: 'Standards and ethics'
date: '2023-10-23'
showAgeWarning: false
---

Three times today alone, a choice by engineers to roll-their-own solution to a problem that has established standards made something simple MUCH harder than it should have been:

- Royal Mail making a form entirely JavaScript powered and not using standard form elements led to it being almost totally unresponsive with validation errors blocking submission but nothing in the UI to give any feedback at all
- Ticketmaster building a weird custom `select` element that didn't work with the keyboard, and every `option` within having a scroll event that prevented seeing more options with the wheel or trackpad. Though in the case of Ticketmaster, this is the least of their ethical missteps
- NowTV on Apple TV not using the standard search or login dialogs, making normal features like searching by voice or the keyboard on your phone unavailable. This leaves the virtual keyboard on screen as the only option, which is not only much harder to use but also encourages weaker passwords

Every one of these is more work for a worse experience for users AND the engineers who built them. Failure from conception to delivery, from product owners, designers, engineers, and testers. How have we managed to lose sight of the truth that the simplest solution is usually the best?

I once worked with someone who believed that anyone writing code for public consumption should have some kind of qualification. If writing code is a branch of engineering, then it should be treated the same way. Being self taught, I strongly disagreed at the time but I'm much more in favour of education in ethics (not engineering) being required for most roles. It's absurd that we should have to mandate consideration for the end user over anything else.

Many Canadian-trained engineers wear an [Iron Ring](https://en.wikipedia.org/wiki/Iron_Ring) as a reminder of their obligations and the ethics of their profession. Wearing a reminder and the ceremony that goes with it surely changes the way they think about how to solve the engineering problems they face while avoiding harm.

Obviously there are levels; a bridge failing offers much more direct risk to people than a website not working, but when websites manage healthcare, banking, benefits, and other essential services the risks are huge, if indirect.

> Since writing this, W3C have published [Ethical Web Principles](https://www.w3.org/TR/ethical-web-principles/), which is worth reading.
