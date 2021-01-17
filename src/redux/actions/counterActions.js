import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});
export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});
export const increaseByToCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});
