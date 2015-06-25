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

    var selectType = req.query.selectType;
    var searchItem = req.query.searchItem;
    var searchLimit = req.query.searchLimit;

    var selectType = "food";
    var searchItem = "ice cream";
    var searchLimit =10;
    console.log("selectType"+selectType);
    console.log("searchItem"+searchItem);
    console.log("searchLimit"+searchLimit);

    var requestUrl = 'https://api.fda.gov/"' +selectType+"//enforcement.json?search=reason_for_recall'"+searchItem+"'&limit="+searchLimit;
     // 'food/enforcement.json?search=reason_for_recall="ice cream"&limit=20';
    var returnJson ="";
    request(requestUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("body"+body);
        returnJson = body;
        res.send(returnJson);
      }
    })


  }

};

