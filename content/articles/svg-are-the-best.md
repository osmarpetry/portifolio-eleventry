---
title: "SVG are the Best"
date: 2025-01-15
tags:
  - '#svg'
  - '#frontend'
description: "SVG are the best"
layout: post.njk
---

# SVG are the Best
## SVG vs. Font
Both can solve the same problem. However, the font needs to be downloaded and known, squares may appear for the user. Unlike that, SVG doesn't have this problem.
## SVG benefits
- Interactive and Stylish via CSS
- Responsive and adaptive
![[Untitled 37.png|Untitled 37.png]]
- Advanced animations
- Perfect for graphics, the D3 makes use
- Effects and filters
- Support up to i18
- Minified via GZIP
- Good accessibility
- Has a tree in the DOM
- It's code
## When use SVG or Bitmap?
The following image clear demonstrate when use SVG or Bitmap
![[Untitled 1 9.png|Untitled 1 9.png]]
## How you should invoke the SVG
- Use image element from HTML. But you can't edit with CSS this way
- On CSS using: `backgroud-image: url(image.svg)`. But it have the same problem when using an image element from HTML
- Iframe, object, or embed but it’s heavy, it depends on the browser and it’s difficulty to edit
- As data uri. It has the same problems from the image element and also is not cached
- Inline. It will come with the code, it is not cached but it can be done if you cache the code
## Viewbox and Viewport
You should use viewbox for the square size and viewport for the position and intensity of pixels
## preserveAspectRatio property
If you leave it default, it won't stretch the image, but if you leave none, it stretches the entire viewbox. It has other nice properties like xMaxYMin slice or meet, but it needs to be looked at carefully.