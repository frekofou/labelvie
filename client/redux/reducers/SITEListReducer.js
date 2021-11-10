// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function SITEListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SITE_SUCCESS:
      return { ...state, site: action.payload };
    case types.LIST_SITE_SUCCESS:
      return { ...state, listSITE: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}