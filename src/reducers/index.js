/**
 * Creamos un reducer general el cual importa todos los reducers necesarios
 * De momento sólo hemos definido 1 reducer que nos permitirá visualizar
 * el slide inicial o el home dependiendo de su estado
 */

import { combineReducers } from "redux";

import configReducer from "./config";

export default combineReducers({
  configReducer,
});
