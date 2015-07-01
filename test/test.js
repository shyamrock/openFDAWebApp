var request = require("supertest");
var expect = require("chai").expect;
var sails = require("sails");
var app;

before(function(done) {
  sails.lift({
    log: {
      level: "error"
    }
  }, function(err, sails) {
    app = sails.hooks.http.app;
    done();
  });
});

describe("Query", function() {
  describe("searchTrends", function() {

    it("returns some JSON", function(done) {
      request(app).get("/").end(function(err, res) {
        expect(res.text).to.be.a('string');
        done();

      });
    });
  });
});

after(function(done) {
  // stuff to be done
  done();
});

