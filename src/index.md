---
title: "Welcome to 0CMS Eleventy"
layout: "layouts/base.njk"
---

This is the homepage of the 0CMS Eleventy example.

## Featured Services
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  {% include "components/card.njk" title="Fast", description="Eleventy is flexible.", image="https://placehold.co/600x400" %}
  {% include "components/card.njk" title="Simple", description="No framework overhead.", image="https://placehold.co/600x400" %}
</div>

## FAQ
{% include "components/accordion.njk" items=[
  { "header": "What is Eleventy?", "content": "A simpler static site generator." },
  { "header": "Does it use React?", "content": "No, it's zero-JS by default." }
] %}
