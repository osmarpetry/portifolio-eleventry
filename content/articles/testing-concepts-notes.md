---
title: "Testing Concepts Notes"
date: 2025-01-15
tags:
  - '#testing'
description: "Testing concepts notes"
layout: post.njk
---

# Testing Concepts Notes

# **BDD**
BDD (Behavior Driven Development) is a method of testing where you use "Given" for the scenario, "When" for the environment of the action, and "Then" for the action. For example, "Given notes, when deleting, then remove a note". There are many examples of how to use BDD in testing, such as the npm package "jest-cucumber".
BDD has some advantages, such as making it easier for new developers to understand the flow of the component. However, there are also some disadvantages, such as it being complex to write, not cleaning up the sinon as in the given example, and a small change can become complicated to edit. For these reasons, it is recommended not to use BDD in unit testing and instead apply it only in E2E testing. Instead, try using "describe" and "it" for well-separated tests.

> [!info] React Behavior Driven Development (BDD)  
> My first reaction when reading about BDD was, "It sounds like yet another business consulting word-soup.  
> [https://codeburst.io/react-behavior-driven-development-bdd-535afd364e5f](https://codeburst.io/react-behavior-driven-development-bdd-535afd364e5f)  
## **Sinon**
Sinon is a powerful tool that allows for mock, stub, and spy functions. There are several resources available to learn how to use Sinon, such as the YouTube video "Mocking with Sinon.JS" and the accompanying code on Github. You can also find helpful information on using stub functions in the video "Testing with Stubs in SinonJS".
[https://youtu.be/fgqh-OZjpYY](https://youtu.be/fgqh-OZjpYY)
[https://youtu.be/TWBDa5dqrl8](https://youtu.be/TWBDa5dqrl8)
## **Accessibility**
For accessibility testing, you can use the axe library in Cypress, in unit testing, and in development. It is also recommended to have someone manually test for accessibility, as automated testing cannot catch everything. When testing other components, try testing them as if a screen reader is reading them, as this will also help with accessibility.
To use the axe library in your tests, you can import the `**axe**` function from `**jest-axe**` and use it in your test cases. For example:
```javascript
import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';
it('should not have basic accessibility issues', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```
For accessibility, it is recommended to use the `**axe**` library and to have an expert consult on the project to make it A, AA, or AAA compliant in terms of accessibility. There are also helpful videos available, such as the video "The Importance of Accessibility Testing". We also can use `cypress-exe`
[https://youtu.be/dTth-OUkSHk](https://youtu.be/dTth-OUkSHk)
[https://youtu.be/IADSsClWVtA](https://youtu.be/IADSsClWVtA)
## **Lighthouse**
Lighthouse should not only be used as a manual, but also be set up to run in the CI/CD pipeline. This can block the pipeline if a score below a certain threshold (such as X) is achieved. This is useful for ensuring performance stays at an acceptable level, for example, if the performance score falls below 60, the pipeline can be blocked to investigate the issue.
## **CSS and Responsiveness**
The key is to use Cypress and take snapshots. Care should be taken as even the same browser and computer can have pixel differences due to video card drivers.
[https://youtu.be/Dl_XMd_1F6E](https://youtu.be/Dl_XMd_1F6E)
## **Unit Testing**
For a comprehensive understanding, the following video is recommended:
[https://youtu.be/BzRAYt7BHRw](https://youtu.be/BzRAYt7BHRw)
It is also important to read materials by Kent after watching the video to understand best and worst practices. Another useful resource is the Udemy course "React Testing with Jest and Enzyme": [**https://www.udemy.com/course/react-testing-with-jest-and-enzyme/learn/lecture/10531816?start=0#overview**](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/learn/lecture/10531816?start=0#overview). This course covers important points such as setting the state in a component, but it is also more general in nature.
For testing multiple cases, the tool "jest-in-case" can be useful:
https://github.com/atlassian/jest-in-case
## **Summaries**
Kent emphasizes not to become overly obsessed with unit testing and to focus more on integration testing (which are more comprehensive and robust).

> [!info] Write tests. Not too many. Mostly integration.  
> I've given this blog post as a talk which you can watch here: A while back, Guillermo Rauch‏ (creator of Socket.  
> [https://kentcdodds.com/blog/write-tests](https://kentcdodds.com/blog/write-tests)  
It is recommended to avoid accessing a specific node in an array and to instead use something that will always be there, such as a test-id. However, using test-id is not recommended except in specific cases as it can negatively impact accessibility testing.

> [!info] Making your UI tests resilient to change  
> You're a developer and you want to avoid shipping a broken login experience, so you're writing some tests to make sure you don't.  
> [https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change)  
Snapshots are useful in the following scenarios:
1. As a quick fix
2. When time is limited and only minor changes are needed
3. When dealing with data from Babel
Otherwise, unit testing can provide a better result or CSS can be guaranteed through Cypress.

> [!info] Effective Snapshot Testing  
> I guess I've been on a bit of a testing kick recently, I promise this newsletter will delve into more stuff later.  
> [https://kentcdodds.com/blog/effective-snapshot-testing](https://kentcdodds.com/blog/effective-snapshot-testing)  
## **BDD Cypress**
Cypress is already set up and easy to use. Simply search for "cucumber-cypress" for a straightforward explanation and setup. The techniques can be found here:

> [!info] BDD  
> Behavior-Driven Development is a software development process that puts feature behaviors first.  
> [https://automationpanda.com/bdd/](https://automationpanda.com/bdd/)  
It is important to always have a clean environment for each test run. This can be achieved by clearing the database, populating it, and then running the test. The maintenance of this process can be challenging, but using fixtures and only integrating where necessary can help. This is especially important in our case, as it depends on the authentication system.
## **Storybook**
An effective way to test components using Cypress without having to launch the entire application is to use Storybook. Storybook allows you to test individual components, and also provides documentation and a place to test your components using both Axe and snapshots.
[https://www.youtube.com/watch?v=wGWJ4z61ZWQ&](https://www.youtube.com/watch?v=wGWJ4z61ZWQ&)