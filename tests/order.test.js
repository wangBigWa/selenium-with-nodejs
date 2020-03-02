describe('测试下单', () => {
	
	beforeAll(async () => {
		
		// 设置最大化好像费时较长，如果不延长超时时长，很容易会报错
		await browser.manage().window().maximize();
		
		await browser.get('http://ht-materialoperator-test.htmimi.com/operator/user/login');
		
	}, 10000);
	
	test('登录运营商后台测试环境-切换到验证码登录', async () => {
		
		let verifyTabEl = await browser.findElements(by.css('.ant-tabs-tab'));
		
		await verifyTabEl[1].click();
		
		await browser.sleep(100);
		
		let activeTabEl = await browser.findElement(by.css('.ant-tabs-tab-active'));
		
		let text = await activeTabEl.getText();
		
		// 断言要用await
		await expect(text).toBe('验证码登录');
	});
	
	test('填写用户名和验证码', async () => {
		
		let userNameEl = await browser.findElement(by.id('userName'));
		
		let codeEl = await browser.findElement(by.id('code'));
		
		await userNameEl.sendKeys('13250593421');
		
		await codeEl.sendKeys('111206');
	});
	
	// test第三个参数是当前用例的超时时长，默认是5000ms，如果用例需要等待时间超过该设定值，会报错
	test('点击登录', async () => {
		
		let buttonEl = await browser.findElement(by.css('.ant-btn.antd-pro-components-login-index-submit'));
		
		await buttonEl.click();
		
		await browser.wait(until.urlContains('operator/home'), 25000);
		
		console.log('登录成功');
		
	}, 30000);
	
	test('跳转到下单中心', async () => {
		
		// 注意：去下单中心的地址后面有两个参数，表示站点，不同账号进入可能有所不同，请注意检查
		await browser.navigate().to('http://ht-materialoperator-test.htmimi.com/operator/order/placeorder/list/2/2');
		
		await browser.wait(until.elementLocated(by.css('.ant-breadcrumb')), 6000);
		
		// 获取面包屑中的标题
		let breadcrumb = await browser.findElement(by.css('.ant-breadcrumb'));
		let text = await breadcrumb.getText();
		console.log('面包屑文字', text);
		await expect(text.indexOf('下单中心')).toBeGreaterThanOrEqual(0);
		
	}, 10000);
	
	test('加购物车', async () => {
		const selectInfo = {
			category1: '欧派木门',
			category2: '小木门',
			brandName: '菁菁驰名品牌',
			goodTypeOrder: 1,
		};
		await browser.wait(until.elementLocated(by.xpath('//span[@class="antd-pro-pages-order-components-h-t-radio-tagSpan"][text()="'+ selectInfo.category1 +'"]')), 5000);
		await browser.sleep(1000);
		// 根据selectInfo查询商品
		if (selectInfo.category1) {
			let el = await browser.findElement(by.xpath('//span[@class="antd-pro-pages-order-components-h-t-radio-tagSpan"][text()="'+ selectInfo.category1 +'"]'));
			await el.click();
			console.log('分类一点击了');
			await browser.sleep(3000);
		}
		if (selectInfo.category2) {
			let el = await browser.findElement(by.xpath('//span[@class="antd-pro-pages-order-components-h-t-radio-tagSpan"][text()="'+ selectInfo.category2 +'"]'));
			await el.click();
			console.log('分类二点击了');
			await browser.sleep(3000);
		}
		if (selectInfo.brandName) {
			let el = await browser.findElement(by.xpath('//span[@class="antd-pro-pages-order-components-h-t-radio-tagSpan"][text()="'+ selectInfo.brandName +'"]'));
			await el.click();
			console.log('品牌点击了');
			await browser.sleep(3000);
		}
		if (selectInfo.goodTypeOrder) {
			let list = await browser.findElements(by.css('.ant-radio-wrapper'));
			let el = await list[selectInfo.goodTypeOrder].findElement(by.css('input'));
			await el.click();
			console.log('选了商品类型');
			await browser.sleep(3000);
		}
	}, 60000);
});
