import { CREATE_EXE, DELETE_EXE, GET_EXE, PUT_EXE } from '../actions/tipos';
//import { ADD_USU } from '../actions/actionTypes';

// const initialState = {
//   usus: [],
// };


export default function exeReducer(state = [], action) {
	console.log(action);
	switch (action.type) {
		case CREATE_EXE:
			return [...state, action.payload];
		case DELETE_EXE:
			return state.filter(exe => exe._id !== action.payload.id);
		case GET_EXE:
			return action.exes;	
		default:
		  return state;
	}
};