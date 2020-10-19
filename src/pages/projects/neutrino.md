---
layout: project
title: Neutrino
description: Lightweight Electron clone
tools: C++, Duktape
more: JavaScript
github: neutrino
date: 2019-07-08
---

### About

Neutrino is a lightweight clone of the Electron framework, allowing developers to create cross-platform apps with web tools, but with 1% of the filesize.

Although Neutrino lacks many features that comes with Node and Electron, it achieves this by leveraging the OS' native web engine. Specifically, it uses EdgeHTML (Microsoft Edge) on Windows, Webkit (Safari) on MacOS, and WebkitGTK on Linux.

As a proof of concept, I've written a port of my [Lyra music player](/project/lyra) in Neutrino!
