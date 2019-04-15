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
		email: {type: String, match: /\S+@\S+\.\S+/},
		usu_PosseQuant: {type: Number, min: 0, max: 3},
		usu_ExemplarPosse: [Number],
		usu_ocorrencias: {}
	}
);

const DataExe = Schema(
	{
		exe_ID: Number,
		exe_Titulo: String,
		exe_SubTitulo: String,
		exe_Autor: String,
		exe_Edicao: String,
		exe_Editora: String, 
		exe_Ano: Number,
		exe_ISBN: Number,
		exe_Area: String,
		exe_Emprestado: Boolean, 
		exe_historico:[ 
			{usuID: Number,
			dataEmp: Date,
			dataDev: Date}
		]
	}
);



// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);


/*
Usuario
	- ID: RA ou 
	- nome: nome completo do usuario
	- cpf
	- rg
	- senha: senha de acesso
	- administrador: boolean
	- bloqueado: caso o usuario esteja bloqueado para emprestimo
	- histórico: (	- dia e hora do emprestimo
					- dia e hora devoluçao
					- id do livro
				)
	
Livro
	- RFID: codigo unico do livro
	- ID: caso o leitor de rfid nao funcione
	- nome
	- autor
	- editora
	- isbn
	- ediçao
	- ano
	- valor
	- numero de paginas
	- area
	- emprestado: boolean
	- comentario
	- historico: (	- dia e hora do emprestimo
					- dia e hora devolucao
					- id usuario
				)	
	



*/