var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
exports.config={
seleniumAddress: "http://localhost:4444/wd/hub",
  specs:['./**/*.js'],

  framework: 'jasmine2',
  onPrepare:function(){
    // Add a screenshot reporter:
    jasmine.getEnv().addReporter(
      new HtmlScreenshotReporter({
        dest: 'test/results',
        filename: 'my-report.html'
      })
    );
  },


  capabilities: {
    'browserName': 'chrome'
  },
  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 10000
  }


}
