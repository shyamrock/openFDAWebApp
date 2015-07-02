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

  /**
   * `QueryController.search()`
   */
  search: function (req, res) {
    // https://api.fda.gov/food/enforcement.json?limit=10

    var selectType = req.query.selectType;
    var searchItem = req.query.searchItem;
    var searchLimit = req.query.searchLimit;
    var skip = req.query.skip;






     var requestUrl = 'https://api.fda.gov/'+selectType+'/enforcement.json?search=reason_for_recall:"'+searchItem+'"&limit='+searchLimit+'&skip='+skip;
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



  }

};

