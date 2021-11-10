import actionsFunction from "./generated/COMPANYActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import COMPANYApi from "../../api/COMPANYApi";
 
 actionsFunction.loadCOMPANYList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return COMPANYApi
     .getCOMPANYList()
     .then(list => {
       dispatch(actionsFunction.loadCOMPANYSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
