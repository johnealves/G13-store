import { combineReducers } from "redux";
import homeProductList from './homeProductList';
import shoppingStore from "./shoppingCart";
import ExibitionModeReducer from './ExibitionModeReducer'

const rootReducers = combineReducers({ 
  homeProductList,
  shoppingStore,
  ExibitionModeReducer,
})

export default rootReducers;