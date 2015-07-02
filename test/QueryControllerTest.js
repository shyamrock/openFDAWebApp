var request = require("supertest");
var expect = require("chai").expect;
var Sails = require('sails'),
  sails;

before(function (done) {
  Sails.lift({
    // configuration for testing purposes
  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

// Lower Sails after the tests
/*afterEach(function (done) {
  //sails.lower(done);
});
*/


describe("Test Node API -> QueryController/SearchTrends", function() {
  describe("#searchTrends", function() {

    it("returns some JSON", function(done) {
      request(sails.hooks.http.app).get("/query/searchTrends")
        .expect('Content-Type', /json/)
        .expect(404)
        .end(function(err, res) {
          if (err) throw err;
           done();

      });
    });
  });


});


describe("Test Node API -> QueryController/query", function() {

  describe("#query", function() {

    it("food reason for recall with spinach returns status 200", function(done) {
      request(sails.hooks.http.app).get("/query/search/?selectType=food&searchItem=spinach&searchLimit=20&skip=20")
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
            done();//


        });
    });

  });

});

after(function(done) {
  // stuff to be done
  sails.lower(done);
  //done();
});

