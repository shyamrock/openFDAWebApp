describe('Given I am searching new enforcement report recalls',function(){
    describe('When I push the submit button with Spinach as search',function(){
      beforeEach(function(){
        //Assemble
        browser.get('http://104.236.11.72/#/dashboard/enforcementData');

        var searchInput = $('input');
        searchInput.sendKeys('Spinach');
        //Act
        var submitButton = element.all(by.buttonText('submit')).
          click();
      });
      //Assert
      it('Should bring a list of itemsw',function(){
          element.all(by.repeater('user in $data')).get(0).isDisplayed();//.findElement(by.css(".bubble-grey")).getText()
       var count = element.all(by.repeater('user in $data'));
        count.then(function(result){
          expect(result.length).toBeGreaterThan(0);
        });

      });
    });
  });
