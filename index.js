let { Builder, By, until, Key } = require('selenium-webdriver');
let chrome = require("selenium-webdriver/chrome");
let path = require('path');

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
	
	await openAndMaxWindow();
	
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
	
	await openAndMaxWindow();
	
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
	
	await openAndMaxWindow();
	
	let element = await driver.findElement(By.id('footer'));
	
	let size = await element.getRect();
	
	let imgBase64 = await driver.takeScreenshot();
	
	// 已知dom宽高坐标、屏幕截图base64，使用插件生成相应位置的图片文件即可
}

// 浏览器前进后退
async function navigate() {
	
	await openAndMaxWindow();
	
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

async function formOperate() {
	
	await login();
	
	await driver.sleep(3000);
	
	await driver.navigate().to('https://ht-yunying-test.htmimi.com/2.0/marketing/coupon/coupon-list/add/4');
	
	await driver.sleep(3000);
	
	let items = await driver.findElements(By.css('.col-2'));
	
	/* ant input元素查找、写入值的示例 */
	let couponNameEl = await items[0].findElement(By.css('input'));
	await couponNameEl.sendKeys('超级无敌优惠券');
	
	/* ant select组件元素查找、选中值的示例 */
	// 先找到select框的dom，类名为.ant-select-selection，click一下
	let businessSelectEl = await items[1].findElement(By.css('.ant-select-selection'));
	await businessSelectEl.click();
	// 然后等待页面中出现下拉项的dom，类名为.ant-select-dropdown-menu的ul
	await driver.wait(until.elementLocated(By.css('.ant-select-dropdown-menu')), 2000);
	// 选中第二个选项
	let selectLis = await driver.findElements(By.css('.ant-select-dropdown-menu > li'));
	await selectLis[1].click();
	await driver.sleep(2000);
	
	/* ant radio组件元素查找、选中值的示例 */
	console.log(items.length);
	let couponTypeEl = await items[3].findElements(By.css('.ant-radio-group label'));
	console.log(couponTypeEl.length);
	await couponTypeEl[1].click();
	await driver.sleep(1000);
}

// 模拟鼠标操作
async function mouseOperate() {
	
	const actions = driver.actions();
	
	let pt = path.resolve(__dirname, 'index.html');
	
	// 最大化屏幕
	await driver.manage().window().maximize();
	
	await driver.get(pt);
	
	let div1 = await driver.findElement(By.id('div1'));
	
	let div2 = await driver.findElement(By.id('div2'));
	
	let button = await driver.findElement(By.id('button'));
	
	await actions
	.keyDown(Key.CONTROL) // 按下某个键 按下Ctrl
	.pause(1000) // 停止1000毫秒
	.keyUp(Key.CONTROL) // 释放某个键
	.keyDown(Key.SPACE) // 按下空格
	.pause(1000)
	.keyUp(Key.SPACE)
	.keyDown(Key.SHIFT) // 按下shift
	.pause(1000)
	.keyUp(Key.SHIFT)
	.pause(1000)
	.move({ // 移动  只传origin，即鼠标移动到origin的位置
		origin: div1, // 起点，1.传入一个页面元素2.不传：鼠标当前位置
	})
	.pause(2000)
	.move({ // 不传origin，即从鼠标当前位置进行偏移 移出div1
		duration: 1000,
		x: 250,
		y: 250,
	})
	.click(div2) // 单击div2
	.pause(2000)
	.doubleClick(div2) // 双击div2
	.pause(2000)
	.click(button) // 点击按钮
	.pause(2000)
	.perform();
	
	// 关闭alert
	let alert = await driver.switchTo().alert();
	let text = await alert.getText();
	console.log(`alert中的文字是${text}`);
	await driver.sleep(2000);
	await alert.accept(); // 关闭弹窗
	await driver.sleep(2000);
	await driver.quit(); // 退出并关闭浏览器
}

// openAndMaxWindow();
// elementLocation();
// getAttribute();
// screenShot();
// navigate();
// login();
// formOperate();
mouseOperate();