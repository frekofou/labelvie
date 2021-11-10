// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function COMPANYListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_COMPANY_SUCCESS:
      return { ...state, company: action.payload };
    case types.LIST_COMPANY_SUCCESS:
      return { ...state, listCOMPANY: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}