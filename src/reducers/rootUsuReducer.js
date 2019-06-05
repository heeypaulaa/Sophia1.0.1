import { combineReducers } from 'redux';
import ususReducer from './usuReducer'
import exesReducer from './exeReducer'

export default combineReducers({ exes: exesReducer, usus: ususReducer  });