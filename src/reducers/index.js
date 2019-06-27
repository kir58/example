import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "../actions";

const basket = handleActions(
  {
    [actions.addGood](
      state, { payload: { item } }
    ) {
      return [...state, item];
    },
    [actions.removeGood](
      state, { payload: { id } }
    ) {
      return state.filter(g => g.id !== id);
    },
  }, []
);
export default combineReducers({ basket });