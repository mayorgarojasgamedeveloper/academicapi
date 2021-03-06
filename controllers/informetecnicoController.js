var model = require('../models/informetecnicoModel');

exports.create = function(req, res) {
  var response = model.create(req.body.usuario,req.body.tipo,req.body.nombre,req.body.autores,req.body.fecha,req.body.linea,req.body.subtipo,req.body.dependencia);
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
  var response = model.edit(req.params.id,req.body.nombre,req.body.autores,req.body.fecha,req.body.linea,req.body.dependencia);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
