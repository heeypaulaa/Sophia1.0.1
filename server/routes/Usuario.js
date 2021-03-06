const express = require('express');
const app = express();

const Usuario = express.Router();

const controllers = require('../controllers/Usuario');

Usuario.route('/')
    .post(controllers.addUsu)
    .get(controllers.getAllUsu)
    .delete(controllers.deleteOneUsu);

Usuario.route('/:id')
    .get(controllers.getUsuById)
    .delete(controllers.deleteUsu)
    .put(controllers.updateUsu);

module.exports = Usuario;