import { SET_RECOMMENDATION } from "../actions/actionTypes";

const recommendationState = {
  pizzaData: {
    title: "",
    ingredients: "",
    points: 0,
  },
};

export const recommendationReducer = (state = recommendationState, action) => {
  switch (action.type) {
    case SET_RECOMMENDATION:
      return {
        ...state,
        pizzaData: action.value,
      };
    default:
      return state;
  }
};
