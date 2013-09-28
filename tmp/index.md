---
layout: index
description: "Blog listing for execat's blog"
tags: [execat, blog, github]
---

<p>
<ul class="posts">
{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
</p>

