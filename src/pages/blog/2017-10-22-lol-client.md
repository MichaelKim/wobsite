---
layout: post
title: Fiddling with League of Legends
date: 2017-10-22
path: /lol-client
tags: code
---

On April 24 2017, League of Legends retired their legacy client in favor of the new beta client. The League Client Update (LCU) replaced the old Adobe AIR client with a HTML5 + JavaScript architecture.

A week ago, I found a League of Legends app that allows a player to check all the skins that they have bought on their account (available [here](https://github.com/LeagueDevelopers/lol-skins-viewer)). (Edit: with a recent patch, the LoL client can now show all bought skins!) To use the app, I had to let the app know where LoL was installed, then it performed some magic and shows all the skins on my account.

When I looked through the source to see how it was grabbing the relevant info, I found [three endpoints that the app seemed to call](https://github.com/LeagueDevelopers/lol-skins-viewer/blob/master/app/api/SkinsController.js#L37). However, there were a few problems:

- These endpoints aren't documented in Riot Games' API docs. They don't even match the format of Riot's APIs.
- There's no API key for Riot's API, nor does the app connect to an external server. It even fetches from localhost.

So, it must be getting the player data without Riot's official API.

Also, the endpoints were calling localhost on some variable port. This should mean the app is relying on some locally hosted server for data. Did the app start the server? Then why would the app make a HTTP request to its own server? If the app didn't start it, then what did? And why does the app need LoL to be open to work?

### Digging Deeper

All of these requests are performed with a given port and password. These values are retrieved from the app's Redux store which has an initial empty state, so it must be set sometime later. The port and password are located at `state.app.lcu`, and a look at the app's reducers show only one action type changes that value: `LCU_UP`. That action type is used by the `up` action creator, which in turn is called in a function called `onLockFile`.

`onLockFile` is called when the app is first launched and tries to grab a file in the League of Legends root directory called `lockfile`. It then watches the file for changes, and calls `onLockFile` everytime it does.

Lock files are files that are created when a script or program begins execution. Whenever an instance of the program is started, it first checks if a lock file exists which would indicate a separate instance was already running. File locking restricts access to a file or some data by only allowing one process to access it at one time, usually to prevent race conditions.

In League of Legends, a file called `lockfile` is created whenever LoL is opened. While this prevents someone from opening multiple instances of LoL, the lockfile serves a second purpose. The contents look somewhat like this:

    LeagueClient:13268:63569:[random string of characters]:https

The [app parses](https://github.com/LeagueDevelopers/lol-skins-viewer/blob/master/app/utils/parseLockfile.js) it as:

    Process name : Process ID : Port : Password : "https"

So on startup, LoL picks out some port and a password before loading everything up. A quick ping onto the port shows it is being used while LoL is open.

<div class="imagebox">
	<a
		href="/images/blog1.png"
		data-caption="Pinging the mysterious port"
	>
		<img src="/images/blog1.png" style="width: 50%;">
	</a>
</div>

This means the endpoints found earlier are actually directed to a server setup by LoL. Looking at the requests the app makes, I can replicate them and test them out myself.

https://github.com/LeagueDevelopers/lol-skins-viewer/blob/master/app/utils/lcuRequest.js

And it works!

<div class="imagebox">
	<a
		href="/images/blog2.png"
		data-caption="Making a request to the secret endpoint"
	>
		<img src="/images/blog2.png" style="width: 50%;">
	</a>
</div>

It seems like all it checks for is Basic Auth with username `riot` and a random password.

But why does LoL have this open?

### Chromium Embedded Framework

On May 2016, Riot Games published [a blog post on their engineering blog](https://engineering.riotgames.com/news/architecture-league-client-update) outlining going over the design decisions for the LCU. One big change that they made was a shift towards JavaScript. They had initially planned to rewrite the client as a browser and use HTML + JavaScript to provide the UI. At first I thought they would use Electron, but instead they used some tool called the [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef).

The Chromium Embedded Framework, or CEF, is an open source framework to provide browser control into applications, such as embedding a web browser, or rendering web-based content in a native application. Since Riot wanted to build the client UI using HTML and JavaScript, CEF would provide exactly what they need.

So far, this is what I think is happening:

- On load, LoL sets up a local server with a randomly selected port and password, and saves the port and password to a lockfile
- The client grabs data from the local server using provided endpoints
- The local server requests the data from Riot's servers, and send them back to the client
- The client gets a webpage from the local server (or at least some form of HTML + JS) and renders it with CEF

At this point, I'm rather surprised at the intricacy behind the new client. What first seemed like a standard application is actually a front-end for a whole stack. This also got me curious: with a local server avaiable for requests, I could make a LoL companion app to perform other useful tasks than merely displaying skins. What other requests lie hidden behind the client?
