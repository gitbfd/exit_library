
{%- comment -%}<!-- PAGES & STATIC_FILES  -->{%- endcomment -%}

{%- assign SPECIAL_FILE_STR = 'info' -%}

{%- assign nameMinusExt = DIR_OBJ.name | split:'.' | pop:1 | join:'.' -%}
{%- assign fileExt      = DIR_OBJ.name | split:'.' | last  -%}
{%- assign fileExtDot   = fileExt      | prepend: '.' -%}

{%- include textrs/linkAndHdrCleanr.md  HDR_MD='' HDR_STR=nameMinusExt -%}
<!-- {{HDR_TEXT}}<br> -->

{%- comment -%}<!-- TODO: run info.md check against both file types  -->{%- endcomment -%}

{%- assign INFO_CHKR = nameMinusExt | split:'' | reverse | slice:0,4 | reverse | join:''-%}

{%- comment -%}<!-- PAGE  -->{%- endcomment -%}
{%- if DIR_OBJ.url -%}
{%- comment -%}<!-- PAGE w/ content -->{%- endcomment -%}
  {%- if DIR_OBJ.content.size > 0 -%}
    {%- if site.md_exts contains fileExtDot and INFO_CHKR==SPECIAL_FILE_STR -%}

{%- comment -%}<!-- HOLD
{% capture MD_CAP %}{{ DIR_OBJ.content }}{% endcapture %}
<div class="infoLast4" markdown="1">
{{ MD_CAP | markdownify }}
</div>
 -->{%- endcomment -%}

    {%- else -%}

 * [{{HDR_TEXT}}]({{DIR_OBJ.url | relative_url }})

    {%- endif -%}

{%- comment -%}<!-- PAGE w/ FM only  -->{%- endcomment -%}
  {%- else (page w/ FM only ) -%}

{%- comment -%}<!-- FM__WITH__NO__CONTENT
   {%- assign FM_CAPD = '' -%}
    {%- for FM_ITM in DIR_OBJ -%}
      {%- if FM_ITM[0] == "content" -%}
        {%- break -%}
      {%- endif -%}
      {%- if FM_ITM[1] contains "https" or FM_ITM[1] contains "www" -%}
{% capture CAPD %}**{{FM_ITM[0] }}:** <{{FM_ITM[1] }}>{% endcapture %}
      {%- else -%}
{% capture CAPD %}**{{FM_ITM[0] }}:** {{FM_ITM[1] }}{% endcapture %}
      {%- endif FM_ITM[1]... -%}
{% capture FM_CAPD %}
{{FM_CAPD}} * {{ CAPD }}
{% endcapture %}
    {%- endfor FM_ITM... -%}
{{FM_CAPD | strip | markdownify }}
 -->{%- endcomment -%}


  {%- endif DIR_OBJ.content.size > 0 -%}

{%- comment -%}<!-- STATIC_FILE  -->{%- endcomment -%}
{%- elsif DIR_OBJ.extname -%}

{%- comment -%}<!-- static_file is .markdown  -->{%- endcomment -%}
  {%- if site.md_exts contains DIR_OBJ.extname -%}

 * [{{HDR_TEXT}}]({{DIR_OBJ.path | relative_url }})

{%- comment -%}<!-- static_file is all else (PDF, JPG, PNG, etc)  -->{%- endcomment -%}
  {%- else (other static_file) -%}

 * [{{HDR_TEXT}} ({{fileExt | remove:'.'| upcase}})]({{DIR_OBJ.path | relative_url }})

  {%- endif -%}

{%- comment -%}<!-- ERROR  -->{%- endcomment -%}
{%- else (ERR) -%}
<br> ERR @ DIR_OBJ.path -> {{DIR_OBJ.path}} <br>
{%- endif -%}



{%- comment -%}<!-- 

{% capture ROOT_ITMS_HDR %}
{{page.HDRS.H3}} [{{ HDR_TEXT }}](/{{DIR_OBJ.path}})
{% endcapture %}

{{ ROOT_ITMS_HDR | markdownify }}

TODO: inclu that takes in 
1. HDR_STR
2. HDR_MD (if desired)
and handles treatment correctly based on file type

 -->{%- endcomment -%}
