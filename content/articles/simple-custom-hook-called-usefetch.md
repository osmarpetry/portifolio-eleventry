---
title: "Simple Custom Hook Called useFetch"
date: 2025-01-15
tags:
  - '#react'
  - '#hooks'
  - '#custom-hooks'
  - '#fetch'
description: "Simple custom hook called useFetch"
layout: post.njk
---

# Simple Custom Hook Called useFetch

When you’re loading chunks of data from a server, it’s a good idea have a loading and error state, if you need a more complex scenario I high suggest you to use libraries like SWR and React-Query because if you need in a complex application it’s a good idea lean on an already well-established library, instead of trying to create your own from scratch with a limited team of developers in which they need to divide their time delivering features instead of fixing bugs of something that is already ready and established in the community, and in case for smaller projects the library won't make a difference except for a few scenarios that I won't cover here.
  
The core goals of the following hook it’s only deal with show the state and loading, but also preventing of the `fetch` keep happening after the unmount of the hook. The error handler it will depends how your application deal with it, so you just need to implement the `catch` function inside of it.
```javascript
import { useEffect, useState, useRef } from "react";
export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);
  return state;
};
```