"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/api", function(req, res) {
  var speech =
    req.body.result ? req.body.result.parameters.echoText : "Seems like some problem. Speak again.";

  var date = req.body.queryResult.parameters.date ? req.body.queryResult.parameters.date : 'Problem date';
  var client = req.body.queryResult.parameters.client ? req.body.queryResult.parameters.client : 'Problem client';
  var description = req.body.queryResult.parameters.description ? req.body.queryResult.parameters.description : 'Problem descrip';

  return res.json({
    "fulfillmentText": date+client+description,
    "source": "app.hsprint.ma",
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
