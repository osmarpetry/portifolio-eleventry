---
title: "Design Patterns: Elements of Reusable Object-Oriented Software"
date: 2025-01-15
tags:
  - '#design-patterns'
  - '#gang-of-four'
  - '#object-oriented'
  - '#software-architecture'
description: "In the place I work, I was developing new skills. One of these skills is about Design Patterns."
layout: post.njk
---

# Design Patterns: Elements of Reusable Object-Oriented Software

In the place I work, I was developing new skills. One of these skills is about Design Patterns.  
After creating this goal for me, was decided to make a presentation about some Design Patterns for my POD in Brazil and to the subsidiary on my city Joinville. But in the end, I created a presentation about all Design Patterns in the book of the gang of four.  
In this publication, I will write what I used to help me in the presentation, will not be code. For that, I think is better you go to:  
[https://refactoring.guru/design-patterns](https://refactoring.guru/design-patterns), where you can have a unique example of the pattern in your favorite language.
### First things firsts
The idea you know differents design patterns, in my opinion, is to you have a commonplace for everyone to write in the same pattern between different projects. Will be easier in the future to other new developers in the project to fully understand the code pattern that your team is using. I don't mean those patterns are the best, maybe a unique design pattern to your project would be better, but your team should have good documentation with example and covering corner cases in your unique design pattern.
### Different purposes and scopes of design patterns
In the following image that you can have from the book or the gang of for, you can see three purposes divided by two scopes (class and object).
![[design-patterns-table 4.png|design-patterns-table 4.png]]
Design Patterns summary from the gang of four Design Pattern book.
The difference between the scope class and object will be visible on the factory pattern. Where Factory Pattern you just create one custom function in the class (class scope) and in the Abstract Factory, you create a fully custom object (object scope).  
The proposes difference is the pattern will change the way your code is created, is structured, or behave. You can check better the difference between structural and behavioral with Decorator and Chain of Responsibility. Where on Decorator one Decorator doesn't depend on the other Decorator not chacing the behave of your code, but on Chain Responsibility, if some chain is braked the rest your code will not be executed, changing the behavior of your code.  
I tried to a little deep over every pattern, but this will take too much time and will not be so complete as the  
[https://refactoring.guru/design-patterns](https://refactoring.guru/design-patterns) already has, with images, diagrams, and code examples in different languages.
## My presentation about this subject
You can check the presentation in Portuguese above this text. But remember, this was a beginner presentation about a lot of patterns, I didn't go deep of every pattern with multiple examples, if you already have the expertise to understand the content bellow, you should try reading the book "Design Patterns: Elements of Reusable Object-Oriented Software" or check out the website: [https://refactoring.guru/design-patterns](https://refactoring.guru/design-patterns) where you can go deep by yourself, would be better over I gave a deep explanation of every pattern with multiple code examples, with diagrams when necessary.
[https://youtu.be/bvGGDey7KfY](https://youtu.be/bvGGDey7KfY)
I tried to write a summary about every pattern but was superficial and boring or big and boring, so I decided to remove it, just let the video above. I suggest you visit the website: [https://refactoring.guru/design-patterns](https://refactoring.guru/design-patterns), which will be a lot more fun and complete.
  
[[Design Patten]]