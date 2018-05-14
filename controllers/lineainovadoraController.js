var model = require('../models/lineainovadoraModel');

exports.create = function(req, res) {
  var response = model.create(req.body.usuario,req.body.tipo,req.body.linea);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.id);
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit(req.params.id,req.body.linea);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};

exports.estadisticas = function(req, res) {
  var response = model.estadisticas();
  return response;
};

exports.estadisticasProduccion = function(req, res) {
  var response = model.estadisticasProduccion();
  return response;
};
exports.estadisticasUsuarios = function(req, res) {
  var response = model.estadisticasUsuarios();
  return response;
};
