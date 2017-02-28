const path = require('path');
exports.config = {

  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    '*.js'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude option in
  // order to group specific specs to a specific capability.
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //

  host: '127.0.0.1',
  port: 4723,

  capabilities: [{

    browserName: 'chrome',
    appiumVersion: '1.6.3',
    deviceName: 'Samsung Galaxy S7 Device',
    deviceOrientation: 'portrait',
    platformName: 'Android'
    //chromedriverExecutable: '/Users/lmani/Downloads/chromedriver'
    //automationName: 'uiautomator2'
    //app: 'https://github.com/appium/sample-code/blob/master/sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk?raw=true',
    //waitforTimeout: 3000000,
    //commandTimeout: 3000000

  }],

  services: ['appium'],
  appium: {
    waitStartTime: 6000,
    command: 'appium',
    logFileName: 'appium163.log',
    args: {
      address: '127.0.0.1',
      port: 4997,
      //commandTimeout: '7200',
      //sessionOverride: false,
      debugLogSpacing: true
    }
  },

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'silent',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './logs/errorShots',
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", the base url gets prepended.
  //baseUrl: url,
  //
  // Default timeout for all waitForXXX commands.
  waitforTimeout: 5000,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as property. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // TODO: uncomment if platinum is used
/*  plugins: {
    platinum: {
      logDir: './platinum/logs',
      baselineDir: './platinum/baseline',
      testDir: './src/__tests__/browserTest/spec'
    }
  },*/
  //
  // Framework you want to run your specs with.
  // The following are supported: mocha, jasmine and cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the node package for the specific framework installed before running
  // any tests. If not please install the following package:
  // Mocha: `$ npm install mocha`
  // Jasmine: `$ npm install jasmine`
  // Cucumber: `$ npm install cucumber`
  framework: 'mocha',
  //
  // Test reporter for stdout.
  // The following are supported: dot (default), spec and xunit
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporter: 'spec',

  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-core/register'],
    timeout: 20000000 //overwriting mocha's default test timeout which is 2000 ms.
  },

   // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  // TODO: uncomment if platinum is used
/*  beforeTest(test) {
    browser.initTest(test); // eslint-disable-line
  },

   // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  afterTest(test) {
    browser.endTest(test); // eslint-disable-line
  }*/
};

