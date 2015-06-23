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
   * `QueryController.search()`
   */
  search: function (req, res) {
    /* return res.json({
     // todo: 'search() is not implemented yet!'
     });
     */
    // https://api.fda.gov/food/enforcement.json?limit=10

    var requestUrl = 'https://api.fda.gov/food/enforcement.json?search=reason_for_recall="ice cream"&limit=20';
    var returnJson ="";
    request(requestUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        returnJson = body;
        res.send(returnJson);
      }
    })


  }

};

