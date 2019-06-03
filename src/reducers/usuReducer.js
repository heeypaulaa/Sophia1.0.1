import { CREATE_USU, DELETE_USU, GET_USU, GET_CPF//, PUT_USU 
} from '../actions/tipos';
//import { ADD_USU } from '../actions/actionTypes';

const initialState = {
	result: {},
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
			return {
				...state, 
				result: action.payload
			};	
		default:
		  return state;
	}
};
