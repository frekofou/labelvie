// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  site: {}
};

// Reducer
export default function SITEEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SITE_SUCCESS:
      return { ...state, site: action.payload };
    case types.UPDATE_SITE_SUCCESS:
      return { ...state, site: action.payload };
    case types.GET_SITE_SUCCESS:
      return { ...state, site: action.payload };
     // END REDUCERS
    
    case types.RESET_SITE:
      state = initialState;
      return state;
    default:
      return state;
  }
}