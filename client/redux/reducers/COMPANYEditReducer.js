// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  company: {}
};

// Reducer
export default function COMPANYEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_COMPANY_SUCCESS:
      return { ...state, company: action.payload };
    case types.UPDATE_COMPANY_SUCCESS:
      return { ...state, company: action.payload };
    case types.GET_COMPANY_SUCCESS:
      return { ...state, company: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
     // END REDUCERS
    
    case types.RESET_COMPANY:
      state = initialState;
      return state;
    default:
      return state;
  }
}