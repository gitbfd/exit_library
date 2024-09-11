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
::root{--bs-link-color: #0d6efd;}
.navbar-brand{
  height: 130px;
  height: 90px;
  margin-right: 0rem;
  /*padding: 0px;*/
}
.navbar{padding: 5px 0px;}
.nav-item{font-size: 1rem;}
.navbar-nav > li{margin-left: 1.0rem;}
.exitSvg{height: 100%;}

@media (min-width: 0px) {
  .nav-link{
    font-size: 1.0rem;
    /*color: red;*/
  }
  .navbar-nav > li{ padding-right:0rem; }
  .navbar-collapse{margin-left: 0vw;}
  .exitSvg{height: 100%;}
  ul.navbar-nav.align-items-center{
    align-items: baseline !important;
  }
}
@media (min-width: 576px) {
  .nav-link{
  font-size: .9rem;
  /*color: pink;*/
  }
}
@media (min-width: 768px) {
  .nav-link{
    font-size: .95rem; transition:.2s;
    /*color: green;*/
  }
  .navbar-nav > li{margin-left: 0rem;}
}
@media (min-width: 992px) {
  .nav-link{
    font-size: 1.2rem; transition:.2s;
    /*color: orange;*/
  }
  .navbar-nav > li{margin-left: 1.0rem;}
}
@media (min-width: 1200px) {
  .nav-link{
  font-size: 1.3rem; transition:.2s;
  /*color: purple;*/
  }
  .navbar-nav > li{margin-left: 2.0rem;}
}
@media (min-width: 1400px) {
  .nav-link{
  font-size: 1.4rem; transition:.2s;
  /*color: black;*/
  }
}
</style>

<header class="sticky-top eddysNav">
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img class="exitSvg" src="{{ SVG_PATH | relative_url }}">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav align-items-center">
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