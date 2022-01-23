---
title: SudoTV 熊吉
layout: base
localization: zh-CN
---

# {{ page.title }}

## 熊吉

本站收录 SudoTV 剧集的文字记录。如果您想跟随剧集一起编程，请访问：

{% include navigation/absolute-link.html
    with-origin=true
    external=true
    href="https://series.sudo.tv"
    title="SudoTV 剧集"
    description="浏览 SudoTV 剧集"
%}

如果您想浏览剧集的文字记录，点击以下剧集以查看每一集的文字记录。

## 剧集列表

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

## 欲了解更多

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/reprint/series"
    title="如何转载剧集"
    description="查看您转载 SudoTV 剧集的权利和限制"
%}

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/reprint/site"
    title="如何转载网站及其源代码"
    description="查看您转载 SudoTV 网站及其源代码的权利和限制"
%}