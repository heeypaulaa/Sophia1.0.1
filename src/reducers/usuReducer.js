import { CREATE_USU, DELETE_USU, GET_USU, GET_CPF//, PUT_USU 
} from '../actions/tipos';
//import { ADD_USU } from '../actions/actionTypes';

var initialState = {
   _id: '', 
	usu_Nome: '', 
  usu_Mae: '', 
  usu_Nasc: '', 
  usu_Tel: '', 
  usu_CPF: '',
  usu_Endereco: '', 
  usu_Bairro: '', 
  usu_Cidade: '', 
  usu_Estado: '', 
  usu_Email: '', 
  usu_Admin: '', 
  usu_Bloqueado: false, 
  usu_Senha: '', 
  usu_PosseQuant: 0, 
  usu_ExemplarPosse: [], 
  usu_Historico: []
};


export default function usuReducer(state = initialState, action) {
	//console.log(action);
	switch (action.type) {
		case CREATE_USU:
			console.log(state)
			return [...state, action.payload];
		case DELETE_USU:
			return state.filter(usu => usu._id !== action.payload.id);
		case GET_USU:
			console.log("ação");
			console.log(action.usus);
			console.log("ação2")
			return action.usus;
		case GET_CPF:
			console.log("reducer get cpf");
			console.log(action.payload);
			initialState = action.payload;
			console.log(initialState);
			// result: action.payload
			// console.log(result);
			return {
				...state, 
				_id: action.payload._id, 
	      usu_Nome: action.payload.usu_Nome, 
	      usu_Mae: action.payload.usu_Mae, 
	      usu_Nasc: action.payload.usu_Nasc, 
	      usu_Tel: action.payload.usu_Tel, 
	      usu_CPF: action.payload.usu_CPF,
	      usu_Endereco: action.payload.usu_Endereco, 
	      usu_Bairro: action.payload.usu_Bairro, 
	      usu_Cidade: action.payload.usu_Cidade, 
	      usu_Estado: action.payload.usu_Estado, 
	      usu_Email: action.payload.usu_Email, 
	      usu_Admin: action.payload.usu_Admin, 
	      usu_Bloqueado: action.payload.usu_Bloqueado, 
	      usu_Senha: action.payload.usu_Senha, 
	      usu_PosseQuant: action.payload.usu_PosseQuant, 
	      usu_ExemplarPosse: action.payload.usu_ExemplarPosse, 
	      usu_Historico: action.payload.usu_Historico,
			};	
		default:
			console.log("default");
			console.log(state);
		  return state;
	}
};
