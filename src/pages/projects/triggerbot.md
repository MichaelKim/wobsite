---
layout: project
title: TriggerBot
description: Communicating bot with an attitude
tools: Node.js, Voice Recognition, Sentiment Analysis, JavaScript, HTML, CSS
github: yanske1/TriggerBot
link: triggerbot.herokuapp.com
date: 2017-01-28
---

### About

TriggerBot is a bot that takes in messages from a user, analyzes the sentiment of the message, and responds with an appropriate reply. During the conversation, it has a mood state that varies depending on the messages the user provides, and the messages TriggerBot responds. This mood is the same value for all users talking with TriggerBot, and is updated real-time whenever someone makes a positive/negative comment. TriggerBot also has speech-to-text capabilities, so the user can speak to the bot as an alternative to typing.

This was our team's submission for McHacks 2017.

TriggerBot relies on several tools that were provided at McHacks for a limited-time use. Our keys for these tools have long since expired, and so TriggerBot will lack some features and will no longer work as intended.

### Dependencies

TriggerBot uses several APIs, each working on one distinct component:
- IBM Watson Analytics: Speech to Text service uses speech recognition capabilities to convert speech from the user into text for TriggerBot
- Lexalytics' Semantria: Sentiment analysis to detect mood from the user's message, and also TriggerBot's response
- Cleverbot API: Produces realistic replies to user messages to maintain a conversation

These tools are all packaged with NPM to make it easily to install and run locally.
