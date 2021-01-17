import * as actionTypes from "./actionTypes";

export const increaseConter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});
export const decreaseonter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});
export const increaseByToConter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});
