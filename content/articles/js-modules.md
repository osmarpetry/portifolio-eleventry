---
title: "JS Modules"
date: 2025-01-15
tags:
  - '#javascript'
  - '#es6'
description: "JavaScript modules and module systems"
layout: post.njk
---

# JS Modules
The goal of this text is to acquire knowledge on the subject, as a final goal to have more understanding in packaging business projects to better understand how to optimize them, and to create my own library of components
## IIFE
### First, I created the object where the modules will be placed into.
![[image 7.png|image 7.png]]
### Then I write the module functions for the parent
![[image 1 4.png|image 1 4.png]]
### I write the parent module, then the other modules. Here the order matters
![[image 2 4.png|image 2 4.png]]
  
Problem with this strategy is that if you have another third-party module that uses the name App, it will conflict with our App and it will be bad.
## CommonJS
Different from IFFE
- No need to pack modules in IFEEs
- No need to care to import in order
- It is not exporting anything to the global, like the App
It is still the same as exporting a JSON with its functions inside
Pros:
- Already in Nodejs by default
Cons:
- Not by default in browsers. It has the disadvantage of loading modules synchronously
  
### This way you export with the CommonJS
[![](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100613358_Screenshot+from+2020-03-01+19-10-03.png)](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100613358_Screenshot+from+2020-03-01+19-10-03.png)
## ESModule
ESModules (ECMAScript Modules) are a standardized module system for JavaScript, introduced in ECMAScript 6 (ES6). They provide a way to organize code into reusable components, making it easier to maintain and share code.
ESModules differ from IIFE (Immediately Invoked Function Expressions) and CommonJS in several ways:
- IIFEs are a pattern for executing JavaScript code immediately as soon as they are defined, but they don't provide a way to export and import functionality between files.
- CommonJS is a module system used in server-side JavaScript environments such as Node.js, but it doesn't work in the browser. CommonJS exports are made available as properties on a module.exports object, and can be required in other files.
- ESModules provide a way to export and import functionality between files, in a similar way to CommonJS, but with a syntax that is more suited to browser environments. ESModules use the `**import**` and `**export**` keywords to declare dependencies and exports. ESModules are also statically analyzable, which means that the dependencies can be determined at build time, rather than runtime.
### ESModules support asynchronous loading by default?
No, ESModules do not support asynchronous loading by default. ESModules are designed to be statically analyzable, which means that their dependencies can be determined at build time, rather than runtime. However, this also means that ESModules are loaded synchronously by default, which can lead to slower page load times for larger projects.
If you need to load modules asynchronously, you can use other tools, such as a bundler like Webpack, that can transform your code into a format that supports asynchronous loading. You can also use the `**import()**` syntax, which allows you to dynamically import modules in a way that supports asynchronous loading. However, `**import()**` is not part of the ESModule standard and is not supported in all browsers.
### ESModules code
[![](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100577656_Screenshot+from+2020-03-01+19-09-29.png)](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100577656_Screenshot+from+2020-03-01+19-09-29.png)
[![](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100677041_Screenshot+from+2020-03-01+19-11-08.png)](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100677041_Screenshot+from+2020-03-01+19-11-08.png)
ESModule exports
  
[![](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100701505_Screenshot+from+2020-03-01+19-11-32.png)](https://paper-attachments.dropbox.com/s_1357094C65A19DF1DC5BF30EF62F16043ED8E040CEFCFB54C20BAF94B0285F51_1583100701505_Screenshot+from+2020-03-01+19-11-32.png)
What is being exported. Note that the `**leftPad**` is just a single function, not the entire module (as it is imported) like in CommonJS.
## Summary
In summary, ESModules are a modern and standardized way to organize code in JavaScript, designed to work well in both server-side and client-side environments.