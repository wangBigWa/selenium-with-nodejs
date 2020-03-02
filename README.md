# 安装
```
npm i
```

# 下载对应版本的chrome驱动

`http://chromedriver.storage.googleapis.com/index.html`

方案1： 将其`解压`并添加到`系统环境`的`PATH`中
方案2： 放到根目录

# jest

## 测试框架命名约定

命名必须为`*.test.js`(比如index.test.js)

## jest调起webdriver的中间件(jest-environment-webdriver)
```
全局别名:
browser — 全局浏览器引用
by — By()的别名
element — Driver#findElement()的别名
element.all — Driver#findElements()的别名
until — until的别名(不变,只是不需要导入了)
```


# 运行test文件中所有测试脚本
```
npm run test
```

# 运行单个文件测试
```
jest money.test.js
```

# 常用链接

selenium nodejs 中文api文档 自己整理了部分，在wiki中

   https://github.com/wangBigWa/selenium-with-nodejs/wiki/selenium-node.js-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3
   
selenium nodejs官方文档 英文版

   https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index.html
   
jest文档 中文

   https://jestjs.io/docs/zh-Hans/getting-started

# 定时任务

使用cron库设置定时任务

到设定事件执行对应的脚本文件即可  jest XXX.test.js

代码中执行脚本文件，用原生child_process对象中的exec方法即可，具体示例参见timing-task.js
