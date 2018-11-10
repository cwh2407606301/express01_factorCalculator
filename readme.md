express入门项目架构之factorCalculator（因数计算器）
## MVC架构思想
``` bash
# app.js
app.js入口文件配置路由：app.get('/',function(){});
# MVC
M（工人）：models文件，用来做逻辑运算，export暴露方法干活
V（视图）:views文件，呈现的页面，ejs文件呈现结果
C：(包工头），下命令，用M暴露的方法，只关心结果，exports暴露方法，方法内部呈现ejs视图--res.render 
```
## 项目安装及运行（用nodemon运行，需全局安装）

``` bash
# 安装项目依赖
npm install

# 启动服务 浏览器本地访问http://localhost:8081
npm run dev

# 编译打包
npm run build
```

## 技术栈

node
express
ejs

## 功能
``` bash
1、输入一个数字，算出其因数有哪些
2、将计算过数字的因数放到txt文件中，下次不用算，直接取，因为node不适合做运算
```