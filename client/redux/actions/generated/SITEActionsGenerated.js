/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN SITEActionsGenerated.js PLEASE EDIT ../SITEActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import SITEApi from "../../../api/SITEApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_SITE };
  },

  //CRUD METHODS

  // Create site
  createSITE: function(site) {
    return function(dispatch) {
      return SITEApi
        .createSITE(site)
        .then(site => {
          dispatch(actionsFunction.createSITESuccess(site));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createSITESuccess: function(site) {
    return { type: types.CREATE_SITE_SUCCESS, payload: site };
  },


  // Delete site
  deleteSITE: function(id) {
    return function(dispatch) {
      return SITEApi
        .deleteSITE(id)
        .then(site => {
          dispatch(actionsFunction.deleteSITESuccess(site));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteSITESuccess: function(site) {
    return { type: types.DELETE_SITE_SUCCESS, payload: site };
  },


  // Get site
  loadSITE: function(id) {
    return function(dispatch) {
      return SITEApi
        .getOneSITE(id)
        .then(site => {
          dispatch(actionsFunction.loadSITESuccess(site));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadSITESuccess: function(site) {
    return { type: types.GET_SITE_SUCCESS, payload: site };
  },

  // Load  list
  loadSITEList: function() {
    return function(dispatch) {
      return SITEApi
        .getSITEList()
        .then(list => {
          dispatch(actionsFunction.loadSITEListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadSITEListSuccess: function(list) {
    return { type: types.LIST_SITE_SUCCESS, payload: list };
  },

	
  // Save site
  saveSITE: function(site) {
    return function(dispatch) {
      return SITEApi
        .saveSITE(site)
        .then(site => {
          dispatch(actionsFunction.saveSITESuccess(site));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveSITESuccess: function(site) {
    return { type: types.UPDATE_SITE_SUCCESS, payload: site };
  },


};

export default actionsFunction;