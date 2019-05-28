const Usuario = require('../models/Usuario');

module.exports = {

	// Add usuario (ADD)
	//  Success(200): Return the created usuario
	//  Error(400): Return an error msg
	addUsu: function (req, res) {
		let usuario = new Usuario(req.body);

		usuario.save()
			.then(usuario => {
				res.status(200).json(usuario);
			})
			.catch(err => {
				res.status(400).send("Erro ao adicionar Usuario " + err)
			});
	},

	// Get All usuario (GET)
	//  Success(200): Return all usuarios
	//  Error(400): Return an error msg
	getAllUsu: function (req, res) {
		Usuario.find(function (err, usuarios) {
			if (err) {
				res.status(400).send("erro ao buscar usuarios " + err);
			}
			else {
				res.status(200).json(usuarios);
			}
		});
	},

	// Get usuario by id (GET)
	//  Success(200): Return a specified usuario
	//  Error(400): Return an error msg
	getUsuById: function (req, res) {
		Usuario.findById(req.params.id, function (err, usuario) {
			if (err) {
				res.status(400).send("Erro ao pegar este Usuario " + err);
			}
			else {
				res.status(200).json(usuario);
			}
		})
	},


	getUsuByCPF: function (req, res) {
		Usuario.findOne(req.params.usu_CPF, function(err, usuario){
			if (err) {
				res.status(400).send("Erro ao pegar este CPF Usuario " + err);
			}
			else {
				res.status(200).json(usuario);
			}
		})
	},

	// Delete usuario (DELETE)
	//  Success(200): Return the id that was passed
	//  Error(400): Return an error msg
	deleteUsu: function (req, res) {
		Usuario.findByIdAndRemove(req.params.id, function (err, usuarios) {
			if (err) {
				res.status(400).send("Erro ao deletar esta registro " + err);
			}
			else {
				res.status(200).json(req.params.id);
			}
		});
	},


	deleteOneUsu: function (req, res) {
		Usuario.find(req.params.id, function (err, usuarios) {
			if (err) {
				res.status(400).send("Erro ao deletar esta registro " + err);
			}
			else {
				res.status(200).json(req.params.id);
			}
		});
	},

	// Update usuario (PUT)
	//  Success(200): Return the usuario that was updated
	//  Error(400): Return an error msg
	updateUsu: function (req, res) {
		Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true },
			function (err, usuario) {
				if (err) {
					res.status(400).send("Erro ao atualizar este registo" + err);
				}
				else {
					res.status(200).json(usuario);
				}
			});
	}
};