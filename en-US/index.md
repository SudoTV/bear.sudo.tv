---
title: SudoTV Bear
layout: base
localization: en-US
---

# {{ page.title }}

## Bear

This site contains transcripts for SudoTV series. If you want to bear with the series content, please visit:

{% include navigation/absolute-link.html
    with-origin=true
    external=true
    href="https://series.sudo.tv"
    title="SudoTV Series"
    description="Browse SudoTV Series"
%}

If you want to browse the transcripts of the series, please click the series below to view the transcripts of each episodes.

## Series List

{% include bear/bear-link.html
    href="video-cover-generator"
    series=site.data.series.video-cover-generator
%}

{% include bear/bear-link.html
    href="what-to-play"
    series=site.data.series.what-to-play
%}

{% include bear/bear-link.html
    href="clone-bilibili"
    series=site.data.series.clone-bilibili
%}

## Learn More

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/reprint/series"
    title="How to Reprint Series"
    description="View your right and limitations to reprint SudoTV Series"
%}

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/reprint/site"
    title="How to Reprint Sites Content and Source Code"
    description="View your right and limitations to reprint SudoTV Sites Content and Source Code"
%}