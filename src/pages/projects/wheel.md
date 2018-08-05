---
layout: project
title: Wheel
description: Expenses tracking app
tools: Node.js, JavaScript, Firebase, Android
github: wheel-org/wheel-backend
link: play.google.com/store/apps/details?id=org.wheel.expenses
date: 2017-07-03
---

### About

Wheel is a group expenses tracking app available for Android. Wheel focuses on tracking longterm group expenses, where one person pays on behalf of a group. Rather than having to keep tracking of the complex debts within a group, Wheel handles this effortlessly.

It is the first project developed under the group which shares its name: [Wheel](github.com/wheel-org).

### Development

During my co-op in Sunnyvale, I roomed with [another Waterloo intern](https://github.com/fg123). Together, we would often share costs such as weekend meals and Uber rides. Overtime, it became a hassle to keep track who owes who and by how much, we decided to create an expenses tracking app.

I focused on developing the backend of Wheel. To start, I chose Firebase as a quick way to setup a database. For alternatives, I was interested in using Redis or PostgreSQL as both had popular addons with Heroku, but I wanted to prototype something quickly so that we could use it ourselves.

Currently, it stores all information about groups and their transactions in a Firebase database. The Android app, which Felix developed, accesses this data using various various endpoints available through an Express API. Through these endpoints, the app can register and login users, create groups, add transactions, set profile pictures, and more.