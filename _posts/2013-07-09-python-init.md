---
layout: post
title:  "Class scopes in Python"
date:   2013-07-09 11:10
categories: python programming languages
---

Consider a class like this:

{% highlight python %}
class MyClass:
  x = 0

a = MyClass()   #=> Creates one MyClass object
b = MyClass()   #=> Creates another MyClass object

a.x = 123       #=> a.x = 123 and b.x = 0
b.x = 42        #=> a.x = 123 and b.x = 42
{% endhighlight %}

Not that bad. Nothing weird.

Well, that's just because it doesn't matter much for immutable objects like ints, but if x was a mutable type, like a list, it could have unexpected consequences.

{% highlight python %}
class MyClass:
  x = [1,2,3]

a = MyClass()   #=> Creates one MyClass object
b = MyClass()   #=> Creates another MyClass object
                #=> a.x = [1,2,3] and b.x = [1,2,3]

a.x.append(4)   #=> a.x = [1,2,3,4] and b.x = [1,2,3,4]
b.x.reverse()   #=> a.x = [4,3,2,1] and b.x = [4,3,2,1]
{% endhighlight %}

Solution: MyClass should bind instance variables in `__init__`, rather than doing it in the class scope.