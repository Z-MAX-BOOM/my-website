---
sidebar_position: 1
---
# 网站搭建

如何从零开始5min搭建一个网站
参考: https://www.docusaurus.cn/docs

## 安装
1. 安装node.js  https://nodejs.org/en/download/
选择node.js以及你的操作系统，然后按照提示安装即可。
例如我的是ubuntu 22.04，安装命令如下：
```
# 下载并安装 nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# 加载 nvm:
\. "$HOME/.nvm/nvm.sh"

# 下载并安装 Node.js:
nvm install 22

# 检查 Node.js 版本:
node -v
nvm current

# 检查 npm 版本:
npm -v

```
2. 安装docusaurus
基于经典模板创建网站
```
npx create-docusaurus@latest my-website classic --typescript
```


## 启动网站

1. 上一步如果安装成功，则会在你的Home下生成：
    ```
    my-website
    ├── blog
    │   ├── 2019-05-28-hola.md
    │   ├── 2019-05-29-hello-world.md
    │   └── 2020-05-30-welcome.md
    ├── docs
    │   ├── doc1.md
    │   ├── doc2.md
    │   ├── doc3.md
    │   └── mdx.md
    ├── src
    │   ├── css
    │   │   └── custom.css
    │   └── pages
    │       ├── styles.module.css
    │       └── index.js
    ├── static
    │   └── img
    ├── docusaurus.config.js
    ├── package.json
    ├── README.md
    ├── sidebars.js
    └── yarn.lock
    ```
2. 项目结构概要
- /blog/

  包含博客的 Markdown 文件。如果你关闭了博客功能，则可以将此目录删除。你还可以通过设置 path 参数来改变此目录的名称。
- /docs/

  包含文档的 Markdown 文件。可在 sidebars.js 中自定义文档在侧边栏中的顺序。如果你关闭了文档功能，则可以删除该目录。你还可以通过设置 path 参数来改变此目录的名称。
- /src/

  非文档文件，例如独立页面（pages）或自定义的 React 组件。你不必严格地遵守将非文档文件放到这里，但是将它们集中在此目录下可以更轻松地进行管理，以便您需要进行某些格式校验或处理
- /src/pages

  此目录中的任何扩展名为 JSX/TSX/MDX 文件都将被转换为网站的独立页面(page)。
- /static/

  存放静态文件的目录。此处的所有内容都将被复制到最终的 build 目录的根目录下
- /docusaurus.config.js
  
  包含站点配置的配置文件。与 Docusaurus 1 中的 siteConfig.js 文件等价
- /package.json
  
  Docusaurus 网站也是一个 React 应用程序。你可以在其中安装和使用所需的任何 npm 软件包
- /sidebars.js
  
  生成文档时使用此文件来指定侧边栏中的文档顺序
3. 启动网站
    ```
    cd my-website
    npm run start
    ```
    默认情况下，浏览器将打开 http://localhost:3000 网址。
    恭喜你！您刚刚创建了第一个 Docusaurus 网站！浏览网站以查看可用内容吧。

4. 编辑网站

    在 /src/pages 目录下，你可以创建新的页面

    在 /docs 目录下，你可以创建新的文档

    在 /blog 目录下，你可以创建新的博客文章

## 构建网站
```
npm run build
```
生成的内容将被放置到 /build 目录下，该目录可以复制到任何静态文件托管服务上，例如 GitHub pages、Vercel 或 Netlify。

## 部署到GitHub
1. 注册GitHub账号
2. 创建一个新的仓库，仓库名称为: 你的GitHub用户名.github.io
3. 在本地仓库中执行以下命令：
```
git init
git add .
git commit -m "Initial commit"
```