describe("Given deployment is pushed to Prod Server", function()
{

  beforeEach(function(){
    browser.get("http://104.236.11.72/");

  });


  it('Is the Home Page Title pulling up',function(){
     expect(browser.getTitle()).toBe('openFDA');
  });


  /*
describe("Is home Page running", function(){


  var currentUrl = function(){
    return browser.getCurrentUrl();
  };

  console.log(currentUrl);
  console.log(browser.getTitle());

  expect(browser.getTitle()).toBe('openFDA');


});
*/
});
