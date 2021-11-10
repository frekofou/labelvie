import COMPANYApiGenerated from "./generated/COMPANYApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class COMPANYApi extends COMPANYApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get COMPANY List
  static getCOMPANYList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/companys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default COMPANYApi;