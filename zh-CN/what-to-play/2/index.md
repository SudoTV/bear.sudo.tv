---
title: 第2集 - 玩什么助手
layout: base
localization: zh-CN
---

{% include bear/episode-detail.html
    series=site.data.series.what-to-play
    episode-id=2
    dependency0=site.data.topic.node-js
%}

Hello 大家好，欢迎来到本期小教程。上一集，我们设置了我们的应用运行所需的环境，也做了一点点工作。这一集我们不写代码，而是要先补充一个基础知识：版本控制系统 Git。每一集教程我都会为这一集结束之后的代码做一个标记，只要有这个版本控制系统各位就可以完美的从上一次结束的地方继续。

## 下载

首先我先介绍一种最简单的下载方式。在每一集的最后我会放置一个下载链接，比如说对于第一集，链接是 `https://github.com/SudoLand/Tutorial-What-To-Play/releases/tag/Episode-1`。访问这个网址，然后选择 `Source code (zip)` 就可以下载对应时期的代码了。

这个方法很简单，但是足够用了。但是随着我们的实力增加，Git 作为一个非常有用的版本控制工具，早晚都要接触。如果各位想进一步了解，我马上就会介绍到。

## 工具

我们可以在搜索引擎搜索 `git` 然后进入它的官方网站进行下载。但是其实我有一个更推荐各位使用的方法。我们根据各位不同的操作系统分别讲。

如果你正在使用 MacOS 系统在搜索引擎搜索 `homebrew` 进入它的官方网站，或者你也可以直接运行其官方网站提供的脚本，你可以在视频简介中找到这段脚本。

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

来安装。安装完毕之后运行 `brew install git` 就可以直接安装 Git 了，这个命令在我的主机上报错显示未找到命令，这是因为我在使用 Windows 系统，如果你使用的 MacOS 这应该能正常运行！

如果你正在使用 Windows，`choco` 是一个还不错的工具，在搜索引擎搜索 `choco` 进入它的官方网站，或者你也可以直接运行这个脚本来安装。

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

无论是 HomeBrew 还是 Git 它的命令行工具都可能会需要你输入 Y 也就是 Yes 的首字母来确认。
注意，在 Windows 系统下，你需要这样打开一个有管理员权限的 `powershell`。安装完 `choco` 之后我们运行 `choco install git` 就可以安装 Git 了！

## 克隆

当我们安装完 Git 之后，各位可以从 Github 上克隆本教程所需的代码。运行

```sh
git clone https://github.com/SudoLand/Tutorial-What-To-Play.git
```

就可以把需要的代码下载到当前文件夹下。需要注意的是下载下来的是最新版的代码，我们需要再运行以下命令将内容恢复到你想要的位置。在每一集对代码有修改的视频末尾，各位可以找到对应的标签名称，比如说第一集的标签是 `Episode-1`。

用 cd 命令进入刚才下载下来代码的文件夹。你可以用 `git status` 命令来查看你是否已经在对应的文件夹下了。

运行 `git checkout tags/<tag> -b <branch-name>` 就可以将代码恢复到对应的位置了！开始一起编写代码吧！