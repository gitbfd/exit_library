
{%- comment -%}<!-- PAGES -->{%- endcomment -%}
{%- assign DIR_PTH    = page.path | remove: page.name -%}
{%- assign DIR_PTH_SZ = DIR_PTH.size -%}

{%- for PG in site.pages -%}{%- comment -%}<!-- limit to fecthing from subdirs (next two conditions) -->{%- endcomment -%}
  {%- assign PG_PTH    = PG.path | remove: PG.name -%}
  {%- assign PG_PTH_SZ = PG_PTH.size -%}
 {%- if DIR_PTH_SZ < PG_PTH_SZ -%}
  {%- if PG.path contains DIR_PTH -%}

{%- comment -%}<!-- PAGES -->{%- endcomment -%}
    {%- for PG_ITM in PG -%}
      {%- unless PG_ITM.first == "content"  -%}
       {%- comment -%}
       <!-- TODO: write FM treatment approach to handle frontMatter **{{ PG_ITM[0] }}:** {{ PG_ITM[1] }} <br>  -->
       {%- endcomment -%}
      {%- else -%}

        {%- if PG.content.size > 0 -%}
    {% capture MD_CAP %}{{ PG.content }}{% endcapture %}
<div markdown="1">
{{ MD_CAP }}
</div>

        {%- endif -%}
          {%- break -%}
      {%- endunless -%}
    {%- endfor -%}
  {%- endif -%}
 {%- endif -%}
{%- endfor -%}
