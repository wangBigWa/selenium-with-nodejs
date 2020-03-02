/**
 * Created By wangyanfeng on 2020-03-01
 */
const { fenToYuan, tenThousand } = require('../utils/money');

describe('测试utils中的money方法', function() {
	console.log('---正在执行money.test.js---');
	test('测试fenToYuan方法, 不传isCalc', async () => {
		await expect(fenToYuan(458932)).toBe('4,589.32');
	});
	
	test('测试fenToYuan方法, 传isCalc', async () => {
		await expect(fenToYuan(458932, true)).toBe(4589.32);
	});
	test('测试tenThousand方法', async () => {
		await expect(tenThousand(450000)).toBe(45);
	});
});
