// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import COMPANYModel from "../models/Labelvie_db/COMPANYModel";
import SITEModel from "../models/Labelvie_db/SITEModel";
import UserModel from "../models/Labelvie_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.labelvie_db_dbUrl);

    // Start Init Models

		COMPANYModel.init();
		SITEModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_labelvie_db = await mongoose.connect(
        "mongodb://" + properties.labelvie_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_labelvie_db;
  }
}

export default new Database();
