
{%- comment -%}<!-- STATIC_FILES  -->{%- endcomment -%}

{%- assign nameMinusExt = DIR_OBJ.name | split:'.' | pop:1 | join:'.' -%}
{%- assign pgExt = DIR_OBJ.name | split:'.' | last | prepend: '.' -%}

{%- if site.md_exts contains DIR_OBJ.extname -%}

<br>
DIR_OBJ.extname -> {{DIR_OBJ.extname}}<br>

{%- endif -%}