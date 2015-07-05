describe("Given deployment is pushed to Prod Server", function()
{

  beforeEach(function(){
    browser.get("http://104.236.11.72/");

  });

  it('Is the Home Page Title pulling up',function(){
     expect(browser.getTitle()).toBe('openFDA');
  });


});
