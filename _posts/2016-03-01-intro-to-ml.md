---
title:  "Intro to Machine Learning"
date:   2016-03-01 22:00:00
description: Notes from the introductory class to machine learning
---

# Machine Learning books

## Textbooks

* [Machine Learning](http://www.cs.cmu.edu/afs/cs.cmu.edu/user/mitchell/ftp/mlbook.html) by [Tom Mitchell](http://www.cs.cmu.edu/~tom/)
* [Pattern Recognition and Machine Learning]() by Christopher Bishop
* [Machine Learning: A Probablistic Perspective]() by Kevin Murphy

## Other books

* [Pattern Classification]() by Richard O Duda, Peter E Hart, David G Stork.
* [The Elements of Statistical Learning: Data Mining, Inference, and Prediction]() by Trevor Hastie, Robert Tibshirani, Jerome Friedman.
* [Data Mining: Practical Machine Learning Tools and Techniques]() by Ian H Witten, Eibe Frank, Mark A Hall.
* [Principles of Data Mining (Adaptive Computation and Machine Learning)]() by David J Hand, Heikki Mannila, Padhraic Smyth.

---

# What is machine learning?

Acoording to Tom Mitchell:

> Formally, a computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, it its performance at tasks in T as measured by P, improves with experience.

Consider playing chess as a learning problem.

|-----------|---------------------------|---------------------------|
| Task (T)  | Performance measure (P)   | Training experience (E)   |
|-----------|---------------------------|---------------------------|
| Playing chess | Percent of games won against opponents | Playing practice games against itself |
| Driving on public highway/roads | Percent of times the vehicle is involved in accidents | Sequence of images and steering commands recorded while observing a human driver |

Machine learning can be used in the following situations:

* When human expertise is absent
    eg. navigating on mars
* Humans are unable to explain their expertise
    eg. learning speech or language, vision
* Requirements and data change over time
    eg. Tracking, biometrics
* The problem or data size is too large
    eg. Web search, on-scale personalized recommendations

# Types of learning

## Supervised learning

Here the training data includes the desired outputs. Some of the most famous supervised learning methods are:

* Decision tree induction
* Rule induction
* Instance based learning
* Bayesian learning
* Neural networks
* Support vector machines
* Linear regression
* Model ensembles
* Graphical models
* Learning theory

eg. Regression: For a given set of observations of area of the room (A), number of rooms (N), and price (P), find the expected value of a room with the attributes (A', N') as P.

eg. Classification: For a set of attributes like the location of transaction (L), amount of transaction (A), time of transaction (T), and if the transaction was fraud (F), given values (L', A', T') classify the transaction as fraud or not fraud.

Given a set of observations of temperature (T), humidity (H), sky conditions (S), and the fact that it rained or not (R), predict for a given set of observations of (T', H', S') the expected value of R.

Predict how well a user will like an item (song, video) that he has not viewed using a set of historical preference judgments from a community of similar users.

With the occurence of words known for a pre-classified set of texts, classify a given input email as spam or ham.

eg. Ranking: Rank a set of pages by relevance to a search term.

## Unsupervised learning

In unsupervised learning, the training data does not include desired outputs. The point of unsupervised learning is to find interesting structure in data. Methods used in unsupervised learning are:

* Clustering
* Dimensionality reduction

eg. Finding patterns: Find causation and correlation patterns between items that are purchased together (diapers and milk, bread and milk, etc).

Clustering similar images by determining their similarity.

## Semi-supervised learning

The training data includes a few desired outputs.

## Reinforcement learning

The learner interacts with the world via "actions" and tries to find the optimal policy of behavior with respect to the rewards it receives from the environment.

* Markov decision processes
* Q-learning

In general, machine learning concepts and techniques like:

* Feature selection
* Cross validation
* Maximum likelihood estimation
* Gradient descent
* Expectation minimization

are used to solve a lot of the problems.
