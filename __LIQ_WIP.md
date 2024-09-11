---
layout:    BASE
permalink: pitch_decks
title: Pitch Decks
default_fm:
  static_files:
    - name
    - path
    - modified_time
    - basename
    - collection
    - extname
  pages:
    - dir
    - name
    - path
    - url
fetch_site_objs:
  - html_pages
  - pages
  - static_files
created_date: 2024-09-03 18:43:59 -0400
updated_date: 2024-09-03 20:13:10 -0400
#updated_date: 2024-09-03 #works
---

{%- if DIR_OBJ.modified_time -%}

   {% assign STC_FL = DIR_OBJ %}

   {% assign cleanExt = STC_FL.extname | downcase %}

   {% if cleanExt contains "pdf" %}
<object data="{{ STC_FL.path }}" alt="err loading @ {{ STC_FL.name }}" class="pdf_embed"></object>
   {% elsif cleanExt contains "jpeg" %}
<img src="{{ STC_FL.path }}" alt="err loading @ {{ STC_FL.name }}" class="img_embed">
   {% elsif cleanExt contains "jpg" %}
<img src="{{ STC_FL.path }}" alt="err loading @ {{ STC_FL.name }}" class="img_embed">
   {% elsif cleanExt contains "png" %}
<img src="{{ STC_FL.path }}" alt="err loading @ {{ STC_FL.name }}" class="img_embed">
   {% elsif cleanExt contains "webp" %}
<img src="{{ STC_FL.path }}" alt="err loading @ {{ STC_FL.name }}" class="img_embed">
   {% elsif cleanExt contains "htm" %}
    {%- assign DIR_PTH    = page.path | remove: page.name -%}
    {%- assign HTML_PTH = STC_FL.path | remove: DIR_PTH -%}
    {% capture HTML_CAP %}{% include_relative {{ HTML_PTH }} %}{% endcapture %}
<div markdown="1">
{{ HTML_CAP }}
</div>
   {%- endif -%}

{%- endif -%}