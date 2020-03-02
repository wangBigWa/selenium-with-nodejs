exports.initWindow = async function (opt = { width: 1280, height: 1024, x: 0, y: 0 }) {
    await browser.manage().window().setRect(opt)
}