const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

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
	}
);

const DataExe = Schema(
	{
		exe_ID: Number,
		exe_RFID: String,
		exe_Titulo: String,
		exe_SubTitulo: String,
		exe_Autor: String,
		exe_Edicao: String,
		exe_Editora: String,
		exe_NumPaginas: Number,
		exe_Valor: Number, 
		exe_Ano: Number,
		exe_ISBN: Number,
		exe_Area: String,
		exe_Emprestado: Boolean, 
		exe_Historico:[ 
			{
				usuID: Number,
				dataHoraEmp: Date,
				dataHoraDev: Date
			}
		]
	}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
