## V2EX小程序

基于Taro实现的v2ex小程序


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

Taro(React) + typescript（部分）

状态管理：Redux


## API

v2ex开放API支持(如果侵权请联系本人修正)


## DEPLOY

- 安装Taro(参考官方)

- dev环境: npm run dev:weapp

- 打包： npm run build:weapp

### 开发时间线

1.首页最新主题

2.主题详情

3.热门主题

4.节点

5.节点详情

### 截图

 - 首页: ![](http://img.binzhizhu.top/imgs/2019/06/54b6624c1e3bf106.png)
 
 - 热门: ![](http://img.binzhizhu.top/imgs/2019/06/03d291e0ea9fb45d.png)
 
 - 节点: ![](http://img.binzhizhu.top/imgs/2019/06/b9e187a6a727d0ee.png)
 
 - 节点详情: ![](http://img.binzhizhu.top/imgs/2019/06/85a2c7f481a50797.png)
 
 - 话题回复: ![](http://img.binzhizhu.top/imgs/2019/06/04b64c2985121708.png)
 


### release

发布版本

- 1.0.0 

![](http://img.binzhizhu.top/imgs/2019/06/3c9ddb8b3d48dc3e.jpg)

- 1.0.1

1.修复了查看帖子回复会提前加载一些文案的体验问题
2.查看节点补充showLading


### TODO

1.下拉加载

2.TypeScript 重构

3.拆分组件

4.H5版本

5.用户信息

6.TDD


### 测试



### FAQ

- 计算时间戳时分秒func来源于v2er封装 原贴 https://www.v2ex.com/t/578465#reply6

- utils下的api.ts封装来源于 taro官方taro-v2ex-hook repo里的简单封装

### 感谢

- v2ex  

https://www.v2ex.com/p/7v9TEc53

- taro  
 
 https://nervjs.github.io/taro/docs/GETTING-STARTED.html

### License

MIT
