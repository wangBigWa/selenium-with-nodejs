class Selector {

    constructor(selectText) {
        this.selectText = selectText.trim();
        this.waitUntilTime = 20*1000; // 等待20s超时
        this.selector = null;
    }

    async init() {
        let txt = this.selectText;
        let sign = txt.slice(0,1);
        let method ;
        // 指定语法
        switch (sign) {
            case ".":
            case "#":
                method = 'css';
                break;
            case "/":
                method = 'xpath';
                break;
            case "@":
                method = 'linkText';
                txt = txt.replace(/^@/,"");
                break;
            case "%":
                txt = txt.replace(/^%/,"");
                method = 'partialLinkText';
                break;
            case ">":
                txt = txt.replace(/^>/,"");
                method = 'className';
                break;
            default:
                break;
        }
        
        return this.selector = await this.getElementBy(txt, method);
    }

    // 检查可见性
    async checkElementIsVisible(el) {
        return await browser.wait(until.elementIsVisible(el), this.waitUntilTime)
    }

    // 查找可见元素(通过正则切分)
    async getElementBy(txt, method) {
        let selectTxt = txt;
        
        if(!method){
            let arr = /([^=]+)(=.*)?/.exec(txt);
            method = method || arr[1];
            if (txt.indexOf("=") == -1) {
                // 参数没"=", 则method默认为 name
                method = 'name';
            }else{
                selectTxt = arr[2].replace(/^=/,""); 
            }
        }
       
        
        const el = await browser.wait(until.elementLocated(by[method](selectTxt)), this.waitUntilTime);

        return await this.checkElementIsVisible(el);
    }


}

module.exports = async txt => {
    return await (new Selector(txt).init())
};