/**
 * Created By wangyanfeng on 2020-03-01
 */
const mul = (a, b) => {
	let c = 0;
	const d = a.toString();
	const e = b.toString();
	try {
		c += d.split('.')[1].length;
	} catch (_) {
		// eslint-disable-next-line
	}
	try {
		c += e.split('.')[1].length;
	} catch (_) {
		// eslint-disable-next-line
	}
	return (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / 10 ** c;
};

const add = (a, b) => {
	let c;
	let d;
	let e;
	try {
		c = a.toString().split('.')[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = b.toString().split('.')[1].length;
	} catch (f) {
		d = 0;
	}
	/* eslint no-sequences:0 */
	/* eslint no-return-assign:0 */
	return (e = 10 ** Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
};

const sub = (a, b) => {
	let c;
	let d;
	let e;
	try {
		c = a.toString().split('.')[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = b.toString().split('.')[1].length;
	} catch (f) {
		d = 0;
	}
	return (e = 10 ** Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
};

const div = (a, b) => {
	let c;
	let d;
	let e = 0;
	let f = 0;
	try {
		e = a.toString().split('.')[1].length;
	} catch (_) {
		// eslint-disable-next-line
	}
	try {
		f = b.toString().split('.')[1].length;
		// eslint-disable-next-line
	} catch (g) {}
	return (
		(c = Number(a.toString().replace('.', ''))),
			(d = Number(b.toString().replace('.', ''))),
			mul(c / d, 10 ** (f - e))
	);
};

module.exports = {
	mul,
	add,
	sub,
	div,
};
