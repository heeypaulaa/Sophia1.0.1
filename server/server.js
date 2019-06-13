const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const TaskRoutes = require('./routes/Task');
const ExemplarRoutes = require('./routes/Exemplar');
const UsuarioRoutes = require('./routes/Usuario');

const net = require('net');

// const http = require('http').createServer(app);
const io = require('socket.io')();
io.origins('*:*');
// const io = require('socket.io')(http, {origins: '*:*'});

const cors = require('cors');
const config = require('./config/keys.config.js');

// Create the express application


const mongoose = require('mongoose');
mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
    .then(() => console.log('Banco de Dados Conectado'))
    .catch((err) => console.log('Erro na conexão com banco de dados', err));

/* Para evitar a depreciação do MongoDb */
mongoose.set('useFindAndModify', false);

// Parses the body of a request into Json making it accessible in req.body
app.use(bodyParser.json());
app.use(cors());

app.use('/api/usu', UsuarioRoutes);
app.use('/api/exe', ExemplarRoutes);




// Porta para conexao
// var portoS = 30000
// var porto = 29298;
// var tag = '';
// var rfidServer = net.createServer(function(socket){
// 	console.log('cliente rfid conectado');
// 
// 	socket.on('data', function (data) {   
//       //broadcast(data,socket);
//       //console.log("\n data:::"+data);
//       tag = data.toString('ascii');
//       console.log(tag);
//       
//       io.on('connection', function(sock){
// 				console.log("conectou"+tag);
// 				sock.emit('tag', {data: tag});
// 				sock.on('recive', function(){
// 					console.log('recive');
// 					// sock.disconnect();
//     			sock.close();
// 				});
// 			io.on('disconnect', function(){
// 					console.log('disconnect');
// 				});
// 			});
// 			io.listen(portoS);
// 			console.log('listening on port ', portoS);
//     });
// 
//     socket.on("error", function () {
//       console.log("\n Cliente desconectado por erro ");
//       clientes.splice(clientes.indexOf(socket), 1);
//     });
// }).listen(porto);
// // Informa na console que o servidor esta em operacao.
// console.log("Servidor em execucao na porta :"+porto+"\n");


var portoS = 30000
var porto = 29298;
var tag = 'tag rfid';
console.log(tag);
io.on('connection', function(sock){
	console.log("conectou"+tag);

	var rfidServer = net.createServer(function(socket){
		console.log('cliente rfid conectado');
		socket.on('data', function (data) {
			tag = data.toString('ascii');
			console.log(tag);
			sock.emit('tag', {data: tag});
			sock.on('recive', function(){
				console.log('recive');
						// sock.disconnect();
		  			// sock.close();
			});
		});
		socket.on("error", function () {
	    console.log("\n Cliente desconectado por erro ");
	    clientes.splice(clientes.indexOf(socket), 1);
	  });
	}).listen(porto);



	
		// io.on('disconnect', function(){
		// 		console.log('disconnect');
		// 	});
		// });
});
io.listen(portoS);
console.log('listening on port ', portoS);


// var rfidServer = net.createServer(function(socket){
// 	console.log('cliente rfid conectado');
// 	socket.on('data', function (data) {
// 		tag = data.toString('ascii');
// 		console.log(tag);
// 	socket.on("error", function () {
//     console.log("\n Cliente desconectado por erro ");
//     clientes.splice(clientes.indexOf(socket), 1);
//   });
// }).listen(porto);
// // Informa na console que o servidor esta em operacao.
// console.log("Servidor em execucao na porta :"+porto+"\n");






// 
// app.get('/', function (req, res) {
//   res.sendFile(__dirname+'/index.html');
// });
// 
// app.use(express.static(__dirname+'/static'));








// Defines the port to be used by the server
const port = process.env.PORT || 3001;

// Start the server
app.listen(port, function () {
    console.log('Servidor escutando no porto ' + port);
});