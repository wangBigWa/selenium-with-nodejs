let JestScreenshotReporter = require('jest-screenshot-reporter');
let moment = require("moment");

jasmine.getEnv().addReporter(new JestScreenshotReporter({ browser, savePath :`./reports/${moment().format("YYYYMMDD")}` }));