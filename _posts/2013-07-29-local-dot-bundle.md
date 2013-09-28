---
layout: post
title:  "Local .bundle directory"
date:   2013-07-29 10:30
categories: rails ruby gem bundler
---

So, turns out having a separate `.bundle` directory for each project resoloved loads of my issues straight-away.

For a Ruby app with a Gemfile, execute `bundle install --path .bundle` (or whatever you prefer instead of `.bundle` directory) to install the Gems locally. Subsequent `bundle` commands do not need `--path` parameter to be specified. 

One can then execute the locally installed Gems through `bundle exec <command>`.

That, with `rvm` for managing the same Ruby versions. Nice way to keep the entire project base on the same version of the software irrespective of the OSes/distros being used.
