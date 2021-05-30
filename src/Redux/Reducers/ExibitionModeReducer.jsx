import { CHANGE_EXIBITION_MODE } from "../actions/actionTypes";

const INITIAL_STATE = {
  exibitionMode: 'cards', 
}

const ExibitionModeReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_EXIBITION_MODE:
    return {
      ...state,
      exibitionMode: action.mode,
    }
  default:
    return state
  }
}

export default ExibitionModeReducer;
