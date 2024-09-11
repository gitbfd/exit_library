

{%- comment -%}<!-- create list of site[OBJ] to loop through-->{%- endcomment -%}

{% assign THIS_PG_PTH    = page.path | remove: page.name %}
{% assign THIS_PG_PTH_SZ = THIS_PG_PTH.size %}

{% assign SITE_OBJS_ARR      = "" | split: "" %}
{% assign SITE_OBJS_THIS_DIR = "" | split: "" %}
{% assign SUB_DIRS_ARR       = "" | split: "" %}

{%- for SITE_OBJ in page.fetch_site_objs -%}
  {%- assign SITE_OBJS_ARR = SITE_OBJS_ARR | concat: site[SITE_OBJ] -%}
{%- endfor -%}

{%-for SUBSET_OBJ in SITE_OBJS_ARR -%}
      {%- assign OBJ_DIR_PTH  = SUBSET_OBJ.path | remove: SUBSET_OBJ.name -%}
      {%- assign ODP_slc0 = OBJ_DIR_PTH | slice:0 -%}
      {%- if ODP_slc0== '/' -%}
        {%- assign OBJ_DIR_PTH = OBJ_DIR_PTH | remove_first:'/' -%}
      {%- endif -%}
      {%- assign OBJ_DIR_PTH_SZ = OBJ_DIR_PTH.size -%}
{%- comment -%}<!-- skip this page -->{%- endcomment -%}
    {%- if SUBSET_OBJ.path == page.path -%}
      {%- continue -%}
    {%- endif -%}
    {%- if THIS_PG_PTH_SZ <= OBJ_DIR_PTH_SZ -%}
      {%- assign SUB_DIR = OBJ_DIR_PTH | remove: THIS_PG_PTH -%}
      {%- if OBJ_DIR_PTH contains THIS_PG_PTH -%}
          {%- assign SUB_DIR_SLC2 = SUB_DIR | split:'' | reverse | slice:0 | join:'' -%}
        {%- if SUB_DIR_SLC2 == '/' -%}
          {%- assign SUB_DIR = SUB_DIR | split:'' | reverse | shift:1 | reverse | join:'' -%}
        {%- endif -%}
          {% assign SITE_OBJS_THIS_DIR = SITE_OBJS_THIS_DIR | push: SUBSET_OBJ %}
          {% assign SUB_DIRS_ARR    = SUB_DIRS_ARR          | push: SUB_DIR  %}
      {%- endif -%}
     {%- endif THIS_PG_PTH_SZ -%}
{%-endfor SUBSET_OBJ -%}

{%- comment -%}<!-- TODO: move sort func to FM -->{%- endcomment -%}

{% assign SUB_DIRS_ARR_SORTD = SUB_DIRS_ARR | uniq | sort_natural %}

{% assign H1_CHKR_ARR = H1_CHKR_ARR | split:'' %}
{% assign H2_CHKR_ARR = H2_CHKR_ARR | split:'' %}
{% assign H3_CHKR_ARR = H3_CHKR_ARR | split:'' %}

{%- comment -%}<!-- 1ST LOOP  -->{%- endcomment -%}
{%- for SUB_DIR_PTH_STR in SUB_DIRS_ARR_SORTD -%}
  {%- comment -%}<!--  -->{%- endcomment -%}
  {%- assign HDRS_ARR = SUB_DIR_PTH_STR | split:'/' -%}
  {%- assign HDR_H1     = HDRS_ARR[0] -%}
  {%- assign HDR_H2     = HDRS_ARR[1] -%}
  {%- if HDRS_ARR[2] -%}
    {%- assign HDR_H3plus = HDRS_ARR | shift:2 | join:' - ' -%}
  {%- else -%}
    {%- assign HDR_H3plus = null -%}
  {%- endif -%}
  {%- if HDR_H1 -%}
    {%- unless H1_CHKR_ARR contains HDR_H1 -%}
      {% assign H1_CHKR_ARR = H1_CHKR_ARR | push:HDR_H1 %}
      {%- comment -%}<!-- NOTE: file & dir naming reqs set here  -->{%- endcomment -%}
{%- include textrs/linkAndHdrCleanr.md  HDR_MD=page.HDRS.H1 HDR_STR=HDR_H1 -%}
{{HDR_TEXT}}
    {%- endunless H1_CHKR_ARR... -%}
  {%- endif -%}
  {%- if HDR_H2 -%}
    {%- unless H2_CHKR_ARR contains HDR_H2 -%}
      {% assign H2_CHKR_ARR = H2_CHKR_ARR | push:HDR_H2 %}
{%- include textrs/linkAndHdrCleanr.md  HDR_MD=page.HDRS.H2 HDR_STR=HDR_H2 -%}
{{HDR_TEXT}}
    {%- endunless -%}
  {%- endif HDR_H2... -%}
  {%- if HDR_H3plus -%}
    {%- unless  H3_CHKR_ARR contains HDR_H3plus -%}
      {% assign H3_CHKR_ARR = H3_CHKR_ARR | push:HDR_H3plus %}  
{%- include textrs/linkAndHdrCleanr.md  HDR_MD=page.HDRS.H3 HDR_STR=HDR_H3plus -%}
{{HDR_TEXT}}
    {%- endunless -%}
  {%- endif HDR_H3plus... -%}
{%- comment -%}<!-- 2ND LOOP  -->{%- endcomment -%}
  {%- for DIR_OBJ in SITE_OBJS_THIS_DIR -%}
  {%- comment -%}<!-- handle leading '/' in static_files  -->{%- endcomment -%}
          {%- assign OBJ_PATH_SLC = DIR_OBJ.path | slice:0 -%}
        {%- if OBJ_PATH_SLC == '/' -%}
          {%- assign OBJ_PATH = DIR_OBJ.path | remove_first:'/' -%}
        {%- else -%}
          {%- assign OBJ_PATH = DIR_OBJ.path -%}
        {%- endif -%}
        {%- comment -%}<!-- handle files at root of current dir vs files in subdirs -->{%- endcomment -%}
          {%- assign DIR_OBJ_FULL_PTH = OBJ_PATH | remove: THIS_PG_PTH -%}
          {%- assign nameAndSlash     = DIR_OBJ.name | prepend:'/' -%}
        {%- if DIR_OBJ_FULL_PTH contains '/' -%}
          {%- assign PATH_CHKR = DIR_OBJ_FULL_PTH  | remove: nameAndSlash -%}
        {%- else -%}
          {%- assign PATH_CHKR = '' -%}
        {%- endif -%}
        {%- comment -%}<!--  -->{%- endcomment -%}
     {%- if SUB_DIR_PTH_STR == PATH_CHKR -%}
     {%- assign DIR_DPTH_CHKR = DIR_OBJ_FULL_PTH | split:'/' -%}

{%- include fetchers/getFromSubDirs--linkOutGen.md  
  HDR_MD=page.HDRS.H3 
  HDR_STR=HDR_H3plus 
  DIR_DPTH_SZ=DIR_DPTH_CHKR.size 
 -%}

    {%- else -%}
    {%- endif -%}
  {%- endfor DIR_OBJ in SITE_OBJS_THIS_DIR -%}
{%- endfor  SUB_DIR_PTH_STR in SUB_DIRS_ARR_SORTD -%}

