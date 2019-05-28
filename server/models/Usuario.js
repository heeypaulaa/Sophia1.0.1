const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const DataUsu = new Schema({
	usu_Nome: String,
	usu_Nasc: Date,
	usu_Tel: String, //match: /(\d{2})\d{4}-\d{4}/},
	usu_CPF: { type: String, required: true, unique: true },
	usu_Endereco: String,
	usu_Bairro: String,
	usu_Cidade: String,
	usu_Estado: String,
	usu_Mae: String,
	usu_Email: String,// match: /\S+@\S+\.\S+/},
	usu_Admin: Boolean,
	usu_Bloqueado: Boolean,
	usu_Senha: { type: String, required: true },
	usu_PosseQuant: {type: Number, min: 0, max: 3},
	usu_ExemplarPosse: [{
		exeID: String,
		devolucao: Date
	}],
	usu_Historico: [{
		dataHoraEmp: Date,
		dataHoraDev: Date,
		exeID: String
	}]
},{
	collection: 'DataUsu'
});

DataUsu.plugin(uniqueValidator);

DataUsu.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.usu_Senha);
};

DataUsu.virtual("password").set(function(value) {
  this.usu_Senha = bcrypt.hashSync(value, 12);
});


module.exports = mongoose.model('DataUsu', DataUsu);





// UserSchema.plugin(uniqueValidator);
// 
// UserSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.passwordHash);
// };
// 
// UserSchema.virtual("password").set(function(value) {
//   this.passwordHash = bcrypt.hashSync(value, 12);
// });