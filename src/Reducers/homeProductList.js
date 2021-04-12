import { 
  REQUEST_INITIAL_CATEGORY_API_SUCCESS,
  REQUEST_INITIAL_LIST,
  REQUEST_INITIAL_LIST_SUCCESS,
  SAVE_CATEGORY_FIELD,
  SAVE_SEARCH_FIELD
} from "../actions/actionTypes";

const INITIAL_STATE = {
  productList: [],
  searchTextApi: '',
  categoryApi: '',
  loading: false,
}

const homeProductList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_INITIAL_LIST: 
      return {
        ...state,
        loading: action.loading,
      }
    case REQUEST_INITIAL_LIST_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        productList: [...action.list]
      }
    case SAVE_SEARCH_FIELD:
      return {
        ...state,
        searchTextApi: action.value
      }
    case SAVE_CATEGORY_FIELD:
      return {
        ...state,
        categoryApi: action.value,
        loading: action.loading,
      }
    case REQUEST_INITIAL_CATEGORY_API_SUCCESS:
      return {
        ...state,
        productList: [...action.list],
        loading: action.loading,
      }
    default:
      return state
  }
}

export default homeProductList;