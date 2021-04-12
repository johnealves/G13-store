import { combineReducers } from "redux";
import homeProductList from './homeProductList';
import shoppingStore from "./shoppingCart";

const rootReducers = combineReducers({ 
  homeProductList,
  shoppingStore,
})

export default rootReducers;