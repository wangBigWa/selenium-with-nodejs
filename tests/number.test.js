/**
 * Created By wangyanfeng on 2020-03-01
 */
const { add, sub, div, mul } = require('../utils/number');

describe('测试utils中的number方法', function() {
	console.log('---正在执行number.test.js---');
	test('测试add方法', async () => {
		await expect(add(1, 2)).toBe(3);
	});
	test('测试sub方法', async () => {
		await expect(sub(4, 2)).toBe(2);
	});
	test('测试div方法', async () => {
		await expect(div(10, 5)).toBe(2);
	});
	test('测试mul方法', async () => {
		await expect(mul(1, 2)).toBe(2);
	});
});
