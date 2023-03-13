'use strict';


/**
 * deprovision a service instance
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * service_id  id of the service associated with the instance being deleted
 * plan_id  id of the plan associated with the instance being deleted
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * accepts_incomplete  asynchronous deprovision supported (optional)
 * returns Object
 **/
exports.serviceInstance.deprovision = function(xBrokerAPIVersion,service_id,plan_id,xBrokerAPIOriginatingIdentity,accepts_incomplete) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a service instance
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * service_id  id of the service associated with the instance (optional)
 * plan_id  id of the plan associated with the instance (optional)
 * returns ServiceInstanceResource
 **/
exports.serviceInstance.get = function(xBrokerAPIVersion,xBrokerAPIOriginatingIdentity,service_id,plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "attributes" : "",
    "labels" : ""
  },
  "maintenance_info" : {
    "description" : "",
    "version" : ""
  },
  "service_id" : "",
  "dashboard_url" : "",
  "parameters" : "",
  "plan_id" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the last requested operation state for service instance
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * service_id  id of the service associated with the instance (optional)
 * plan_id  id of the plan associated with the instance (optional)
 * operation  a provided identifier for the operation (optional)
 * returns LastOperationResource
 **/
exports.serviceInstance.lastOperation.get = function(xBrokerAPIVersion,service_id,plan_id,operation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "instance_usable" : "",
  "update_repeatable" : "",
  "description" : "",
  "state" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * provision a service instance
 *
 * body ServiceInstanceProvisionRequestBody parameters for the requested service instance provision
 * accepts_incomplete  asynchronous operations supported (optional)
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * returns ServiceInstanceProvisionResponse
 **/
exports.serviceInstance.provision = function(body,accepts_incomplete,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "attributes" : "",
    "labels" : ""
  },
  "dashboard_url" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update a service instance
 *
 * body ServiceInstanceUpdateRequestBody parameters for the requested service instance update
 * accepts_incomplete  asynchronous operations supported (optional)
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * returns Object
 **/
exports.serviceInstance.update = function(body,accepts_incomplete,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

