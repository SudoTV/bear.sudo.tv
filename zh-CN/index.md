---
title: SudoTV 熊吉
layout: base
localization: zh-CN
---

# {{ page.title }}

## 熊吉

本站收录 SudoTV 剧集的脚本。如果您想跟随剧集一起编程，请访问：

{% include navigation/absolute-link.html
    with-origin=true
    external=true
    href="https://series.sudo.tv"
    title="SudoTV 剧集"
    description="浏览 SudoTV 剧集"
%}

如果您想浏览剧集的脚本，点击以下剧集以查看每一集的脚本。

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
