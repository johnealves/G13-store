import { getProductsFromCategoryAndQuery } from "../services/api"
import {
  ADD_QUANTITY,
  NEW_ITEM_CART,
  REQUEST_INITIAL_CATEGORY_API_SUCCESS,
  REQUEST_INITIAL_LIST,
  REQUEST_INITIAL_LIST_SUCCESS,
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
