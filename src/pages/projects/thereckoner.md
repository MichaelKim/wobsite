---
layout: project
title: The Reckoner App
description: High School Newspaper App
tools: Android, Java
link: play.google.com/store/apps/details?id=ca.thereckoner.thereckoner
date: 2015-08-09
---

### About

The Reckoner is Marc Garneau C. I.'s award-winning student-run newspaper. The Reckoner regularly publishes articles on its website at [thereckoner.ca](http://thereckoner.ca/), and also releases a bi-monthly printed newspaper. During my time there, I was the Director of Web Development of the Fifth Guard, in charge of all technological aspects such as maintaining the website. To start of my last year at high school, some staff members and I developing an Android app, so that users have access the newspaper's content with ease.

Although I have used Java before, this was my first time working in a mobile environment, and I found it interesting to learn what goes into make a mobile app, and seeing how it differs from what I've done before. The app is free and currently available on [Google Play](https://play.google.com/store/apps/details?id=ca.thereckoner.thereckoner).

### Development

The app was developed using Android Studio from scratch. It retrieves data from the website using a Wordpress REST API, then parses the JSON data into articles. It also shows a notification whenever a new article is posted by checking periodically whether the latest post id on the web matches that of the app (locally stored every time the app is opened).

We went by a simple scrum system, accomplishing a small portion of the project every day. We set up a schedule for a three week time frame, so that we finish before the school year started. We split up into groups based on the different type of work to be done, such as programming, graphics, layout, and testing.

For the first week, we introduced ourselves to Android Studio and picked libraries and tools that we would be needing (the Wordpress API plugin and a Java JSON parser). On the coding side, we incrementally learned how to make certain modules, and creating small programs to test them, such as displaying HTML using Android WebView and handling HTTP requests. We designed the flow of the app, determining what pages will link to others, and laying down basic features. The next week, we started making graphics, both for use in the app and on the Google Play Store. Also, we looked into developing the layout and adding more functionality, implementing drop down menus, local data saving, and notifications. Nearing the end, it was time to finalize all features, and start testing for bug fixes and optimizations. When all the work was done, we prepared for release, marketing on the website and getting ready on Google Play.

Looking back, the app helped a lot of people in different ways. The release of the app on Google Play greatly expanded our outreach in the local community. Many students have expressed positive feedback over the convenience that the app provides. However, not only was The Reckoner impacted by the app, but we ourselves were as well. The creation of the app helped us understand the production process of a collaborative project, something independent of our school studies.

Even though I've passed the torch to a new Web Manager, this project is far from over. The app, currently in its second version, receives ongoing support from the current Web Development board with additional features being implemented on a rolling basis. There are also future plans for an iOS release, so stay tuned!

{% include imagebox.html name="the-reckoner-app" titles="
	First testing build grabs articles by id
	Displays latest articles with images
	Final styling and layout
	Reading an article
" %}
