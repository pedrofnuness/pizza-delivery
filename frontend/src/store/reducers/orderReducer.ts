import { SET_SIZE } from "../actions/actionTypes";
import { SET_DOUGH } from "../actions/actionTypes";
import { SET_FLAVOR } from "../actions/actionTypes";
import { SET_CRUST } from "../actions/actionTypes";
const orderState = {
  size: "",
  dough: "",
  flavor: "",
  crust: "",
};

export const orderReducer = (state = orderState, action) => {
  switch (action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.value,
      };
    case SET_DOUGH:
      return {
        ...state,
        dough: action.value,
      };
    case SET_FLAVOR:
      return {
        ...state,
        flavor: action.value,
      };
    case SET_CRUST:
      return {
        ...state,
        crust: action.value,
      };
    default:
      return state;
  }
};
