---
layout: project
title: MercuryWM
description: New tab terminal experience
tools: React, Redux, Node.js, webpack, Chrome
github: wheel-org/mercurywm
link: https://chrome.google.com/webstore/detail/mercurywm/hlhabhmnklidddklapmklccngaofgfim
date: 2017-07-25
slider: ['Layout with clock, weather, and todo scripts', 'Complex window layout with image script']
---

### About

MercuryWM is a Chrome extension that changes the new tab page into a dynamic workspace filled with windowed terminals. Users can have several workspaces, each with unique layouts of windows. Each window consists of a terminal, where users can modify their workspaces. MercuryWM also has a built-in file system of directories and text files, which can be navigated through and edited. The terminal commands mimic those in bash, such as `ls`, `cd`, `cat`, etc.

In addition to these commands, MercuryWM has access to an external server to provide additional custom functionality. These features come in two forms:

- Scripts: replace the terminal with a new window using an iframe such as `clock` (a clock), `micro` (a text editor which can save to the MercuryWM file system), `weather` (displays relevant weather info), etc.
- Modules: custom commands to use in the terminal, available through the Mercury Module Manager (`mmm`)

It is the second project created under the group [Wheel](github.com/wheel-org).

### Development

Initially, MercuryWM was created under the name WatTerm, and was developed mostly by Felix using jQuery as a proof of concept. As it started becoming more functional, I wanted to refactor the code into something more modular and maintainable. At the time, I was learning React and Redux during my internship at Yahoo, and like always I love making projects as a learning experience. So, I started up a new repository and started to setup everything. Since MercuryWM is a Chrome extension, I wanted the entire source to be very compact, which is why it's bundled with webpack.

Once the React-Redux fork caught up to the jQuery one, it became the official version and was renamed to MercuryWM. After that, we focused on making MercuryWM more extensible, specifically through the use of scripts and modules. This allows for new features to be added to MercuryWM without actually modifying its source (and requiring an update for all users). In addition, users can use the Mercury Module Manager to install custom commands. And since `mmm` itself is a module, it can easily update itself.

Overall, we wanted MercuryWM to mimic the workstyle of regular terminals, where users can write their own bash scripts or `apt-get` any package they needed.
