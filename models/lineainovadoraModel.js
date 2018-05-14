var db = require('../db');

exports.create = function(usuario,tipo,linea) {
  console.log(`${usuario},${tipo},${linea}`);
  var response = db.INSERT(`lineainovadora`,
  `usuario,tipo,linea`,
  `\'${usuario}\',${tipo},\'${linea}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`lineainovadora`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`lineainovadora`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,linea) {
  console.log(`${id},${linea}`);
  var response = db.UPDATE(`lineainovadora`,
  `linea=\'${linea}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`lineainovadora`, `id=${id}`);
  return response;
}

exports.estadisticas = function() {
  var response = db.ESTADISTICAS();
  return response;
}

exports.estadisticasProduccion = function() {
  var response = db.ESTADISTICASPRODUCCION();
  return response;
}

exports.estadisticasUsuarios = function() {
  var response = db.ESTADISTICASUSUARIOS();
  return response;
}
