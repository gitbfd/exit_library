
{%- comment -%}<!-- STATIC_FILES  %include fetchers/site.static_files/basic--img_pdfs_html.md% -->{%- endcomment -%}

{%- assign DIR_PTH    = page.path | remove: page.name -%}
{%- assign DIR_PTH_SZ = DIR_PTH.size -%}

{%- for STC_FL in site.static_files -%}{%- comment -%}<!-- limit to fecthing from subdirs (next two conditions) -->{%- endcomment -%}
  {%- assign STC_PTH    = STC_FL.path | remove: STC_FL.name -%}
  {%- assign STC_PTH_SZ = STC_PTH.size -%}
 {%- if DIR_PTH_SZ < STC_PTH_SZ -%}
  {%- if STC_FL.path contains DIR_PTH -%}
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
    {%- assign HTML_PTH = STC_FL.path | remove: DIR_PTH -%}
    {% capture HTML_CAP %}{% include_relative {{ HTML_PTH }} %}{% endcapture %}
<div markdown="1">
{{ HTML_CAP }}
</div>
   {%- endif -%}
  {%- endif -%}
 {%- endif -%}
{%- endfor -%}

