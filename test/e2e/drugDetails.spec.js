describe('Given I am reviewing the searchTrends',function(){
    describe('When I pull the search trends page',function(){
      beforeEach(function(){
        //Assemble
        browser.get('http://104.236.11.72/#/dashboard/drugLabels');

      });
      //Assert
      it('Should bring a list of Drug Listing',function(){
          element.all(by.repeater('item in $data')).get(0).isDisplayed();//.findElement(by.css(".bubble-grey")).getText()
       var count = element.all(by.repeater('item in $data'));
        count.then(function(result){
          expect(result.length).toBeGreaterThan(0);
        });

      });
    });
  });
