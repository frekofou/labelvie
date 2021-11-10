import actionsFunction from "./generated/SITEActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import SITEApi from "../../api/SITEApi";
 
 actionsFunction.loadSITEList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return SITEApi
     .getSITEList()
     .then(list => {
       dispatch(actionsFunction.loadSITESuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
