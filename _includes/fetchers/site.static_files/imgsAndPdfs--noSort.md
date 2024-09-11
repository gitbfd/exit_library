{% assign cleanExt = null %}

{% for itm in site.static_files %}

    {% assign cleanExt = {{itm.extname | downcase }} %}

    {% if cleanExt contains "pdf" %}
      <object data="{{ itm.path }}" alt="err loading @ {{ itm.name }}" class="pdf_embed"></object>
    {% endif %}

    {% if cleanExt contains "jpeg" %}
      <img src="{{ itm.path }}" alt="err loading @ {{ itm.name }}" class="img_embed">

    {% elsif cleanExt contains "jpg" %}
      <img src="{{ itm.path }}" alt="err loading @ {{ itm.name }}" class="img_embed">

    {% elsif cleanExt contains "png" %}
      <img src="{{ itm.path }}" alt="err loading @ {{ itm.name }}" class="img_embed">

    {% elsif cleanExt contains "webp" %}
      <img src="{{ itm.path }}" alt="err loading @ {{ itm.name }}" class="img_embed">

    {% endif %}

{% endfor %}