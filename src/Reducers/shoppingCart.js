import { ADD_QUANTITY, NEW_ITEM_CART } from "../actions/actionTypes";

const initialQuantity = JSON.parse(localStorage.getItem('shoppingCart'))

const INITIAL_STATE = {
  shoppingCart: [],
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
    default:
      return state
  }
}

export default shoppingStore;