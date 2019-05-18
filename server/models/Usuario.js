const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataUsu = new Schema(
	{
		usu_ID: Number,
		usu_Nome: String,
		usu_Nasc: Date,
		usu_RG: String,
		usu_CPF: {type: String, match: /\d{3}.\d{3}.\d{3}-\d{2}/},
		usu_Tel: {type: String, match: /\d{2}-\d{4}-\d{4}/},
		usu_Endereco: String,
		usu_Bairro: String,
		usu_Cidade: String,
		usu_Estado: String,
		usu_Mae: String,
		usu_Email: {type: String, match: /\S+@\S+\.\S+/},
		usu_Admin: Boolean,
		usu_Bloqueado: Boolean,
		usu_Senha: String,
		usu_PosseQuant: {type: Number, min: 0, max: 3},
		usu_ExemplarPosse: [
			{
				exeID: Number,
				devolucao: Date
			}
		],
		usu_Historico: [
			{
				dataHoraEmp: Date,
				dataHoraDev: Date,
				exeID: Number
			}
		]
	});

module.exports = mongoose.model('DataUsu', DataUsu);