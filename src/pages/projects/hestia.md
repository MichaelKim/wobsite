---
layout: project
title: Hestia
description: Web service for making web apps
tools: Node.js, Socket.io, JavaScript, HTML, CSS
github: Hestia
link: hestiaroom.herokuapp.com
date: 2017-02-05
---

### About

Hestia is a web app that allows developers to quickly setup multi-user and real-time web apps.

Hestia is centered around the idea of "rooms": groups of users that together interact with a web app simultaneously. These apps can be anything from multiplayer games, voice/video/text chat systems, drawing tools, text editors, or educational quizzes. By providing all the basic networking functionalities, developers only need to write app-specific code when using Hestia.

To start, a host creates a room, which has a randomly generated id assigned to it. Then, other users can join the room using that id. Any app that the host chooses within the room will be shown to everyone else in the room. Right now, there are four sample apps already written (available in `/apps`) that can be opened to demonstrate what Hestia can do.

I made this as my submission for QHacks 2017.

### Development

Besides Node and a few basic frameworks (Express.js, Socket.io), Hestia is built using only vanilla JavaScript.

I came up with a multiplayer game system a long time before this hackathon after I was inspired by numerous web services that allow a similar functionality (group of users entering some key to join a lobby). At first, I wanted to build this "login" system to access a bunch of games, where friends could choose a game to play together. After pondering about it, I realized this could be extended to any multi-user web app instead of just games. And thus, Hestia was born.

I had a lot of fun finding a secure way to find external JS, and also allowing other code to call built-in functions in Hestia (i.e. sending/receiving messages between client/server). Initially, Hestia injects the custom code (HTML/CSS + JS) into Shadow DOM, and executes the code inside of it. This provides some security against malicious code as it separates Hestia and the custom code. However, I've switched to using iframes and loading the app from a separate server as it gives more flexibility for apps.

In the future, I hope to expand this into a fully fledged web service, allowing others to submit their web apps and have them hosted along with other apps.