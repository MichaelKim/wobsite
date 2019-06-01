---
layout: post
title: A beginner's look at JS Development
date: 2017-06-10
path: /frameworks
tags: code
---

It's been a month since I started working at Yahoo, and I've learned quite a lot during that short time:

- Switching efficiently from ~~Freedom Units~~ Fahrenheit to Celsius
- Working with an immense codebase
- Installing a countless number of frameworks and packages (ty npm)
- Getting a taste of test driven development and scrum
- Learning how a corporation deals with front-end development

Suddenly, [this post](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) makes so much more sense than when I first read it.

Although I've been working with JavaScript for a few years, it felt like I only scratched the surface of it. Everything that led up to now seems like nothing compared to what I've seen in the past month.

### Let's take a look back at JS, when it all seemed a little simpler.

I come from a C++ background, so when I first started using JS along with jQuery, the idea of asynchronicity was fairly new to me. (It's like multithreading, right?) It took some time to understand why asynchronous code is useful and important for the web, but not before I stumbled over its pitfalls like falling into callback hell:

```js
foo(function (err) {
    bar(function (err) {
        fizz(function(err) {
            buzz(function(err) {
                ...
            });
        });
    });
});
```

> Once there's one callback in use, how do I return a value if it's not there? I can add another callback, but then its return value is gone. Well, I can solve that with another callback. And another... It's callbacks all the way down!

I find it similar to working with Java and not fully understanding how `static` works. You add it to one method, and then Java complains how you "[cannot make a static reference to the non-static method](https://stackoverflow.com/search?q=Cannot+make+a+static+reference+to+the+non-static+method)". Adding `static` only makes the error spread to other parts of your code. Eventually, there's so much `static` you get shocked at what your code has become (which has yet to compile).

That's not to say callbacks are bad. Although they can be frustrating to the untrained (or C-trained) eye, following [good coding practices](http://callbackhell.com/) can produce code that is easy on the computer and the developer.

### Next stop on the JS train are frameworks.

My first experience with JS frameworks was during a [group project](/project/triggerbot) when a friend of mine insisted we use Angular for a hover interaction. I thought it was absolutely unnecessary: why use an entire framework to do something a few lines of JS could handle? But even so, Angular didn't seem appealing to me. All it did was add weird tags `ng-` to HTML and reduce a bit of JS code. The resulting HTML looked tainted and was nothing compared to vanilla HTML, which could have performed just the same.

For example, imagine how you would implement Google's home page. Then take a look at its source code.

Before I started my work, I took a look at React and fiddled around to see what it had to offer. I initially thought React's declarative way of manipulating the DOM was intriguing, and would make it easier to implement complex interactions. Typing JSX is more simple and succinct than chaining `createElement`s and `attachChild`s, and definitely cleaner than manipulating HTML strings.

But when I actually looked at the codebase, I wasn't even sure if it was still JS. There's no HTML file in sight, and CSS turned into JSON. There were just so many layers of abstraction pilled on top of each other that I felt completely lost in the sea of React and Redux.

After wrapping my head around it for a few weeks, I realized something about these libraries and frameworks.

Before React, I wrote most of my JS very barebones, with near-direct DOM manipulation. Apart from syntax and basic JS paradigms, I have had little experience with JS frameworks. My past self was complaining how React no longer preserved HTML and JS. Instead of thinking React was warping JS, I needed to see that it was a different JS. I'm no longer coding in JavaScript, but rather in a 'ReactScript' with new abstractions and guidelines independent from just JS.

### So after all this, what did I learn?

- To be a JS developer, you need to be as flexible as JS.
  - The web is constantly evolving. New frameworks, tools, APIs, etc, are appearing every day, so it's important to stay updated, and if necessary, switch gears and adapt quickly. But to do that,
- Learn how to crawl before you `npm run`.
  - Not knowing what callbacks are can make it frustrating to work with frameworks, let alone JS. Before diving in, make sure you know the basics.
- 'ReactScript' !== JavaScript
  - Once you start working with a library, you're inviting with it new syntaxes and styles. Once you start working with a framework, you stop coding in JS's world, and start coding in React's world.

_Now you're thinking with JS!_
