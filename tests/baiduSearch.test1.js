
const {  Key } = require("selenium-webdriver");

const $ =  require('../selector');

describe('使用百度搜索', () => {
    let key = "webdriver22";

    test('使用浏览器打开百度首页', async () => {
        await browser.get("http://www.baidu.com/");
    });

    test('在输入框中输入字符并搜索', async () => {
        // await $("name=wd").sendKeys(key, Key.RETURN); // 奇怪,不能链式写法
        let x = await $("name=wd");
        x.sendKeys(key, Key.RETURN);
    });

    test('搜索出结果', async () => {
        let result = await browser.wait(until.titleIs(`${key}_百度搜索`), 1000);
        expect(result).toBe(true); // 注意,此处应为 true, 演示为false的时候在reports文件夹下会保存报错截图
    });
});