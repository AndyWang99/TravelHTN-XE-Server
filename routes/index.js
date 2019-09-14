var express = require("express");
var router = express.Router();

var xecdApiClient = require("@xe/xecd-rates-client");

var xecdConfig = {
  username: "andywang634110941",
  password: "vlgejjmjiimu61ilpvu39ibgjf",
  apiUrl: "https://xecdapi.xe.com/v1/"
};

/* GET home page. */
router.get("/", function(req, res, next) {
  var client = new xecdApiClient.XECD(xecdConfig);

  client.currencies(function(err, data) {
    res.send(data);
  });
});

module.exports = router;
