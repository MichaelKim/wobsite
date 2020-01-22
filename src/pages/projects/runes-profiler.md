---
layout: project
title: Runes Profiler
description: League of Legends helper app
tools: React, Redux, webpack, Node.js, Firebase
more: JavaScript
github: runes-profiler
link: runes-profiler.michaelkim.me
date: 2017-12-22
slider:
  [
    'Landing page',
    'Runes analysis page of a player',
    'Runes analysis of a different rune tree',
    'Champion select page',
  ]
---

### About

Runes Profiler is a web app that analyzes a player's rune usage and compares it to their average global usage.

This app was my entry for the [Riot Games API Challenge 2017](https://discussion.developer.riotgames.com/articles/4395/the-riot-games-api-challenge-2017.html), and while it didn't not win, it got [an honorable mention](https://developer.riotgames.com/api-challenge-december2017.html).

### Development

I learned about the challenge one week into it, so I had one week to write this website. The focus of the website was to compare rune usage, so I spent most of the week getting that feature to work as good as possible.

In a nutshell, this website is built with React and Redux on the frontend, packaged with webpack. The backend is powered with an Express + Node.js server along with a Firebase database. I spent a lot of time debating on which technologies to use, swapping out different templating engines and various databases, but I had to prioritize getting a working project released within the deadline. So, I went with tools that I had experience with and could quickly prototype with.

Nearing the deadline, I whipped up a champions page which would display the most played and highest winrate rune pages of each champion. However, I didn't have much time to flesh it out and fix most of the bugs.

There are still many things that I would like to improve on the website, but I might revisit it in the future.
