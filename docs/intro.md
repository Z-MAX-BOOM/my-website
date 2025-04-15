---
sidebar_position: 1
---
# 网站搭建

如何从零开始5min搭建一个网站
参考: https://www.docusaurus.cn/docs

## 1. 安装
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


## 2. 启动网站

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
    │       └── index.tsx
    ├── static
    │   └── img
    ├── docusaurus.config.ts
    ├── package.json
    ├── README.md
    ├── sidebars.ts
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
- /docusaurus.config.ts
  
  包含站点配置的配置文件。与 Docusaurus 1 中的 siteConfig.js 文件等价
- /package.json
  
  Docusaurus 网站也是一个 React 应用程序。你可以在其中安装和使用所需的任何 npm 软件包
- /sidebars.ts
  
  生成文档时使用此文件来指定侧边栏中的文档顺序

3. 启动网站
    ```
    cd my-website
    npm run start
    ```
    默认情况下，浏览器将打开 http://localhost:3000
    恭喜你！您刚刚创建了第一个 Docusaurus 网站！浏览网站以查看可用内容吧。

4. 编辑网站

    1. 在 /src/pages 目录下，你可以创建新的页面

    2. 在 /docs 目录下，你可以创建新的文档

    3. 在 /blog 目录下，你可以创建新的博客文章

    4. 添加Latex数学公式插件

    打开你的docusaurus.config.ts
    添加以下代码：
    ```  
    import remarkMath from 'remark-math';
    import rehypeKatex from 'rehype-katex';
    presets: [
    [
        'classic',
        {
          docs: {
            path: 'docs',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }
      ]
    ],
    stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
              'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
    ```
    5. 修改界面颜色
    参考: https://docusaurus.io/docs/styling-layout

## 3. 部署到GitHub
1. 注册GitHub账号
2. 创建一个新的仓库，仓库名称为: my-website
3. 在本地仓库中执行以下命令：(提前配置好ssh密钥关联GitHub)
```
git init
git branch -m main
git add .
git commit -m "first commit"
git remote add origin git@github.com:Z-MAX-BOOM/my-website.git
git push -u origin main
```
4. 构建网站并测试静态页面
```
npm run build
```
生成的内容将被放置到 /build 目录下，该目录可以复制到任何静态文件托管服务上，例如 GitHub pages、Vercel 或 Netlify。
```
npm run serve
```
默认情况下，浏览器将打开http://localhost:3000/my-website/

5. 部署到GitHub pages

Docusaurus 为我们提供了 deploy 命令，能自动完成构建项目、推送至仓库、发布网站等任务。
```
npm run deploy
```

6. 访问https://Z-MAX-BOOM.github.io/my-website/

## 4. 自动部署

使用 Github Actions 自动化部署

要使用 Github Actions ，我们需要撰写相应的工作流文件（.yaml或.yml格式），来让 Github Actions 为项目提供相应的工作流程。幸运的是，Docusaurus 已经为我们写好了相应的文件：
```bash
# 更换npm安装yarn
npm install --global yarn
cd my-website
yarn install   # 安装yarn依赖

# 配置Github Actions,将工作流文件上传到 GitHub 仓库，GitHub Actions 会自动识别并执行。
cd my-website
mkdir -p .github/workflows
cd .github/workflows
touch deploy.yml
```
```yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build
    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: https://z-max-boom.github.io/my-website/

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
编写文件放入项目中的.github/workflows/文件夹并上传至 Github 仓库中，我们即可实现基于 Github Actions 的网站自动化部署。

如果部署失败，请在仓库的设置中删除对gh-pages分支的保护规则。