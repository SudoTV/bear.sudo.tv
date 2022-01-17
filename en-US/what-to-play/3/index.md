---
title: Episode 3 - What To Play
layout: base
localization: en-US
language: zh-CN
---

{% include banner/not-translated.html %}

{% include bear/episode-detail.html
    series=site.data.series.what-to-play
    episode-id=2
    dependency0=site.data.topic.node-js
%}

Hello 大家好，欢迎来到本期小教程。上一集，我们搞定了代码的下载，学习了 Git 的基础使用。这一集我们主要一起学习使用第三方的包，用它尝试从 Steam 获得需要的数据并且把他们渲染在我们的界面上。为了获得数据，各位要先注册一个自己的 Steam API Key，那我们从这里开始吧。

### 注册

首先各位需要一个 Steam 账号，访问这个网站 `https://steamcommunity.com/dev/apikey` 你可以在评论区找到这个网址。这是 Steam 官方提供的页面，登陆你的账号来创建你的 API Key，这是用来向 Steam 服务器证明这个网站的身份的。

需要科普一下的是，这个 Key 并不只能获得你的 Steam 账号中游戏的数据，而是你可以用它获得所有 Steam 可以查到的公开数据，之所以需要登陆你的账号是因为 Steam 的服务器需要了解是谁在访问他们的数据。

各位应该会在这个网站看到这样的界面，它向我们询问域名名称，如果你没有域名也没关系，这知识用来统计的，各位如果不知道输入什么就随便写一个比如 `test.com` 就可以了。

### 安装包

有了我们需要的密钥，接下来的工作就要在 VSCode 中处理了。

我们今天用一个我在网上发布的请求包来完成对 Steam API 的请求，用这种方法我们以后会取得来自更多网站的数据，也可以简化现在理解所谓“请求”的难度。

按 control + 波浪号键启动 VSCode 的控制台。运行以下的命令，你可以在评论区找到这些命令并且复制运行。

```sh
yarn add @barktler/core @barktler/driver-axios @barktler-api/steam
```

如果你没有安装 yarn，换句话说运行这个命令出现提示 yarn 没有找到之类的，你也可以用 npm 来安装，你也可以在评论区找到用 npm 安装的命令。

```sh
npm install @barktler/core @barktler/driver-axios @barktler-api/steam --save
```

在稍等一会之后我们需要的安装包就准备好了！
很显然，我之前不小心输错了命令的一部分，这个时候我们的目录下方会出现错误报告，我们纠正之后把错误报告删除就可以了。

### 请求

我们首先使用 `yarn start` 命令按照第一集提供的方式启动我们的开发服务器。打开 `App.js` 文件。

接下来我们需要简单的升级一下我们的组件，现在的组件是一个 `function` 类型，换句话说就是函数组件，我们需要把它升级为 `class` 组件，也就是类组件。其实说升级不太准确，更准确的说法是改写，改写之后的类组件更适合新手理解组件的生命周期。我们以后会讲到生命周期和函数组件的使用。各位先和我一起试着改写一下。

第一步，我们要把开头修改一下，我们将 `function` 改成 `class` ，我们把小括号对删除，然后添加一个 `extends React.Component` 来声明这个类是一个 React 组件。然后我们需要在这个类中实现一个 `render` 函数。最后把我们把内容的部分移到 `render` 函数中，就完成了。

在 React 库中，每一个组件在第一次渲染之后会调用它的 `ComponentDidMount` 函数，也就说如果我们要从外部获取数据的话，把获取数据的逻辑放在这个函数里再合适不过了。各位暂时不知道这是啥东西也没有任何问题，我们一起来简单实现胰腺癌。

我们刚才安装了请求用的库。我们可以在这个库的网站上详细了解它是怎么工作的。在这里我们在 `ComponentDidMount` 库中这样来写。

```js
import { axiosDriver } from "@barktler/driver-axios";
import { SteamAPI } from "@barktler-api/steam";
class A {
    componentDidMount() {
        const steamApi = SteamAPI.create('steam api key');
        steamApi.useDriver(axiosDriver);
        steamApi.getOwnedGames('steam id').then((detail) => {
            console.log(detail);
        });
    }
}
```

首先我们创建一个 SteamAPI 类的实例，在这里我们需要填写我们在上面获得的密钥。按照这个库的要求，我们也要引用一个驱动，在这里我们刚才安装了 `axios` 驱动，我们使用它。

最后我们调用 `getOwnedGames` 接口传入我们想要查看有游戏库的 Steam 数字ID就可以获得它的游戏内容了。

需要注意的是这个 `then` 的写法，因为我们向 Steam 的服务器发送请求，但是 Steam 的服务器需要时间来响应，我们要用这种方式等待数据到位之后再进行操作。再数据到位之后，我们用 `console.log` 函数让浏览器把收到的数据显示在控制台里。

保存刷新之后，我们可以看到在一小段时间之后，控制台里就显示了我们的游戏列表。

这些内容是本次小教程的第一个难点。如果各位有不理解的点，欢迎在弹幕和评论区中和我交流。

### 显示

我们在获得对应的数据之后，首先就是要分析这些内容。但是在这之前，让我们先随便渲染一些什么东西。

为了能把这些游戏画在屏幕上，我们要创建一个 `state` 在 React 组件中这样写就可以为它增加一个初始的状态，React 需要通过当前组件的状态来显示不同的内容。换句话说，我们想改变组件显示的内容，只要改变状态就可以了。

我们像这样添加一个新的状态叫 `games` 我们让他等于一个空的数组。然后我们稍微编辑一下数据获取的逻辑，我们让它在数据到位之后修改 `games` 的状态，注意，如果你想改变组件的状态，你需要像这样用 `setState` 函数来编辑，而不能直接改变 `state` 的值。

好了！让我们在页面上显示 `games` 的数量，很简单，只要用大括号包裹我们想显示的值就可以了。

保存刷新，我们可以看到，在一小段时间之后，这个数字从 0 变成一个更大的数字了，这个更大的数字就是你 Steam 的游戏数量。

### 美化

最后，让我们把长度的显示改成游戏的名字。我们把 `length` 改成 `map` 这是一个函数，我们这样写，意思是对于每一个游戏，显示它的名字。需要注意的是，每一个值需要一个 `key` 参数，这个参数应该是每一个游戏一个唯一的值，这样在位置交换的时候我们的页面能更有效率的处理。各位暂时不理解这个 key 没关系，只要确定给他一个唯一的值就可以了，以后我们会提到相关的方面。

保存刷新！我们可以看到在短暂的等待之后页面上就显示了所有游戏的名字，大功告成了。

### 结尾

这个视频是第一个有难度的视频，各位如果有什么问题，欢迎和我交流。

我们下期介绍矩阵布局和游戏图片的显示。