---
layout: project
title: RealPacman
description: Slightly realistic Pacman
tools: Java
github: RealPacman
date: 2015-02-26
---

### About

RealPacman is a twist on the original Pacman game: the four ghosts can go through walls as they chase you!

This is another game that I've made where I take a classic game and remake it by adding a variation to it. My first idea was changing the controls of an existing game (keyboard vs. mouse). Later, I decided on using Pacman, and also added the bonus twist.

### Gameplay

- Pacman will move towards your cursor, and will get stopped by walls
- Ghosts chase Pacman regardless of obstacles, and will do so more accurately the closer Pacman is to them
- When Pacman walks over a cherry, click anywhere to eat it
- As you collect more cherries, Pacman and the ghosts will move progressively faster

### Development

An interesting part about this project is how the map is implemented, such as drawing and collision detection. The map itself is only defined as a big 2D int ("bool") array filled with 0's and 1's, signifying a wall or empty ground. When a Map object is initialized, it converts the array into an array of Polygons for easy drawing. To generate each map, it first finds a wall segment, then recursively finds the entire wall containing that segment. Then, it is turned into a polygon, while the values of the found wall in the array are removed (set to 0). The collision detection also uses the polygons by checking whether the bounding box of Pacman intersects with any of the polygons of the map.
