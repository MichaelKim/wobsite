---
layout: post
title: Dokku and MIME types
date: 2019-03-01
path: /mime
tags: code
---

I use [Dokku](https://github.com/dokku/dokku) to manage the various projects hosted on my domain, such as this website. It's worked pretty well so far, but I've had one issue while getting my [15 Puzzle solver](https://github.com/LenKagamine/15puzzle.js) hosted.

To host a static page using Dokku, Dokku has an [official buildpack](https://github.com/dokku/buildpack-nginx). To trigger it, it's as simple as creating an empty `.static` file in the root directory. However, if you happen to also host WebAssembly (`.wasm`) files, you may have encountered an invalid MIME type error:

```
TypeError: Incorrect response MIME type. Expected 'application/wasm'
```

[Certain WebAssembly methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) require that the file has the right MIME type. The buildpath's `mime.types` file, which maps file extensions to MIME types, lacks support for WebAssembly files.

However, the buildpack checks if there's a user provided `mime.types` file [during compilation](https://github.com/dokku/buildpack-nginx/blob/a9b3cb17677045b2bdeb5578bbba2b040371a766/bin/compile#L157), and uses it instead of the default.

So, this can be fixed by supplying your own `mime.types` file in the root directory. Start out with an existing list ([here's the one used by the buildpack](https://github.com/dokku/buildpack-nginx/blob/master/conf/mime.types)), and add any additional types. For me, I only needed to add one line:

```
types {
    ...
    application/wasm                      wasm;
}
```

I've tested this on my Dokku instance with WebAssembly, but this method should work with any missing MIME type.
