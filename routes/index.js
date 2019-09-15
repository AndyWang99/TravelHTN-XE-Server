var express = require("express");
var router = express.Router();
var moment = require("moment");
const request = require("request");

/* GET home page. */
router.get("/from/:from/to/:to", function(req, res, next) {
  var fromCurr = req.params.from;
  var toCurr = req.params.to;
  var endDate = moment().format("YYYY-MM-DD");
  var startDate = moment()
    .subtract(1, "years")
    .format("YYYY-MM-DD");
  var apiUrl = "https://xecdapi.xe.com/v1/";
  apiUrl += "stats?from=" + fromCurr;
  apiUrl += "&to=" + toCurr;
  apiUrl += "&start_date=" + startDate;
  apiUrl += "&end_date=" + endDate;

  var username = "andywang634110941";
  var password = "vlgejjmjiimu61ilpvu39ibgjf";

  var options = {
    url: apiUrl,
    auth: {
      user: username,
      password: password,
      sendImmediately: true
    }
  };

  var result;
  request(options, function(err, res2, body) {
    console.dir(body);
    result = JSON.parse(body);
    res.send(result);
  });
});

module.exports = router;
