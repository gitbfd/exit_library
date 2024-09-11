{% assign SVG_PATH = 'assets/svgs/EXIT.svg' %}
<style type="text/css">
/*:root {
--bs-breakpoint-xs: 0;
--bs-breakpoint-sm: 576px;
--bs-breakpoint-md: 768px;
--bs-breakpoint-lg: 992px;
--bs-breakpoint-xl: 1200px;
--bs-breakpoint-xxl: 1400px;
}*/
::root{
  --bs-link-color: #0d6efd;
}
.navbar-brand{
  height: 130px;
  height: 90px;
  padding: 0px;
}
.navbar{
  padding: 5px 0px;
}
.nav-item{
  font-size: 1em;
}
/*WDTH_1*/
@media (min-width: 0px) {
  .nav-link{
  font-size: .8rem;
  /*color: red;*/
  }
  .navbar-nav > li{ padding-right:0em; }
  .navbar-collapse{margin-left: 0vw;}
  .edsSvg{height: 100%;}
}
@media (min-width: 576px) {
  .nav-link{
  font-size: 1rem;
  /*color: pink;*/
  }
  .navbar-nav > li{ padding-right:.1em; }
}
@media (min-width: 767.9px) {
  .nav-link{
  font-size: 1.1em;
  /*color: blue;*/
  }
  /*.navbar-collapse{margin-left: -100px; transition:.2s;}*/
  .navbar-nav > li{padding-right: 1.0rem; transition:.2s;}
}
@media (max-width: 768px) {
  .edsSvg{height: 100%; transition: .3s;}
}
@media (min-width: 768px) {
  .nav-link{
  font-size: 1.2em;
  /*color: green;*/
  }
  .navbar-collapse{margin-left: -60px; transition:.2s;}
  .navbar-nav > li{padding-right: 0.8rem; transition:.2s;}
  .edsSvg{height: 120%;transition: .3s;}
}
@media (min-width: 992px) {
  .nav-link{
  font-size: 1.35em;
  /*color: orange;*/
  }
  .navbar-collapse{margin-left: -120px; transition:.2s;}
  .navbar-nav > li{padding-right: 1.2rem; transition:.2s;}
}
@media (min-width: 1200px) {
  .nav-link{
  font-size: 1.5em; transition:.2s;
  /*color: purple;*/
  }
  .navbar-collapse{margin-left: -60px; transition:.2s;}
  .navbar-nav > li{padding-right: 2.0rem; transition:.2s;}
}
@media (min-width: 1400px) {
  .nav-link{
  font-size: 1.5em; transition:.2s;
  /*color: black;*/
  }
  .navbar-collapse{margin-left: -60px; transition:.2s;}
  .navbar-nav > li{padding-right: 3.0rem; transition:.2s;}
}
</style>

<header class="sticky-top eddysNav">
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img class="edsSvg" src="{{ SVG_PATH | relative_url }}">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
{% for nLink in site.navLinks %}
 {% assign ACTV1 = '' %}
 {% assign ACTV2 = '' %}
 {% assign nLinkName = nLink.first[0] %}
 {% assign nLinkPath = nLink.first[1] %}
 {% if page.permalink == nLinkPath %}
   {% assign ACTV1 = "active" %}
   {% assign ACTV2 = 'aria-current="page"' %}
 {% endif %}
          <li class="nav-item">
            <a 
              class="nav-link {{ACTV1}}" 
              {{ACTV2}} 
              href="/{{ nLinkPath }}"
              >
             {{ nLinkName | upcase}}
            </a>
          </li>
{% endfor %}
        </ul>
      </div>
    </div>
  </nav>
</header>