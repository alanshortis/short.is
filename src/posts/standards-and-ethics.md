---
title: 'Standards and ethics'
date: '2023-10-23'
---

Three times today alone, a choice by engineers to roll-their-own solution to a problem that has established standards made something essentially unusable:

- Royal Mail making a form entirely JavaScript driven and not using standard form elements, led to it not being totally unresponsive, unable to be submitted, and with zero validation or even a clue as to why
- Ticketmaster building some weird custom `select` element that doesn't work with the keyboard, and every `option` within having a scroll event blocking the wheel/trackpad
- NowTV on Apple TV not using the standard search or login dialogs, so you can't use the microphone to search and it doesn't prompt you to use the keyboard on your phone. This leaves the virtual keyboard on screen as the only option. Lots of fun when you have a secure password

Every single of of these is more work for a worse experience for engineers and users. Failure from conception to delivery from product owners, designers, engineers, and testers. How have we managed to lose sight of the constant that the simplest solution is usually the best?

I once worked with someone who believed that anyone writing code for public consumption should have some kind of qualification. If writing code is a branch of engineering, then it should be treated the same way. Being self taught, I strongly disagreed at the time (and I think some of his motivation was that he'd spent years on a computer science masters) but I'm much more in favour of education in ethics being required for particular roles. It's absurd that we should have to mandate consideration for the end user over anything else but the internet of today constantly misses the mark.

Many Canadian-trained engineers wear an [Iron Ring](https://en.wikipedia.org/wiki/Iron_Ring) as a reminder of their obligations and ethics of their profession. Wearing a reminder and the ceremony that goes with it surely changes the way they think about how to solve the engineering problems they face while avoiding harm.

Obviously there are levels; a bridge failing clearly offers much more risk than a website not working, but when websites manage healthcare, banking, benefits, and other essential services are not built to a standard we need to think about what we're doing. It's no different to opening a shop and choosing to have a door that's too narrow for a wheelchair user. It's not just bad design, it's unethical and exclusive.
