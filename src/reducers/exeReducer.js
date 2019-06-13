import { CREATE_EXE, DELETE_EXE, GET_EXE, PUT_EXE, GET_RFID 
} from '../actions/tipos';
//import { ADD_USU } from '../actions/actionTypes';

const initialState = {
   _id: '', 
  exe_RFID: '',
  exe_Titulo: '', 
  exe_SubTitulo: '', 
  exe_Autor: '', 
  exe_Edicao: 0,
  exe_Editora: '', 
  exe_NumPaginas: 0, 
  exe_Ano: 0, 
  exe_ISBN: '', 
  exe_Emprestado: false,
  exe_Historico: []// data
};

export default function exeReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_EXE:
			return [...state, action.payload];
		case DELETE_EXE:
			return state.filter(exe => exe._id !== action.payload.id);
		case GET_EXE:
			console.log("ação");
			console.log(action.exes);
			console.log("ação2")
			return action.exes;	
		case GET_RFID:
			console.log("reducer get RFID");
			console.log(action.payload.exe_Titulo);
			// result: action.payload
			// console.log(result);
			return {
				...state,
				_id: action.payload._id, 
	      exe_RFID: action.payload.exe_RFID,
	      exe_Titulo: action.payload.exe_Titulo, 
	      exe_SubTitulo: action.payload.exe_SubTitulo, 
	      exe_Autor: action.payload.exe_Autor, 
	      exe_Edicao: action.payload.exe_Edicao,
	      exe_Editora: action.payload.exe_Editora, 
	      exe_NumPaginas: action.payload.exe_NumPaginas, 
	      exe_Ano: action.payload.exe_Ano, 
	      exe_ISBN: action.payload.exe_ISBN, 
	      exe_Emprestado: action.payload.exe_Emprestado,
	      exe_Historico: action.payload.exe_Historico
			};	
		default:
		  return state;
	}
};