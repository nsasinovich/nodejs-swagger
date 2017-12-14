'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.productsGET = function productsGET (req, res, next) {
  Products.productsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsPOST = function productsPOST (req, res, next) {
  var name = req.swagger.params['name'].value;
  var brand = req.swagger.params['brand'].value;
  var price = req.swagger.params['price'].value;
  var color = req.swagger.params['color'].value;
  var size = req.swagger.params['size'].value;
  Products.productsPOST(name,brand,price,color,size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdDELETE = function productsProductIdDELETE (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdDELETE(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdGET = function productsProductIdGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdReviewsGET = function productsProductIdReviewsGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdReviewsGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
