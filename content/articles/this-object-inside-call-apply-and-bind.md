---
title: "This Object Inside Call, Apply and Bind"
date: 2025-01-15
tags:
  - '#javascript'
  - '#this'
  - '#call'
  - '#apply'
  - '#bind'
description: "This object inside call, apply and bind"
layout: post.njk
---

# This Object Inside Call, Apply and Bind
The concept of explicit binding refers to the use of methods such as `**.call**`, `**.apply**`, and `**.bind**` in JavaScript to specify the value of the `**this**` keyword within a function.
- The `**.call**` method allows you to specify the context by passing the object you want as the value of `**this**` as the first argument, followed by any additional arguments for the function.
- The `**.apply**` method works similarly to `**.call**`, but instead of passing additional arguments directly, you pass an array that contains the arguments.
- The `**.bind**` method returns a reference to a new function with a specified context, but it does not immediately invoke the function like `**.call**` and `**.apply**`.
It is important to note that if you use strict mode, using the `**this**` keyword without binding it explicitly will result in an error and the `**this**` value will be set to the window object. Additionally, without explicit binding, `**this**` will always refer to the window object.
## Explicit binding examples with .call, .apply and .bind
  
[![](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535088925_Screenshot+from+2019-08-11+11-51-16.png)](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535088925_Screenshot+from+2019-08-11+11-51-16.png)
.call example
first param is the this context and the others are the params of the function
[![](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535168567_Screenshot+from+2019-08-11+11-52-31.png)](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535168567_Screenshot+from+2019-08-11+11-52-31.png)
.apply example. It’s the same of call, but has a array
  
[![](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535471781_Screenshot+from+2019-08-11+11-57-37.png)](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535471781_Screenshot+from+2019-08-11+11-57-37.png)
.bind example. It works like call but it not immediately call the function
  
[![](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535822507_Screenshot+from+2019-08-11+12-03-24.png)](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535822507_Screenshot+from+2019-08-11+12-03-24.png)
It will trow error bcause use strick blick the this get the window object
  
[![](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535885775_Screenshot+from+2019-08-11+12-04-34.png)](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565535885775_Screenshot+from+2019-08-11+12-04-34.png)
There this will get the window object always
[![](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565534910840_Screenshot+from+2019-08-11+11-48-03.png)](https://paper-attachments.dropbox.com/s_F98C78D82B4A19F357E153087CD2B9C873C01978B90485F983EB5D92E06DF837_1565534910840_Screenshot+from+2019-08-11+11-48-03.png)