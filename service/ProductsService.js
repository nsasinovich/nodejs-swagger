'use strict';


/**
 *
 * returns List
 **/
exports.productsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : "27.99",
  "name" : "Commom Jeans",
  "options" : {
    "color" : "gray",
    "size" : "XL"
  },
  "brand" : "China Mall"
}, {
  "price" : "27.99",
  "name" : "Commom Jeans",
  "options" : {
    "color" : "gray",
    "size" : "XL"
  },
  "brand" : "China Mall"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * name String The name of new product
 * brand String The name of new product's brand (optional)
 * price BigDecimal The price of new product (optional)
 * color String The color of new product (optional)
 * size String The size of new product (optional)
 * returns Product
 **/
exports.productsPOST = function(name,brand,price,color,size) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : "27.99",
  "name" : "Commom Jeans",
  "options" : {
    "color" : "gray",
    "size" : "XL"
  },
  "brand" : "China Mall"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * productId String 
 * no response value expected for this operation
 **/
exports.productsProductIdDELETE = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productId String Product ID for details
 * returns Product
 **/
exports.productsProductIdGET = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : "27.99",
  "name" : "Commom Jeans",
  "options" : {
    "color" : "gray",
    "size" : "XL"
  },
  "brand" : "China Mall"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * productId String 
 * returns List
 **/
exports.productsProductIdReviewsGET = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "productId" : 4,
  "review" : "The best purchase ever !!!!",
  "userId" : 2
}, {
  "productId" : 4,
  "review" : "The best purchase ever !!!!",
  "userId" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

