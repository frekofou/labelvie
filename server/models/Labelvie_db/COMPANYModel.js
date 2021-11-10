import COMPANYModelGenerated from "./generated/COMPANYModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = COMPANYModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await COMPANYModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...COMPANYModelGenerated,
  ...customModel
};
