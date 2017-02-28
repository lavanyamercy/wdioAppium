const path = require('path');
exports.config = {
  host: '127.0.0.1',
  port: 4723,

  capabilities: [{
    browserName: 'chrome',
    appiumVersion: '1.6.3',
    deviceName: 'Samsung Galaxy S7 Device',
    deviceOrientation: 'portrait',
    platformName: 'Android'
  }],

  services: ['appium'],
  appium: {
    waitStartTime: 6000,
    command: 'appium',
    logFileName: 'appium163.log',
    args: {
      address: '127.0.0.1',
      port: 4997,
      debugLogSpacing: true
    }
  },

  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-core/register'],
    timeout: 20000000 //overwriting mocha's default test timeout which is 2000 ms.
  }

};

