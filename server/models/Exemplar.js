const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataExe = new Schema({
	exe_Titulo: String,
	exe_SubTitulo: String,
	exe_Autor: String,
	exe_Edicao: String,
	exe_Editora: String,
	exe_NumPaginas: Number,
	exe_Ano: Number,
	exe_ISBN: Number,
	exe_Emprestado: Boolean, 
	exe_Historico:[ 
		{
			usuID: Number,
			dataHoraEmp: Date,
			dataHoraDev: Date
		}
	]
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("DataExe", DataExe);