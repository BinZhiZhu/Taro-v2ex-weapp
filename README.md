## V2EX小程序

基于Taro实现的v2ex小程序,目前支持编译适配微信小程序、h5、支付宝小程序

### 目录结构



### 技术栈

Taro(React) + TypeScript + Redux

## API

v2ex开放API支持(如果侵权请联系本人修正)


## DEPLOY

- 安装Taro(参考官方)

- dev环境: v2ex:dev:ENV

- 打包环境: v2ex:build:ENV

- 测试环境: v2ex:test:run

注意：ENV 为具体端的环境 例如：微信小程序 weapp、支付宝alipay

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
 
 - 个人主页: ![](http://img.binzhizhu.top/imgs/2019/06/29748a4f9195f604.png)
 

### h5版本截图

 - 首页: ![](http://img.binzhizhu.top/imgs/2019/06/f40382d6240bbdc8.jpg)
 - 热门: ![](http://img.binzhizhu.top/imgs/2019/06/7bdea439e6db9f65.jpg)
 - 节点: ![](http://img.binzhizhu.top/imgs/2019/06/58a217abf6146bc1.jpg)
 
 
### 支付宝小程序[TODO]

 - 首页: ![](http://img.binzhizhu.top/imgs/2019/08/9e9f81572db8c500.png)
 
 - 最新: ![](http://img.binzhizhu.top/imgs/2019/08/a670d7ab4050dbfb.jpeg)
 
 - 最热: ![](http://img.binzhizhu.top/imgs/2019/08/c9527756a2737776.jpeg)
 
 - 节点: ![](http://img.binzhizhu.top/imgs/2019/08/d8af01b1f5cd5582.jpeg)

### release

发布版本

- 1.0.0 

![](http://img.binzhizhu.top/imgs/2019/06/3c9ddb8b3d48dc3e.jpg)

- 1.0.1

1.修复了查看帖子回复会提前加载一些文案的体验问题
2.查看节点补充showLading

-1.0.2

- 支持查看个人信息

- 支持markdown文本解析: ![](http://img.binzhizhu.top/imgs/2019/06/a4c8fe11315a88ee.png)

-1.0.3

- 增加页面转发功能


### TODO

1. ~~最新、最热页面下拉加载~~

2. ~~TypeScript 重构~~

3. ~~H5 Mock 版本~~

4. ~~支付宝小程序~~

5. QQ小程序

6. 百度小程序

7. 头条小程序

8. 快应用


### 测试

- 计划上Cypress（End-to-End）来简单维护一下

### 感谢

- v2ex  

https://www.v2ex.com/p/7v9TEc53

- taro  
 
 https://nervjs.github.io/taro/docs/GETTING-STARTED.html

### License

MIT
