const Exemplar = require('../models/Exemplar');

module.exports = {

	// Add exemplar (ADD)
	//  Success(200): Return the created exemplar
	//  Error(400): Return an error msg
	addExe: function (req, res) {
		let exemplar = new Exemplar(req.body);

		exemplar.save()
			.then(exemplar => res.status(200).json(exemplar))
			.catch(err => {
				res.status(400).send("Erro ao adicionar Exemplar " + err)
			});
	},

	// Get All Exemplar (GET)
	//  Success(200): Return all exemplars
	//  Error(400): Return an error msg
	getAllExe: function (req, res) {
		Exemplar.find(function (err, exemplares) {
			if (err) {
				res.status(400).send("erro ao buscar exemplares " + err);
			}
			else {
				res.status(200).json(exemplares);
			}
		});
	},

	// Get exemplar by id (GET)
	//  Success(200): Return a specified exemplar
	//  Error(400): Return an error msg
	getExeById: function (req, res) {
		Exemplar.findById(req.params.id, function (err, exemplar) {
			if (err) {
				res.status(400).send("Erro ao pegar este Exemplar " + err);
			}
			else {
				res.status(200).json(exemplar);
			}
		})
	},

	// Delete exemplar (DELETE)
	//  Success(200): Return the id that was passed
	//  Error(400): Return an error msg
	deleteExe: function (req, res) {
		Exemplar.findByIdAndRemove(req.params.id, function (err, exemplares) {
			if (err) {
				res.status(400).send("Erro ao deletar esta registro " + err);
			}
			else {
				res.status(200).json(req.params.id);
			}
		});
	},

	// Update exemplar (PUT)
	//  Success(200): Return the exemplar that was updated
	//  Error(400): Return an error msg
	updateExe: function (req, res) {
		Exemplar.findByIdAndUpdate(req.params.id, req.body, { new: true },
			function (err, exemplar) {
				if (err) {
					res.status(400).send("Erro ao atualizar este registo" + err);
				}
				else {
					res.status(200).json(exemplar);
				}
			});
	}
};