import { getProductsFromCategoryAndQuery } from "../../services/api";
import {
  ADD_CATEGORY_NAME,
  ADD_QUANTITY,
  ADD_TOTAL_CHECKOUT,
  CHANGE_EXIBITION_MODE,
  DELETE_ITEM,
  NEW_ITEM_CART,
  REQUEST_INITIAL_CATEGORY_API_SUCCESS,
  REQUEST_INITIAL_LIST,
  REQUEST_INITIAL_LIST_SUCCESS,
  RESET_FILTER,
  RESET_TOTAL_CHECKOUT,
  SAVE_CATEGORY_FIELD,
  SAVE_SEARCH_FIELD
} from "./actionTypes";

// Requisição Inicial
const requestInitialList = () => ({
  type: REQUEST_INITIAL_LIST,
  loading: true,
})

const requestInitialListSuccess = (list) => ({
  type: REQUEST_INITIAL_LIST_SUCCESS,
  loading: false,
  list,
})

export const requestInitialHomeList = () => {
  return (dispatch) => {
    dispatch(requestInitialList());
    return getProductsFromCategoryAndQuery('', 'ofertas')
      .then((resp) => dispatch(requestInitialListSuccess(resp.results)));
  }
}

// Save value of search field

export const saveSearchField = (value) => ({
  type: SAVE_SEARCH_FIELD,
  value,
})

export const headerRequestApi = (category, query) => {
  return (dispatch) => {
    dispatch(requestInitialList())
    return getProductsFromCategoryAndQuery(category, query)
      .then((resp) => dispatch(requestCategoryApiSuccess(resp.results)))
  }
}

// Save category on redux

export const requestCategory = (value) => ({
  type: SAVE_CATEGORY_FIELD,
  loading: true,
  value,
})

export const requestCategoryApiSuccess = (list) => ({
  type: REQUEST_INITIAL_CATEGORY_API_SUCCESS,
  loading: false,
  list,
})

export const requestCategoryApi = (value, searchText) => {
  return (dispatch) => {
    dispatch(requestCategory(value));
    return getProductsFromCategoryAndQuery(value, searchText)
      .then((resp) => dispatch(requestCategoryApiSuccess(resp.results)))
  }
}

export const categoryName = (name) => ({
  type: ADD_CATEGORY_NAME,
  name
})

export const resetFilter = () => ({
  type: RESET_FILTER
})

// Add new product

export const newItemCart = (product) => ({
  type: NEW_ITEM_CART,
  product,
});

export const addQuantity = ({id, quantity}) => ({
  type: ADD_QUANTITY,
  id,
  quantity: quantity + 1,
})

export const minusQuantity = ({id, quantity}) => ({
  type: ADD_QUANTITY,
  id,
  quantity: quantity - 1,
})

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  index,
})

//exibition-mode

export const changeExibitionMode = (mode) => ({
  type: CHANGE_EXIBITION_MODE,
  mode
})

export const addTotalCheckout = (value) => ({
  type: ADD_TOTAL_CHECKOUT,
  value,
})

export const resetTotalCheckout = (value) => ({
  type: RESET_TOTAL_CHECKOUT,
  value,
})
