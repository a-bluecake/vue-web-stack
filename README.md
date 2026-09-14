<img width="1245" height="606" alt="Snipaste_2026-09-14_17-51-30" src="https://github.com/user-attachments/assets/f6790cb0-a96f-4817-825e-6d9c29e51a35" /># vue-web-stack
Vue3 + Node.js 全栈待办事项 (Todo) 项目
## 项目简介

本项目是一套前后端分离的简易 Todo 待办管理系统，前端使用 **Vue3** 构建页面交互，后端使用 **Node.js** 编写 HTTP 接口，实现待办数据的增加、查询、修改、删除功能。

## 项目结构
Vue文件夹存放前端代码
node_js文件夹存放后端接口服务代码

## 环境要求
- Node.js >= 18
- npm 包管理器
- Mongodb 数据库v7.0.40+

## 快速启动
本项目后端接口基于Mongodb数据库，确保Mongodb处于运行状态
### 1. 启动后端服务
```bash
# 进入后端目录
cd node_js
# 安装依赖
npm install
# 启动后端服务
node app.js
```
### 2. 前端网页启动
```bash
# 进入前端目录
cd Vue
# 安装依赖
npm install
# 开发模式启动
npm run dev
```
### 3.长期运行：打包前端网页，交付dist给ngnix托管
```bash
npm run build
```
### 预览网页效果
