'use strict';

var utils = require('../utils/writer.js');
var ServiceInstances = require('../service/ServiceInstancesService');

module.exports.serviceInstance.deprovision = function serviceInstance.deprovision (req, res, next, xBrokerAPIVersion, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete) {
  ServiceInstances.serviceInstance.deprovision(xBrokerAPIVersion, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.get = function serviceInstance.get (req, res, next, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity, service_id, plan_id) {
  ServiceInstances.serviceInstance.get(xBrokerAPIVersion, xBrokerAPIOriginatingIdentity, service_id, plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.lastOperation.get = function serviceInstance.lastOperation.get (req, res, next, xBrokerAPIVersion, service_id, plan_id, operation) {
  ServiceInstances.serviceInstance.lastOperation.get(xBrokerAPIVersion, service_id, plan_id, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.provision = function serviceInstance.provision (req, res, next, body, accepts_incomplete, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity) {
  ServiceInstances.serviceInstance.provision(body, accepts_incomplete, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.update = function serviceInstance.update (req, res, next, body, accepts_incomplete, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity) {
  ServiceInstances.serviceInstance.update(body, accepts_incomplete, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
