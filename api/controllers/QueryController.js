/**
 * QueryController
 *
 * @description :: Server-side logic for managing queries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');
var qs = require('querystring');

module.exports = {

  /**
   * QueryControler SearchTrends Action
   * @param req
   * @param res
   */

  searchTrends: function (req, res) {

    SearchProfile.find()
      .limit(50)
      .sort('searchDate DESC')
      .exec(function(err, searchprofile) {
        // Do stuff here

        return res.json(searchprofile);

      });
  },

  drugLabels: function (req, res) {
    var api_key=sails.config.globals.openFDAAPI_KEY;
    var requestUrl = 'https://api.fda.gov/drug/label.json?search=effective_time:[20090601+TO+20140731]&limit=100';
    // 'food/enforcement.json?search=reason_for_recall="ice cream"&limit=20';
    console.log("request url-->"+requestUrl);
    var returnJson ="";
    request(requestUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("body returned");
        returnJson = body;
        res.send(returnJson);
      }

    })
  },
  drugLabelDetailed: function (req, res) {
    var api_key=sails.config.globals.openFDAAPI_KEY;
    var item = req.query.item;

    var requestUrl = 'https://api.fda.gov/drug/label.json?search=set_id:"'+item+'"';
    // https://api.fda.gov/drug/label.json?search=set_id:"'+item+'"
    console.log("request url-->"+requestUrl);
    var returnJson ="";
    request(requestUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("body returned");
        returnJson = body;
        res.send(returnJson);
      }

    })
  },

  /**
   * `QueryController.search()`
   */
  search: function (req, res) {
    // https://api.fda.gov/food/enforcement.json?limit=10

    var api_key=sails.config.globals.openFDAAPI_KEY;
    var selectType = req.query.selectType;
    var searchItem = req.query.searchItem;
    var searchLimit = req.query.searchLimit;
    var skip = req.query.skip;






     var requestUrl = 'https://api.fda.gov/'+selectType+'/enforcement.json?api_key='+api_key+'&search=reason_for_recall:"'+searchItem+'"&limit='+searchLimit+'&skip='+skip;
     // 'food/enforcement.json?search=reason_for_recall="ice cream"&limit=20';
    console.log("request url-->"+requestUrl);
    var returnJson ="";
    request(requestUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        returnJson = body;


        var ip = req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress;

         SearchProfile.create({
          ip:ip,
          searchType:selectType,
          searchTerm:searchItem,
          searchDate:new Date()
        }).exec(function (err, event) {
          if (err) {
            console.log("Error: "+err);
            //return res.status(403);
          }
          //return res.json(event);
        });

       /* SearchProfile.find()
          .limit(50)
          .sort('searchTerm')
          .exec(function(err, searchprofile) {
            // Do stuff here

            console.log(searchprofile);

          });
        */





        res.send(returnJson);
      }

    })



  },
  searchVisual: function (req, res) {
    // https://api.fda.gov/food/enforcement.json?limit=10

    var api_key=sails.config.globals.openFDAAPI_KEY;
    var selectType = req.query.selectType;
    var searchItem = req.query.searchItem;


    var requestUrl = 'https://api.fda.gov/'+selectType+'/enforcement.json?search=reason_for_recall:"'+searchItem+'"&count=report_date';
    // 'food/enforcement.json?search=reason_for_recall="ice cream"&limit=20';
    console.log("request url-->"+requestUrl);
    var returnJson ="";
    request(requestUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        returnJson = body;

        var ip = req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress;

        SearchProfile.create({
          ip:ip,
          searchType:selectType,
          searchTerm:searchItem,
          searchDate:new Date()
        }).exec(function (err, event) {
          if (err) {
            console.log("Error: "+err);
          }
        });

         res.send(returnJson);
      }

    })



  }

};

