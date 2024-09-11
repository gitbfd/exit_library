
{%- comment -%}<!-- REQS inclu vars: HDR_MD, HDR_STR  RTNS: HDR_TEXT -->{%- endcomment -%}

{% capture HDR_MD %}{{ include.HDR_MD }}{% endcapture HDRS %}
{%- assign HDR_STR = include.HDR_STR 
  | replace: " ","_" 
  | replace: "-","_" 
  | split: "_" -%}

{% capture HDR_TEXT %}{{HDR_MD}} {% for WORD in HDR_STR %}{{ WORD | capitalize }} {% endfor %}{% endcapture %}
{% assign HDR_TEXT = HDR_TEXT | strip %}
