import { ADD_QUANTITY, ADD_TOTAL_CHECKOUT, DELETE_ITEM, NEW_ITEM_CART, RESET_TOTAL_CHECKOUT } from "../actions/actionTypes";

const initialQuantity = JSON.parse(localStorage.getItem('shoppingCart'))

const INITIAL_STATE = {
  shoppingCart: [],
  totalCheckout: 0,
}
if (initialQuantity) {
  INITIAL_STATE.shoppingCart = [...initialQuantity];
}

const shoppingStore = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEW_ITEM_CART:
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          action.product
        ]
      }
    case ADD_QUANTITY:
      return {
        ...state,
        shoppingCart: state.shoppingCart
          .filter((item) => (item.id === action.id) ? item.quantity = action.quantity : item),
      }
    case ADD_TOTAL_CHECKOUT:
      return {
        ...state,
        totalCheckout: state.totalCheckout + action.value
      }
    case RESET_TOTAL_CHECKOUT:
      return {
        ...state,
        totalCheckout: 0
      }
    case DELETE_ITEM:
      return {
        ...state,
        shoppingCart: state.shoppingCart.splice(action.index, 1)
      }
    default:
      return state
  }
}

export default shoppingStore;