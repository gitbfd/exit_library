---
layout:    BASE
permalink: profiles
title:     Profiles
fetch_site_objs:
  - pages
  - static_files
HDRS:
  H1: '###'
  H2: '####'
  H3: '#####'

HDR_MD:
  H1: '###'
  H2: '####'
  H3: '#####'
---

# {{ page.title | strip }}

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

{%- include fetchers/getFromSubDirs.md -%}
