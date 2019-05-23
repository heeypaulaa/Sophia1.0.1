const express = require('express');
const bodyParser = require('body-parser');
//const TaskRoutes = require('./routes/Task');
const ExemplarRoutes = require('./routes/Exemplar');
const UsuarioRoutes = require('./routes/Usuario');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/keys.config.js');

// Create the express application
const app = express();

/* { useNewUrlParser: true } To prevent MongoDb DepreciationWarning */
mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
    .then(() => console.log('Banco de Dados Conectado'))
    .catch((err) => console.log('Erro na conexão com banco de dados', err));

/* To prevent MongoDb DepreciationWarning */
mongoose.set('useFindAndModify', false);

// Parses the body of a request into Json making it accessible in req.body
app.use(bodyParser.json());
app.use(cors());




//app.use('/api/tasks', TaskRoutes);
app.use('/api/usu', UsuarioRoutes);
app.use('/api/exe', ExemplarRoutes);


// Defines the port to be used by the server
const port = process.env.PORT || 3001;

// Start the server
app.listen(port, function () {
    console.log('Servidor escutando no porto ' + port);
});