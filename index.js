var { Builder, By } = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

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
