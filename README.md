# 云依 (cloudyii)

一个基于 Vue 3 + Vite 构建的现代化前端项目，提供小说阅读、日常分享、工具箱和留言板等功能。

## 项目特性

- 📦 基于 Vue 3 + Vite 构建，性能优异
- 🎨 支持主题切换，提供明亮和暗黑模式
- 📱 响应式设计，适配不同屏幕尺寸
- 🚀 集成 Pinia 状态管理和 Vue Router 路由管理
- 💄 现代化 UI 设计，流畅的动画效果
- 🛠️ 丰富的工具组件和功能模块- [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
  
## 项目结构

```
cloudyii/
├── .vscode/           # VS Code 配置
├── other/             # 其他文件
├── public/            # 静态资源
├── src/
│   ├── assets/        # 资源文件
│   │   ├── iconfont/  # 字体图标
│   │   └── images/    # 图片资源
│   ├── components/    # 组件
│   │   ├── MessageBoard.vue    # 留言板组件
│   │   ├── ProfileCard.vue     # 个人资料卡片组件
│   │   ├── ThemeSwitch.vue     # 主题切换组件
│   │   └── ToolBox.vue         # 工具箱组件
│   ├── layout/        # 布局
│   │   └── index.vue  # 主布局组件
│   ├── router/        # 路由
│   │   └── index.js   # 路由配置
│   ├── stores/        # 状态管理
│   │   └── counter.js # 示例状态管理
│   ├── styles/        # 样式
│   │   ├── themes/    # 主题样式
│   │   ├── custom.css # 自定义样式
│   │   ├── main.scss  # 主样式文件
│   │   └── reset.css  # 重置样式
│   ├── utils/         # 工具函数
│   │   └── theme.js   # 主题相关工具
│   ├── views/         # 页面
│   │   ├── home/      # 首页
│   │   └── novel/     # 小说室
│   ├── App.vue        # 根组件
│   └── main.js        # 入口文件
├── .editorconfig      # 编辑器配置
├── .gitignore         # Git 忽略文件
├── .prettierrc.json   # Prettier 配置
├── README.md          # 项目说明
├── index.html         # HTML 模板
├── jsconfig.json      # JS 配置
├── package-lock.json  # 依赖锁定文件
├── package.json       # 项目配置
└── vite.config.js     # Vite 配置
```

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由管理**: Vue Router
- **样式预处理器**: SCSS
- **代码格式化**: Prettier

## 环境要求

- Node.js: ^20.19.0 || >=22.12.0

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码格式化

```bash
npm run format
```

## 功能模块

### 1. 首页
- 展示项目概览和最新内容
- 提供快速导航到其他功能模块

### 2. 小说室
- 提供小说阅读功能
- 支持小说分类和搜索

### 3. 日常
- 分享日常动态和见闻
- 支持图片和文字发布

### 4. 工具箱
- 提供各种实用工具
- 模块化设计，易于扩展

### 5. 留言板
- 支持用户留言和互动
- 实时更新留言内容

## 主题切换

项目支持明亮和暗黑两种主题模式，通过 ThemeSwitch 组件可以轻松切换。主题配置位于 `src/styles/themes/` 目录下。

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Edge (最新版本)
- Safari (最新版本)

## 开发工具推荐

- **IDE**: VS Code
- **插件**: Vue (Official)
- **浏览器扩展**: Vue.js devtools

## 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

MIT

## 联系方式

如有问题或建议，欢迎联系项目维护者。