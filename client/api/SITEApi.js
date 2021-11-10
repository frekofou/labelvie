import SITEApiGenerated from "./generated/SITEApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SITEApi extends SITEApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get SITE List
  static getSITEList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/sites")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SITEApi;