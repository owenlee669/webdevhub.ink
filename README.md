# 网络导航站

一个现代化、高级感的网站导航工具，帮助用户快速查找和访问各类实用网站和工具。

## 功能特点

- 基于React和Tailwind CSS构建的现代化UI
- 苹果风格的简约设计
- 完全响应式布局，适配各种设备
- 分类清晰的导航结构
- 精美的卡片式网站展示
- 详细的网站信息模态框
- 流畅的动画和过渡效果

## 技术栈

- **前端框架**：React 18
- **路由**：React Router 6
- **样式**：Tailwind CSS
- **构建工具**：Create React App

## 项目结构

```
navigation-site/
  ├── public/             # 静态资源
  ├── src/                # 源代码
  │   ├── assets/         # 数据和静态资源
  │   ├── components/     # React组件
  │   ├── pages/          # 页面组件
  │   ├── styles/         # 样式文件
  │   ├── App.js          # 应用入口组件
  │   └── index.js        # 应用入口点
  ├── package.json        # 项目配置和依赖
  └── tailwind.config.js  # Tailwind配置
```

## 如何运行

1. 首先安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm start
```

3. 在浏览器打开 [http://localhost:3000](http://localhost:3000) 查看应用

## 构建生产版本

运行以下命令构建生产版本：

```bash
npm run build
```

构建后的文件会生成在 `build` 目录中。

## 网站分类

网站按以下分类组织：

- AI开发工具
- 域名与建站
- 代码托管与部署
- 数据分析与SEO
- 学习资源与教程
- 支付与商业化
- 其他工具

每个分类下包含多个子分类和相关工具网站。 