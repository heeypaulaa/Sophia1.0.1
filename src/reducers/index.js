
import { ADD_USU } from '../actions/actionTypes';

const initialState = {
    usus: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_USU) {
        return {
            ...state,
            usu: [...state.usus, action.payload]
        }
    }

    return state;
};

export default rootReducer;