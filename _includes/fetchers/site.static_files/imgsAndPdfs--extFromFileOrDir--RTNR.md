  {% assign dateStrArr  = "" | split: "" %}
  {% assign indxrArr    = "" | split: "" %}
  {% assign BIG_OBJ_ARR = "" | split: "" %}

{% unless page.fetch_path %}
<h3 style="color:red"> ERROR - Add "fetch_path: path/to/image/dirs/" to frontMatter </h3>
{% endunless %}
{% if page.extList %}
  {% assign extList = page.extList %}
{% else %}
  {% assign extList = ".jpeg,.jpg,.png,.webp,.pdf"  | split:"," %}
<!-- NOTE: no extList in frontMatter; USING: {{extList | jsonify}} -->
{% endif %}

{%- for ITM in site.static_files where ITM.path contains page.fetch_path -%}
    {% assign threeElemSubArr  = ""  | split: "" %}
    {% assign dateForSecHdr = null %}
  {% if ITM.path contains page.fetch_path %}
    {% assign pathArr          = ITM.path | split:"/" %}
    {% assign datefromDirName  = pathArr[2] %}
    {% assign datefromFileName = ITM.name | truncate: 10, "" %}
    {% assign datefromFileMod  = ITM.modified_time | truncate: 10, "" %}
    {% assign datefromDirName  = pathArr[2] %}
    {% if datefromDirName contains "20" and datefromDirName.size == 10 %}
      {% assign dateForSecHdr = datefromDirName %}
    {% elsif datefromFileName contains "20" and datefromFileName.size == 10 %}
      {% assign dateForSecHdr = datefromFileName %}
    {% else %}
      {% assign dateForSecHdr = datefromFileMod %}
    {% endif %}
  {% endif %}
  {% if dateForSecHdr != null %}
    {% assign dateStrArr      = dateStrArr      | push: dateForSecHdr %}
    {% assign indxrArr        = indxrArr        | push: dateForSecHdr | push: forloop.index %}
    {% assign threeElemSubArr = threeElemSubArr | push: dateForSecHdr | push: ITM | push: forloop.index %}
    {% assign BIG_OBJ_ARR     = BIG_OBJ_ARR     | push: threeElemSubArr %}
  {% endif %}
{%- endfor -%}

{% assign BIG_OBJ_idxrArr    = BIG_OBJ_idxrArr | split:"" %}
{% assign sortedImgAndPdfArr = sortedImgAndPdfArr | split:"" %}

{%- for OBJ in BIG_OBJ_ARR -%}
    {% unless BIG_OBJ_idxrArr contains OBJ[2] %}
      {% assign BIG_OBJ_idxrArr = BIG_OBJ_idxrArr | push: OBJ[2] %}
      {% assign cleanExt = OBJ[1].extname | downcase %}
      {% if extList contains cleanExt %}
          {% assign sortedImgAndPdfArr = sortedImgAndPdfArr | push: OBJ[1] %}
      {% endif %}
    {% endunless %}
{%- endfor OBJ -%}

{% comment %}
<!--
RTNS:
  1. sortedImgAndPdfArr, where sortedImgAndPdfArr contains an array of Jekyll static_file objs
  2. extList, which contains a list of all file extensions rendered
  3. date_SORTED contains date in format YYYY-MM-DD (10 char string) -->
{% endcomment %}
