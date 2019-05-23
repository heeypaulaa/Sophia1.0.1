const express = require('express');
const app = express();

const Exemplar = express.Router();

const controllers = require('../controllers/Exemplar');

Exemplar.route('/')
    .post(controllers.addExe)
    .get(controllers.getAllExe);

Exemplar.route('/:id')
    .get(controllers.getExeById)
    .delete(controllers.deleteExe)
    .put(controllers.updateExe);

module.exports = Exemplar;