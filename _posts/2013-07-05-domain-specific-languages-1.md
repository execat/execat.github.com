---
layout: post
title:  "Domain specific languages"
date:   2013-07-05 22:35
categories: dsl programming metaprogramming languages
---

A [domain specific language](https://en.wikipedia.org/wiki/Domain-specific_language) is a type of programming language or specification language dedicated to a particular problem domain, a particular problem representation technique, and/or a particular solution technique.

During my visit to [RubyConf](http://rubyconfindia.org/2013/), I was introduced to two Ruby DSLs:

# [Muse](https://github.com/sausheong/muse)

A RubyGem by Sau Sheong that (among other things) can be used to represent music. An excellent implementation of the gem was demonstrated in the talk: an auto music generator from any input data called ["otto"](https://gist.github.com/sausheong/5891040) (auto, otto. Get it? :-D).

Alternative (older) version [here](https://github.com/sausheong/muse/blob/master/songs/otto.rb).

# [BioRuby](https://github.com/bioruby/bioruby)

A RubyGem that according to the authors "is an open source Ruby library for developing bioinformatics software".

This was the first talk on RubyConf after the keynote, and for me, was mindblowing. I am looking for the video to be uploaded.

As if the gem by itself wasn't impressive, it has even more plugins(?) that run on top of the BioRuby. A repo of these gems can be found on [biogems.info](http://www.biogems.info/).

Takes shit to another level by introducing "1" indexed strings among other things (to "make it easier for the biotechnologists").

------

This inspired me to pick up my pet project that I started a year ago: [musica](https://github.com/execat/musica); a DSL for composing music.

More on that later (because I am undecided about the language to use :-P)