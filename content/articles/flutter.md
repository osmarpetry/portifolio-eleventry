---
title: "Flutter"
date: 2025-01-15
tags:
  - '#mobile-development'
description: "Notes and examples while learning Flutter and Dart"
layout: post.njk
---

# Flutter

These are personal notes from an older codebase. I’m keeping the snippets and short explanations I still find useful.

## Private members
For something that should only be used “inside that guy”. In Dart, identifiers that start with `_` are private to the library (file). Example below: `_MyAppState` and private variables are only visible within this widget/file.

```js
import 'package:flutter/material.dart';
import './question.dart';
import 'answers.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  var _questionIndex = 0;
  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      {
        'questionText': 'What\'s your favorite color?',
        'answers': ['Black', 'Red', 'Green', 'White'],
      },
      {
        'questionText': 'What\'s your favorite animal?',
        'answers': ['Rabbit', 'Snake', 'Elephant', 'Lion'],
      },
      {
        'questionText': 'Who\'s your favorite instructor?',
        'answers': ['Max', 'Max', 'Max', 'Max'],
      },
    ];
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('My First App')),
        body: Column(
          children: [
            Question(questions[_questionIndex]['questionText']),
            ...(questions[_questionIndex]['answers'] as List<String>)
                .map((answer) => Answer(_answerQuestion, answer))
                .toList(),
          ],
        ),
      ),
    );
  }
}
```

## const vs final
- `const`: compile-time constant. Use for values that never change.
- `final`: runtime-constant reference (assigned once) — common for widget constructor parameters.

```js
class Question extends StatelessWidget {
  final String questionText;
  Question(this.questionText);
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: EdgeInsets.all(10),
      child: Text(
        questionText,
        style: TextStyle(fontSize: 28),
        textAlign: TextAlign.center,
      ),
    );
  }
}
```

## @required
To mark a parameter as required in a widget constructor (in modern Dart, prefer `required` keyword).

```js
class Question extends StatelessWidget {
  final String questionText;
  Question(this.questionText);
  // In newer Dart: Question({ required this.questionText });
}
```

## Getter method
Used to compute a value dynamically.
```js
String get resultPhrase {
  if (true) {
    return 'Phrase 01';
  }
  return 'Phrase 00';
}
```

## Dart DevTools & debugging
Handy to visualize widget tree slices and performance:
- https://flutter.dev/docs/development/tools/devtools/overview
- https://flutter.dev/docs/testing/debugging

## Adaptive vs Responsive
- Adaptive: adjust UI to the platform (iOS vs Android conventions).
- Responsive: handle different sizes/orientations (phones, tablets, landscape, portrait).

### Working with responsiveness
- Use `MediaQuery` for screen dimensions.
- Consider `LayoutBuilder`/`Expanded`/`Flexible` and constraints.
- Measure the app bar when needed and subtract from available height.