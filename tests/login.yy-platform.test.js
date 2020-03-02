const utils = require('../utils/index');
const $ = require('../selector');

describe('登录运营后台', () => {

    beforeAll(async () => {
        utils.initWindow();
        await browser.get('https://ht-yunying-test.htmimi.com/2.0/login-yy');
    });
    test('输入用户名', async () => {
        let accountEl = await $('.m-login-input.accounts');
        await accountEl.sendKeys('wyftest001');
        // expect(1).toBe(14)  // 这里可以补充验收逻辑3
    });

    test('输入密码', async () => {
        let passwordEl = await $('.m-login-input.password');
        await passwordEl.sendKeys('gzhd456@htmimi789');
        // expect(1).toBe(1) 这里可以补充验收逻辑
    });

    test('点击登录按钮', async () => {
        let button = await $('.m-login-loginbtn');
        await button.click();
        // expect(1).toBe(1) 这里可以补充验收逻辑
    });
});