/**
 * Created By wangyanfeng on 2020-03-01
 */
const moment = require('moment');
const CronJob = require('cron').CronJob;
const exec = require('child_process').exec;

const cmdStr = 'jest tests/number.test.js tests/money.test.js --coverage';

let job = new CronJob({
	cronTime: '10 * * * * *',
	onTick: () => {
		console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
		exec(cmdStr, (err, stdout, stderr) => {
			if(err) {
				console.log('用例出错:'+stderr);
			} else {
				console.log(stderr);
				console.log(stdout);
			}
		})
	},
	start: false,
});

job.start();
