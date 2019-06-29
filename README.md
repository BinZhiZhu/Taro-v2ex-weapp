## V2EX小程序

简单的v2ex小程序


### 目录结构

├── dist                   编译结果目录  
├── config                 配置目录  
|   ├── dev.js             开发时配置  
|   ├── index.js           默认配置  
|   └── prod.js            打包时配置  
├── src                    源码目录  
|   ├── pages              页面文件目录  
|   |   ├── index          index 页面目录   
|   |   |   ├── index.js   index 页面逻辑  
|   |   |   └── index.css  index 页面样式  
|   ├── app.css            项目总通用样式  
|   └── app.js             项目入口文件  
└── package.json  

### 技术栈

语法：Taro(React)

状态管理：Redux


## API

v2ex开放API支持(如果侵权请联系本人修正)


## DEPLOY

- 安装Taro(参考官方)

- dev环境: npm run dev:weapp

- 打包： npm run build:weapp

### 开发时间线

花了一天时间，一次提审，成功上线第一个版本


1.首页最新主题

2.主题详情

3.热门主题

4.节点

5.节点详情


### release

发布版本

- 1.0.0 

![](http://img.binzhizhu.top/imgs/2019/06/3c9ddb8b3d48dc3e.jpg)



### TODO

1.下拉加载

2.TypeScript 重构

3.拆分组件


### 测试

- TDD


### FAQ




### 
