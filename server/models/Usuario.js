const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataUsu = new Schema({
	usu_Nome: String,
	usu_Nasc: Date,
	usu_Tel: String, //match: /(\d{2})\d{4}-\d{4}/},
	usu_CPF: String, //match: /\d{3}.\d{3}.\d{3}-\d{2}/},
	usu_Endereco: String,
	usu_Bairro: String,
	usu_Cidade: String,
	usu_Estado: String,
	usu_Mae: String,
	usu_Email: String,// match: /\S+@\S+\.\S+/},
	usu_Admin: Boolean,
	usu_Bloqueado: Boolean,
	usu_Senha: String,
	usu_PosseQuant: {type: Number, min: 0, max: 3},
	usu_ExemplarPosse: [
		{
			exeID: String,
			devolucao: Date
		}
	],
	usu_Historico: [
		{
			dataHoraEmp: Date,
			dataHoraDev: Date,
			exeID: String
		}
	]
});

module.exports = mongoose.model('DataUsu', DataUsu);
