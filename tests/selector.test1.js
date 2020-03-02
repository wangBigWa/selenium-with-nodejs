const $ = require('../selector');

describe('测试Selector模块', () => {
 
  test('打开百度', async () => {
    await browser.get("http://www.baidu.com/");
  });

  test('使用css查找', async () => {
    let x = await (await $(".ftCon-Wrapper")).getText();
    expect(x).toContain("把百度设为主页");
  });

  test('使用name查找', async () => {
    let x = await (await $("name=tj_trhao123")).getText();
    expect(x).toBe("hao123")
    
    // or
    let x2 = await (await $("tj_trhao123")).getText();
    expect(x2).toBe("hao123")
  });

  test('使用id查找', async () => {
    let x = await (await $("#setf")).getText();
    expect(x).toBe("把百度设为主页");
  });

  test('使用xpath查找', async () => {
    let x = await (await $('//*[@id="u1"]/a[3]')).getText();
    expect(x).toBe("hao123");
  });

  test('使用linkText查找', async () => {
    let x = await (await $('@关于百度')).getText();
    expect(x).toBe("关于百度");
  });

  test('使用partialLinkText查找', async () => {
    let x = await (await $('%百度')).getText();
    expect(x).toBe("把百度设为主页");
  });

  test('使用className查找', async () => {
    let x = await (await $('>ftCon-Wrapper')).getText();
    expect(x).toContain("京公网安备11000002000001号");
  });

});