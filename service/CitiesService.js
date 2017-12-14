'use strict';


/**
 *
 * cityId String 
 * no response value expected for this operation
 **/
exports.citiesCityIdDELETE = function(cityId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * cityId String 
 * data City  (optional)
 * returns City
 **/
exports.citiesCityIdPUT = function(cityId,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : "30.5678",
    "long" : "50.1234"
  }
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
 * returns List
 **/
exports.citiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : "30.5678",
    "long" : "50.1234"
  }
}, {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : "30.5678",
    "long" : "50.1234"
  }
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
 * data City  (optional)
 * returns City
 **/
exports.citiesPOST = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : "30.5678",
    "long" : "50.1234"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

