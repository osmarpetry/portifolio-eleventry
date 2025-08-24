---
title: "TensorFlow"
date: 2025-01-15
tags:
  - '#tensorflow'
  - '#machine-learning'
  - '#ai'
  - '#python'
description: "TensorFlow notes and resources"
layout: post.njk
---

# TensorFlow
  
- Returns two tuples (two immutable lists in math parlance).
- Split arguments into train and test, separating the two groups for different use.
- Train tuple has 6000, test has 1000.
- Shape is 28x28.
- Use a Python library to visualize data: `import matplotlib.pyplot as plt`.
- Images are identified by a number to map label → class. For fashion MNIST there are 10 classes: [T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle boot].
    
    ![[RAtsYYyT 4.png|RAtsYYyT 4.png]]
    
- Input shape defines the image size; `Flatten` makes them one-dimensional.
- Before the dense layer:
    
    ![[QzC1J1S2 4.png|QzC1J1S2 4.png]]
    
Normal
For a fully connected layer (everyone talks to everyone):
![[-eHHLsbk 4.png|-eHHLsbk 4.png]]
Dense (fully connected) layer
What I’m doing:
![[L2v4a_Jg 4.png|L2v4a_Jg 4.png]]
To:
1. Flatten 28x28 images.
2. Apply ReLU; with few layers you can add more capacity; some only call it “deep” if more layers.
3. Dropout of 0.2 (20%) helps reduce overfit.
4. Softmax to output probabilities across classes; total must sum to 1.

Model example:
```python
keras.Sequential([
  keras.layers.Flatten(input_shape=(28, 28)),
  keras.layers.Dense(256, activation=tensorflow.nn.relu),
  keras.layers.Dropout(0.2),
  keras.layers.Dense(10, activation=tensorflow.nn.softmax)
])
```
    
    ![[6IQgGSnE 4.png|6IQgGSnE 4.png]]
    
The exact number of neurons in Dense is flexible; 256 is a common choice. ReLU enables non-linear learning:
![[CGtpMIcU 4.png|CGtpMIcU 4.png]]
It basically enables non-linear separation
![[Pu6OCEDg 4.png|Pu6OCEDg 4.png]]
  
  
![[zK48A3JU 4.png|zK48A3JU 4.png]]
  
Then for the output layer:
```python
keras.layers.Dense(10, activation=tensorflow.nn.softmax)
```
Before training (`fit`) you must compile:
```python
model.compile(
  optimizer='adam',
  loss='sparse_categorical_crossentropy',
  metrics=['accuracy']
)
```
1. Adam is commonly used for optimization, especially with multiclass.
2. For loss, we use multiclass cross-entropy.
3. The metric is accuracy (simple and intuitive). Reducing loss and increasing accuracy tends to indicate better learning.

Then train (`fit`) the model. How much to train depends on the problem; you only know by testing:
1. Compare train vs validation.
2. 5 epochs is a decent starting point; more may overfit depending on the dataset.
3. Split validation from training to observe generalization, e.g. `validation_split=0.2`.

```python
history = model.fit(
  train_images, train_labels,
  epochs=5,
  validation_split=0.2
)
```
Finally, use the visualization library to inspect predictions and see if they match the expected class.
