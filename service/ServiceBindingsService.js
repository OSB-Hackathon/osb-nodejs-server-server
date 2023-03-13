'use strict';


/**
 * generate a service binding
 *
 * body ServiceBindingRequest parameters for the requested service binding
 * accepts_incomplete  asynchronous operations supported (optional)
 * binding_id  binding id of binding to create
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * returns ServiceBindingResponse
 **/
exports.serviceBinding.binding = function(body,accepts_incomplete,binding_id,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "expires_at" : "",
    "renew_before" : ""
  },
  "route_service_url" : "",
  "endpoints" : "",
  "credentials" : "",
  "syslog_drain_url" : "",
  "volume_mounts" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a service binding
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * binding_id  binding id of binding to fetch
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * service_id  id of the service associated with the instance (optional)
 * plan_id  id of the plan associated with the instance (optional)
 * returns ServiceBindingResource
 **/
exports.serviceBinding.get = function(xBrokerAPIVersion,binding_id,xBrokerAPIOriginatingIdentity,service_id,plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "expires_at" : "",
    "renew_before" : ""
  },
  "route_service_url" : "",
  "endpoints" : "",
  "credentials" : "",
  "syslog_drain_url" : "",
  "volume_mounts" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the last requested operation state for service binding
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * binding_id  binding id of service binding to find last operation applied to it
 * service_id  id of the service associated with the instance (optional)
 * plan_id  id of the plan associated with the instance (optional)
 * operation  a provided identifier for the operation (optional)
 * returns LastOperationResource
 **/
exports.serviceBinding.lastOperation.get = function(xBrokerAPIVersion,binding_id,service_id,plan_id,operation) {
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
 * deprovision a service binding
 *
 * xBrokerAPIVersion  version number of the Service Broker API that the Platform will use
 * binding_id  id of the binding being deleted
 * service_id  id of the service associated with the instance for which a binding is being deleted
 * plan_id  id of the plan associated with the instance for which a binding is being deleted
 * xBrokerAPIOriginatingIdentity  identity of the user that initiated the request from the Platform (optional)
 * accepts_incomplete  asynchronous operations supported (optional)
 * returns Object
 **/
exports.serviceBinding.unbinding = function(xBrokerAPIVersion,binding_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,accepts_incomplete) {
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

