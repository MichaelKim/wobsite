---
layout: project
title: 15 Puzzle
description: Generalized 15-puzzle solver
tools: C++, WebAssembly, JavaScript
github: 15puzzle
link: 15puzzle.michael.kim
date: 2018-11-15
---

### About

This is a solver for the generalized 15-puzzle written in C++. It can optimally solve any p x q sized board, although it becomes very slow for boards larger than 4 x 4, and some 4 x 4 boards with long solutions.

To solve a puzzle, it uses the IDA\* algorithm with an [additive disjoint pattern database](https://www.sciencedirect.com/science/article/pii/S0004370201000923).

This solver has also been ported to WebAssembly using Emscripten [here](https://github.com/MichaelKim/15puzzle.js).

Read more about the solver on [my blog post](/blog/puzzle).
