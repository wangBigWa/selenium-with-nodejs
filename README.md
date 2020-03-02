# 安装
```
npm i
```

# 下载对应版本的chrome驱动

`http://chromedriver.storage.googleapis.com/index.html`

将其`解压`并添加到`系统环境`的`PATH`中

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


# 运行测试
```
npm run test
```

# 运行单个文件测试

在`package.json`中修改jest项 , 如 "testMatch": [ "**/tests/selector.test.js" ]


# 选择器语法简单封装
```
类jquery语法 $("...")

方式一:
"#"开头,取id: 如 $("#xx")
"."开头,取css: 如 $(".xx")
"/"开头,取xpath: 如 $("///div")
"@"开头,取linkText: 如 $("@a")
"#"开头,取partialLinkText: 如 $("#a")
">"开头,取className: 如 $(">a")
 
 方式二:
"方法名"开头, 如: 
$("name=wd")
$("className=wd")
$("id=wd")

```
