---
layout: project
title: lasopmorp
description: Short web game
tools: TypeScript, HTML, CSS
github: lasopmorp
link: michaelkim.me/lasopmorp
date: 2016-05-18
---

### About

If you've noticed already, lasopmorp is promposal backwards, and is exactly the purpose of this game. lasopmorp is a short game that I made for my high school promposal (yes, I actually made a game for this).

I've been brainstorming ideas for my upcoming promposal, trying to pick out one that I could perform reasonably easy, but also put in a lot of effort. Some of my friends already did theirs, which included making a cake with a huge poster sign, and a scavenger hunt spanning the entire school. In the end, I opted to make a short game as a segue into the actual surprise.

The game itself was inspired by a minigame over [here](http://ncase.me/door/) (which you should definitely check out; it has way better visuals and audio that I was unable to implement).

Later on, I could expand this project by making any custom message appear (both in the game, and the text below). I have ideas of pre-coding all 26 letters and allowing the user to use a short message as the game, or make a level creator and encode the game (each obstacle, checkpoint, and door) for publishing. For now, these are just thoughts for the future.

### Development

One minor detail that I decided to change from the original game was to use TypeScript instead of regular JavaScript. I was curious JavaScript transpilers worked (e.g. CoffeeScript, TypeScript, etc.) and wanted to see what benefits they brought (and their drawbacks). I first heard about CoffeeScript, but found the Haskell and Ruby-like syntax hard to understand. On the other hand, the static typing and object-oriented aspects on TypeScript intrigued me, and was much easier to quickly grasp.

What I noticed the most when working with TypeScript was its static typing, compared to the dynamic typing of JavaScript. Because of this, my text editor was able to quickly point out simple errors in my methods that I could have overlooked without the typing. It gave me the power to debug my code far easily than using JavaScript, but it also was a nuisance when working with the HTML5 Canvas element, adding `HTMLCanvasElement`'s and `CanvasRenderingContext2D`'s for types. It made me see the freedom that comes with JavaScript, but also the recklessness of its code. Overall, it provided safer and more strict code, while taking away the flexibility and simplicity of regular JavaScript.

{% include imagebox.html name="lasopmorp" titles="
	First letter
	Rewinding after all letters are finished
	Replaying after rewinding
" %}