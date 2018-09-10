---
layout: project
title: Enlighten
description: Collaborative multiplayer webgame
tools: Node.js, Socket.io, JavaScript
github: Enlighten
link: enlighten.michaelkim.me
date: 2015-08-30
slider: ['First level', 'Gameplay with two players']
---

### About

Enlighten is a multiplayer webgame, using Node.js and Socket.io for multiple players, and hosted on Heroku's PAAS.

Inspired by other webgames, Enlighten is centered around cooperation; rather than players competing against each other, they play together to advance. Hence, the more players online, the easier it is to traverse the levels.

Initially, I started this project to learn JavaScript and how to handle client and server side code. It is still in development, with many features planned. Currently, there are three levels available with increasing difficulty.

To make building and editing levels easier, I made a level editor that can import existing levels and output as JSON (and put into /server/room.json). It is still very basic and can only handle walls and empty tiles, but I might upload it in the future when it has more features available.

### Gameplay

- Use WASD or the arrow keys to move.
- The player carries around a torch, which illuminates a small area around them. This light decays over time.
- There are also large areas of light scattered throughout levels, called campfires. Walking over their centre will relight torches to its original brightness.
- Colliding into a wall will return the player back to the start of the level. At that position, a small light will be placed for five minutes before disappearing.
- Once reaching the end of a level, the player will be teleported to the start of the next level.

Note: currently, there are five levels available. Finishing the last level will send the player back to the start of the last level.
