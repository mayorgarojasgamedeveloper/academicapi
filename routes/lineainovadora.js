var express = require('express');
var controller = require('../controllers/lineainovadoraController');
var router = express.Router();

router.get('/estadisticas', async function(req, res, next) {
  var response = await controller.estadisticas(req, res);
  res.json(response);
});

router.get('/estadisticasProduccion', async function(req, res, next) {
  var response = await controller.estadisticasProduccion(req, res);
  res.json(response);
});

router.get('/estadisticasUsuarios', async function(req, res, next) {
  var response = await controller.estadisticasUsuarios(req, res);
  res.json(response);
});

router.post('/', async function(req, res, next) {
  var response = await controller.create(req, res);
  res.json(response);
});

router.get('/', async function(req, res, next) {
  var response = await controller.list(req, res);
  res.json(response);
});

router.get('/:id', async function(req, res, next) {
  var response = await controller.view(req, res);
  res.json(response);
});

router.put('/:id', async function(req, res, next) {
  var response = await controller.edit(req, res);
  res.json(response);
});

router.delete('/', async function(req, res, next) {
  var response = await controller.delete(req, res);
  res.json(response);
});


module.exports = router;
