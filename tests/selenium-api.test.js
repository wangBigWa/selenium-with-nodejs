/**
 * Created By wangyanfeng on 2020-03-02
 */
const { Key } = require('selenium-webdriver');
const path = require('path');

describe('selenium api的使用示例', function() {
	
	test('鼠标操作', async () => {
		const actions = browser.actions();
		let pt = path.resolve(__dirname, '../index.html');
		await browser.manage().window().maximize();
		await browser.get(pt);
		
		let div1 = await element(by.id('div1'));
		let div2 = await element(by.id('div2'));
		let button = await element(by.id('button'));
		
		// actions的动作通过一系列方法指定，最终通过调用perform()方法开始执行
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
			.move({ // 移动  只传origin，即鼠标在起点指定的位置不动
				origin: div1, // 起点，1.传入一个页面元素2.不传：鼠标当前位置
			})
			.pause(2000)
			.move({ // 不传origin，即从鼠标当前位置进行偏移，移动到指定位置，x、y是指定位置的坐标
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
		let alert = await browser.switchTo().alert();
		let text = await alert.getText();
		console.log(`alert中的文字是${text}`);
		await browser.sleep(2000);
		await alert.accept(); // 关闭弹窗
		await browser.sleep(2000);
	}, 60000);
	
	test('浏览器的前进后退', async () => {
		await browser.manage().window().maximize();
		await browser.get('http://www.htmimi.com/index.aspx');
		await browser.navigate().to('http://www.baidu.com');
		await browser.navigate().to('http://www.sohu.com');
		// 上一页
		await browser.navigate().back();
		console.log('我回到了上一页百度');
		// 下一页
		await browser.navigate().forward();
		console.log('我回到了下一页搜狐');
		// 刷新
		await browser.navigate().refresh();
		console.log('我刷新了一下');
	}, 60000);
	
});
