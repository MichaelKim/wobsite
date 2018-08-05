---
layout: project
title: michaelkim.me
description: Personal portfolio website
tools: JavaScript, HTML, CSS
github: lenkagamine.github.io
link: michaelkim.me
date: 2016-07-03
---

### About

Welcome to my website!

I started this website as a place to organize my various projects into one place. I wanted some sort of online portfolio where I could showcase my work for jobs or hackathons. It has gone under several design changes, and I try to regularly update it with new projects. It is also the home of my blog (<a class='fade-link' href='/blog'>available here</a>), which features rambles about life and programming.

I've spent a long time making it responsive and mobile-friendly. It also features smooth page transitions for any links within the website. By the way, have you tried clicking that lightbulb in the top left corner?

### Development

This website is built using Jekyll and is hosted with Github Pages (which makes it easy to setup Jekyll sites). Aside from that (and some default Jekyll code), all the code was written by me from scratch. I also use some of jQuery to make the JavaScript a bit easier (but I'm considering rewriting it in vanilla JS). I have looked at several themes to get inspiration, but this is a completely custom theme.

The smooth page transition is done by retrieving the content of the new page, fade out the old page, swap the contents, and fade the page back in. It also adds the old site to the browser history, and will also transition going backwards and forwards. While changing the content, the content box resizes its height to fit the incoming content. To get the accurate height, it waits for all images in the new content to load before getting the new height. Otherwise, the height won't take into account for any non-cached images and will end up a bit short.

Another feature is filtering projects by tools. The tool labels on the projects page is written entirely in Liquid; each unique tool is taken from each project and added to an array which is sorted alphabetically and rendered in a list. For toggling projects, each project is stored as an object in the same order they are displayed. To hide a project, it is detached from the DOM. To show it back, the stored object is inserted at its original location relative to the other visible projects.
