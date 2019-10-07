---
layout: project
title: hestia.io
description: Node framework for making web apps
tools: Node.js, Socket.io, JavaScript, Flow, Jest
github: Hestia
link: https://www.npmjs.com/package/hestia.io
date: 2017-02-05
---

### About

Hestia.io is a Node.js web app framework that manages instances of multi-user real-time apps. It is currently available as a npm package.

It achieves this by introducing rooms to Socket.io and handling app instances for each room. (Sidenote: while Socket.io does have room capabilities, the original Hestia was built before they were introduced). These rooms are composed of groups of users that together interact with a web app simultaneously.

Hestia.io has gone under a lot of changes since its creation at QHacks 2017. Since then, it has evolved into an entirely different project. You can read about the original development on [my Devpost submission](https://devpost.com/software/hestia).

### Development

The concept for Hestia began as a web app that hosted multi-user real-time apps created by other developers. As rooms didn't exist natively in Socket.io, Hestia managed rooms, their group of users, and their app instances. In order to sandbox app instances from Hestia and other apps, I used Shadow DOM to run these instances. While it wasn't the best of solutions, it did its job well enough to be presented as a demo. You can check out my sleep deprived code in all its glory [here](https://github.com/LenKagamine/Hestia/tree/3b2357e55e41050657606784ff83c88260f7f3d9).

Months after the hackathon, I revisited Hestia and made a few changes. The most significant change was the way how Hestia ran its app instances. I moved all of the app logic to a separate server and had Hestia run apps by rendering an iframe pointed to the new app server. In hindsight, I'm not sure why I came to this decision and shortly after, I combined the two servers, keeping the iframes.

However, Hestia was still limited by its web app design. For someone to create an app with Hestia, they would have to either make a pull request on my repo or fork it and host Hestia themselves. This felt very restrictive as I wanted to make Hestia more accessible for anyone to use. So, I separated all the parts of Hestia that was implementation agnostic and packaged it into an npm package. It now lives under its new name as hestia.io.
