const express = require('express');
const Usuario = express.Router();

const controllers = require('../controllers/Usuario');

Usuario.route('/')
    .post(controllers.addUsu)
    .get(controllers.getAllUsu);

Usuario.route('/:id')
    .get(controllers.getUsuById)
    .delete(controllers.deleteUsu)
    .put(controllers.updateUsu);

module.exports = Usuario;