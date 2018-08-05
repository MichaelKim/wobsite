---
layout: project
title: aMEba
description: Interactive life simulation game
tools: Java
github: aMEba
date: 2015-01-22
---

### About

aMEba is a life simulation game where the player can either live as an organism, eating berries and other organisms to stay alive. By consuming enemies, you gain a portion of their DNA, improving your stats such as attack and speed. There is also a sandbox mode where you can watch organisms fight each other in a custom environment.

This game was my team summative project for the Grade 10 Computer Science course.

### Gameplay

There are two game modes:

- Survival: Live as long as possible by eating berries and other organisms. Control your organism by moving the cursor and clicking to attack anything in range.
- God Mode: A sandbox mode where you are given free reign over the playing field. Place rocks, organisms, and berries by using the respective button at the top and clicking anywhere on the screen.

### Development

I had a lot of fun testing the enemies' behaviours as they try to survive. Currently, an enemy will wander randomly around until a berry or an organism of a different species than itself (which includes the player) enters its field of view (a small triangle located in front of it), which it will then chase. Even with this simple mind, a swarm of organisms can produce interesting behaviour such as a "conga line" of organisms, all chasing the one in front of them.

A factor that changes the swarm as a whole is their base stats and how they get passed along by consumption. Each organism including the player starts off with a randomized set of stats, such as max health, attack, and speed, which is stored in a DNA object. Whenever an organism eats (deals the killing attack) another organism, some of the victim's DNA stats are added to the killer's DNA and progressing further into the game. An alternative way to survive is to simply eat the berries, but as others continue to advance and improve, it becomes harder to avoid their attacks. In the end, it becomes harder and harder to satisfy your hunger, so all organisms will eventually die.

{% include imagebox.html name="ameba" titles="
	Survival gameplay
	God Mode gameplay
	Start menu
" %}