---
title: "Good Publications to Read"
date: 2025-01-15
tags:
  - '#publications'
  - '#reading'
  - '#web-development'
  - '#accessibility'
description: "I already follow specific newsletter but some publications I save to implement in the future"
layout: post.njk
---

# Good Publications to Read

I already follow specific newsletter but some publications I save to implement in the future. [Multiple builds targeting different browsers](https://medium.com/homeday/multiple-builds-targeting-different-browsers-bacb7bfc7e1a) shows a method like the title suggest to build to target different browser, very useful for updated browsers not pay the price of long loadings of old browsers like E11.  
  
The second publication is  
[Linting Web Accessibility issues in your HTML using just CSS!](https://willmendesneto.com/posts/linting-web-accessibility-issues-in-your-html-using-just-css/), you should use this after reading [https://www.w3.org/WAI/standards-guidelines/aria/](https://www.w3.org/WAI/standards-guidelines/aria/) too and use [Axe](https://github.com/dequelabs/axe-core) tool to also automate the cover of common accessibility mistakes. This is the CSS referred above.
```css
/* Highliting accessibility errors in HTML */
/* highlight HTML element with invalid value for lang attribute */
html:not([lang]),
html[lang=""] {
  border: 2px dotted red !important;
}
/*  highlight images missing alt text */
img:not([alt]) {
  filter: blur(5px) !important;
}
/* highlight on all elements that are inside of lists but not a list item <li> and displays them with a red outline.*/
:is(ul, ol) > *:not(li) {
  outline: 2px dotted red !important;
}
/* highlight on links without valid href attribute */
a:not([href]),
a[href="#"],
a[href=""],
a[href*="javascript:void(0)"] {
  outline: 2px dotted red !important;
}
/* highlights label with invalid for attribute */
label:not([for]),
label[for="#"],
label[for=""] {
  border: 2px dotted red !important;
}
/* Avoids div buttons from hell. More details in https://www.htmhell.dev/2-div-with-button-role/ */
div[role="button"] {
  color: red;
  text-decoration: blink !important;
}
/* highlight on empty anchors/buttons */
button:empty,
a:empty {
  border: 2px dotted red !important;
}
```