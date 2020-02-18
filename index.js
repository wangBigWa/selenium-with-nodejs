let { Builder, By } = require('selenium-webdriver');
let chrome = require("selenium-webdriver/chrome");

var driver = new Builder()
.forBrowser('chrome')
.build();

// 打开浏览器，最大化，跳转到 http://www.htmimi.com/index.aspx
async function openAndMaxWindow() {
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get('http://www.htmimi.com/index.aspx');
}

// 元素定位的例子
async function elementLocation() {
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get('http://www.htmimi.com/index.aspx');
	
	// By.className() 获取类名是nav的所有元素，返回一个webElement的list
	let dom1 = await driver.findElements(By.className('nav'));
	
	// By.id() 返回id为app的元素
	let dom2 = await driver.findElement(By.id('app'));
	
	// By.css() 返回类名为head-right的元素下，所有的a标签子元素
	let dom3 = await driver.findElements(By.css('.head-right > a'));
	
	// By.name() 返回标签中name属性值为tab1的第一个元素
	let dom4 = await driver.findElement(By.name('tab1'));
	
	// By.linkText() 返回超链接中文本为"首页"的元素
	let dom5 = await driver.findElement(By.linkText('首页'));
	
	// By.partialLinkText() 返回超链接文本中包含“我们”的所有元素
	let dom6 = await driver.findElements(By.partialLinkText('我们'));
	
	// By.js 返回js脚本获取的元素 获取id为app的元素
	let dom7 = await driver.findElement(By.js('document.getElementById("app")'));
	
	// By.xpath 通过xpath定位元素 获取类名为text-primary的span元素
	let dom8 = await driver.findElements(By.xpath('//span[@class="text-primary"]'))
}

// 获取属性值
async function getAttribute() {
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get('http://www.htmimi.com/index.aspx');
	
	// 获取页面源码
	let code = await driver.getPageSource();
	
	// 获取页面标题
	let title = await driver.getTitle();
	
	// 获取当前页面URL
	let currentUrl = await driver.getCurrentUrl();
	
	let element = await driver.findElement(By.id('footer'));
	
	// 获取标签内文字
	let text = await element.getText();
	
	// 获取tag名称
	let tagName = await element.getTagName();
	
	// 获取服务器分配的id
	let id = await element.getId();
	
	// 获取元素的CSS值 必传参数，若不传，返回空字符串
	let cssValue = await element.getCssValue('zIndex');
	
	// 获取元素的属性值 必传参数，若不传会报错
	let attributeValue = await element.getAttribute('class');
	
	// 获取元素的宽高以及左上角的x,y坐标
	let size = await element.getRect();
}

// 截图操作
async function screenShot() {
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get('http://www.htmimi.com/index.aspx');
	
	let element = await driver.findElement(By.id('footer'));
	
	let size = await element.getRect();
	
	let imgBase64 = await driver.takeScreenshot();
	
	// 已知dom宽高坐标、屏幕截图base64，使用插件生成相应位置的图片文件即可
}

// 浏览器前进后退
async function navigate() {
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get('http://www.htmimi.com/index.aspx');
	
	await driver.navigate().to('http://www.baidu.com');
	
	await driver.navigate().to('http://www.sohu.com');
	
	// 上一页
	await driver.navigate().back();
	console.log('我回到了上一页百度');
	
	// 下一页
	await driver.navigate().forward();
	console.log('我回到了下一页搜狐');
	
	// 刷新
	await driver.navigate().refresh();
	console.log('我刷新了一下');
}

// 模拟登陆
async function login() {
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get('https://ht-yunying-test.htmimi.com/2.0/login-yy');
	
	let accountEl = await driver.findElement(By.css('.m-login-input.accounts'));

	let passwordEl = await driver.findElement(By.css('.m-login-input.password'));

	let button = await driver.findElement(By.css('.m-login-loginbtn'));

	await accountEl.sendKeys('wyftest001');

	await passwordEl.sendKeys('gzhd456@htmimi789');

	await button.click();
}


// openAndMaxWindow();
// elementLocation();
// getAttribute();
// screenShot();
// navigate();
login();