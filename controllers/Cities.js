'use strict';

var utils = require('../utils/writer.js');
var Cities = require('../service/CitiesService');

module.exports.citiesCityIdDELETE = function citiesCityIdDELETE (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  Cities.citiesCityIdDELETE(cityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesCityIdPUT = function citiesCityIdPUT (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  var data = req.swagger.params['data'].value;
  Cities.citiesCityIdPUT(cityId,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesGET = function citiesGET (req, res, next) {
  Cities.citiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesPOST = function citiesPOST (req, res, next) {
  var data = req.swagger.params['data'].value;
  Cities.citiesPOST(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
