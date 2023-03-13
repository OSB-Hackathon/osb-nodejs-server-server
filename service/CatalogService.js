'use strict';


/**
 * get the catalog of services that the service broker offers
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * returns Catalog
 **/
exports.catalog.get = function(xBrokerAPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "services" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

