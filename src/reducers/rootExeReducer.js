import { combineReducers } from 'redux';
import exesReducer from './exeReducer'

export default combineReducers({ exes: exesReducer });