exports.config={
seleniumAddress: "http://localhost:4444/wd/hub",
  specs:['./**/*.js'],

  framework: 'jasmine2',
  onPrepare:function(){
    //browser.get("http://104.236.11.72/");
  },

  capabilities: {
    'browserName': 'chrome'
  }
}
