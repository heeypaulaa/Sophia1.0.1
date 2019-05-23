import { CREATE_USU, DELETE_USU, GET_USU, PUT_USU } from '../actions/tipos';
//import { ADD_USU } from '../actions/actionTypes';

// const initialState = {
//   usus: [],
// };


export default function usuReducer(state = [], action) {
	//console.log(action);
	switch (action.type) {
		case CREATE_USU:
			console.log(state)
			return [...state, action.payload];
		case DELETE_USU:
			return state.filter(usu => usu._id !== action.payload.id);
		case GET_USU:
			return action.usus;	
		default:
		  return state;
	}
};
