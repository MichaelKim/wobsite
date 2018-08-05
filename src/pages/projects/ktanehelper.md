---
layout: project
title: Keep Talking and Nobody Explodes Bot
description:  Voice controlled bomb defusing bot
tools: Python, Voice Recognition, Text to Speech
github: ktane-helper
date: 2016-03-17
---

### About

ktane-helper is a bot that aids the player for the game [Keep Talking and Nobody Explodes](http://www.keeptalkinggame.com).

Keep Talking and Nobody Explodes is a game where players work together to disarm a bomb. One player is designated as the Defuser and is the only player allowed to see and act on the bomb. Others are Experts, who help the Defuser defuse the bomb. The Expert must describe the bomb to the Experts, who consult the [Bomb Manual](http://www.bombmanual.com) for defusal steps, and must relay those steps back to the Defuser. This bot will play the role of the Expert who helps the player in disarming bombs.

I decided to make this to start learning Python over the March Break. However, now that the bot works and can help defuse bombs, I'll be putting it aside for now. Occasionally, I will update it with new modules (eventually covering even the needy modules).

### Development

Each module is defined with two files: the defusing file (located in /modules) and the grammar file (in /grammars). The defusing file is where the steps in defusing the module is set. The steps were taken from the Bomb Manual and rewritten in Python.

The grammar file defines what the bot is expecting in terms of speech from the player. At first, the bot parsed the speech using the entire English vocabulary. However, this resulted in the bot picking up many unnecessary and irrelevant words, not related to defusing the bomb. Instead, the bot only listens for specific words required for the specific module. This allows the bot to make better speech recognition as there are a limited amount of words the speech could be parsed as.

More information on defusing modules is available in the Github repo and the official Bomb Manual.
