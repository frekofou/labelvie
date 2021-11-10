import { combineReducers } from "redux";

// START IMPORT REDUCERS
import COMPANYEditReducer from "./COMPANYEditReducer";
import COMPANYListReducer from "./COMPANYListReducer";
import HomeReducer from "./HomeReducer";
import SITEEditReducer from "./SITEEditReducer";
import SITEListReducer from "./SITEListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	COMPANYEditReducer,
	COMPANYListReducer,
	HomeReducer,
	SITEEditReducer,
	SITEListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
