import SITEModelGenerated from "./generated/SITEModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SITEModelGenerated.init();
  
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
      return await SITEModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SITEModelGenerated,
  ...customModel
};
