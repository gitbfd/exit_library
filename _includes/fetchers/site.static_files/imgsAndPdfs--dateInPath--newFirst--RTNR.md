{% comment %}<!-- CHECK fetch_path -->{% endcomment %}
{% unless page.fetch_path %}
<h3 style="color:red"> ERROR - Add "fetch_path: path/to/image/dirs/" to frontMatter </h3>
{% endunless %}
{% comment %}<!-- GET extList -->{% endcomment %}
{% if page.extList %}
  {% assign extList = page.extList %}
{% else %}
  {% assign extList = ".jpeg,.jpg,.png,.webp,.pdf"  | split:"," %}
<!-- NOTE: no extList in frontMatter; USING: {{extList | jsonify}} -->
{% endif %}

{% comment %}<!-- make empty arrays before loop -->{% endcomment %}
    {% assign dateStrArr  = "" | split: "" %}
    {% assign BIG_OBJ_ARR = "" | split: "" %}
{%- for ITM in site.static_files -%}
    {% comment %}<!-- make new vars each loop itr -->{% endcomment %}
    {% assign threeElemSubArr  = ""  | split: "" %}
    {% assign datefromPathName = null %}
  {% if ITM.path contains page.fetch_path %}
    {% assign pathArr          = ITM.path | split:"/" %}
    {% assign datefromPathName = null %}
    {% for pthArrItm in pathArr %}
        {% assign pthArrItmTrnc = pthArrItm     | truncate: 10, "" %}
        {% assign firstNumTst   = pthArrItmTrnc | split: "" %}
      {% if firstNumTst[0]=="2" and firstNumTst[1]=="0" %}
        {% assign cleanExt = ITM.extname | downcase %}{% comment %}<!-- check file extname to ensure valid  -->{% endcomment %}
        {% if extList contains cleanExt %}
          {% assign datefromPathName = pthArrItmTrnc %}
        {% endif %}
    {% break %}{% comment %}<!-- break loop so only first valid date in path is used  -->{% endcomment %}
      {% endif %}
    {% endfor %}
  {% endif %}
  {% if datefromPathName != null %}
    {% assign dateStrArr      = dateStrArr      | push: datefromPathName %}
    {% assign bigIdxr         = forloop.index   | prepend: "bigIdx" %}
    {% assign threeElemSubArr = threeElemSubArr | push: datefromPathName | push: ITM | push: bigIdxr %}
    {% assign BIG_OBJ_ARR     = BIG_OBJ_ARR     | push: threeElemSubArr %}
  {% endif %}
{%- endfor -%}

{% assign dateStrArr_SORTED  = dateStrArr         | sort | reverse %}
{% assign BIG_OBJ_uniqr      = BIG_OBJ_uniqr      | split:"" %}{% comment %}<!-- ensures no repeats  -->{% endcomment %}
{% assign sortedImgAndPdfArr = sortedImgAndPdfArr | split:"" %}{% comment %}<!-- final RTN array  -->{% endcomment %}

{%- for date_SORTED in dateStrArr_SORTED -%}
  {%- for BIG_OBJ in BIG_OBJ_ARR -%}
   {% if date_SORTED == BIG_OBJ[0] %}
      {% unless BIG_OBJ_uniqr contains BIG_OBJ[2] %}
        {% assign BIG_OBJ_uniqr      = BIG_OBJ_uniqr      | push: BIG_OBJ[2] %}{% comment %}<!-- checks bigIdx value  -->{% endcomment %}
        {% assign sortedImgAndPdfArr = sortedImgAndPdfArr | push: BIG_OBJ[1] %}
    {% break %}
      {% endunless %}
    {% endif %}
  {%- endfor BIG_OBJ -%}
{%- endfor date_SORTED -%}

{% comment %}<!-- get uniq date array for UI  -->{% endcomment %}
{% assign yrsSortedUniqArr = yrsSortedUniqArr | split:"" %}
{%- for yrOnly in dateStrArr_SORTED -%}
   {% assign yrOnlyStr = yrOnly    | truncate: 4, "" %}
   {% assign yrsSortedUniqArr = yrsSortedUniqArr | push:yrOnlyStr %}
{%- endfor -%}
{% assign yrsSortedUniqArr = yrsSortedUniqArr | uniq %}

{% comment %}<!-- RTNS:
  1. sortedImgAndPdfArr, array of Jekyll static_file objs, where [0] contains 10 char sorted date, [1] contains Jek obj, [2] contains bigIdx val
  2. extList, which contains a list of all file extensions rendered
  3. dateStrArr_SORTED contains date in format YYYY-MM-DD (10 char string)
  4. yrsSortedUniqArr conatins list of all years, for UI org purposes
-->{% endcomment %}
