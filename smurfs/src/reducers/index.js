import {GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE} from '../actions';
import {ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../actions';
import {UPDATE_SMURF_START, UPDATE_SMURF_SUCCESS, UPDATE_SMURF_FAILURE} from '../actions';
import {DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE} from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        gettingSmurfs: true,
        error: null
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        gettingSmurfs: false,
        error: null
      }
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingSmurfs: false
      }
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case UPDATE_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
      }
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false
      }
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    default: return state;
  }
}

export default smurfReducer;
