---
title:  "Supervised Learning"
date:   2016-03-02 22:00:00
description: Notes from the class on supervised learning
---

# Inductive vs Deductive Reasoning

Consider the following facts:

> * All men are mortal.
> * Socrates is a man.
> * Therefore, Socrates is mortal.

This kind of reasoning is called [deductive reasoning](https://en.wikipedia.org/wiki/Deductive_reasoning) or top-down logic. In this kind of reasoning, we go from a general case to a more specific case. If a set of rules applies to an entire domain of discourse (men), then it is guaranteed to apply to each subset of that domain.

Consider the other kind of reasoning:

> * All the birds that I have seen can fly.
> * Therefore, all birds must fly.

This kind of reasoning is the exact opposite of what we did in deductive reasoning. We have applied an observation regarding a subset of a domain to a larger domain. This kind of reasoning is called [inductive or abductive reasoning](https://en.wikipedia.org/wiki/Inductive_reasoning). Induction is a process of reasoning which infers a general conclusion based on individual cases.

Now we know that it takes the person who made those two statements above a trip to Australia, or Antactica, or even a zoo to be proven incorrect, but it is surprising how often we apply inductive reasoning naturally while learning new things.

Of all the people, Donald Drumpf is the worst offender of using inductive reasoning incorrectly.

> "Jeb Bush likes illegals because of his wife."
> - Donald Drumpf
>
> * Jeb Bush likes his wife.
> * Jeb Bush's wife is Mexican.
> * Most illegals (immigrants) are Mexican.
> * Jeb Bush likes illegals.

# Supervised Learning

In supervised learning, the learning task is to approximate the unknown (true) function `f` from the training examples <x, f(x)>. Since the training examples are a small slice from all the possible values of <x, f(x)>, our approximation for the true function is going to be inductive in nature ie. going from small set of samples to making a general assumption. For this reason, supervised learning is also called inductive learning.

The selection of this approximation of `f` comes from a set of hypotheses called the hypothesis space H. The hypothesis space is a set of candidate functions that try to model our assumptions about `f`.
