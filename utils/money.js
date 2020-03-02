/**
 * Created By wangyanfeng on 2020-03-01
 */
const { div } = require('./number');

/**
 * @param Number num 价格
 * @param Boolean isCalc  false 显示的价格 return string类型 true 计算价格返回 number类型
 * * */
const fenToYuan = (num, isCalc) => {
	/* eslint no-param-reassign:0 */
	if (num === null || num === -1) {
		return '';
	}
	num = Number(num);
	if (!num || isNaN(num)) return 0;
	
	num = Math.round(num); // 四舍五入
	return isCalc ? div(num, 100) : addComma(div(num, 100));
};

/**
 * 为数字增加逗号隔开
 * @param money
 * @returns {string}
 */
const addComma = money => {
	money = String(money);
	const left = money.split('.')[0];
	let right = money.split('.')[1];
	right = right ? (right.length >= 2 ? `.${right.substr(0, 2)}` : `.${right}0`) : '.00';
	const temp = left
		.split('')
		.reverse()
		.join('')
		.match(/(\d{1,3})/g);
	return (
		(Number(money) < 0 ? '-' : '') +
		temp
			.join(',')
			.split('')
			.reverse()
			.join('') +
		right
	);
};

/**
 * num 除以10000
 * @param Number
 * * */
const tenThousand = (num) => {
	if (num === null || num === -1) {
		return '';
	}
	
	num = Number(num);
	if (!num || isNaN(num)) return 0;
	if (num<0) return '';
	
	num = Math.round(num); // 四舍五入
	return div(num, 10000);
};

module.exports = {
	tenThousand,
	fenToYuan,
};
