import { orderReducer } from "./orderReducer";
import { recommendationReducer } from "./recommendationReducer";
import { combineReducers } from "redux";
export const Reducers = combineReducers({
  orderState: orderReducer,
  recommendationState: recommendationReducer,
});
