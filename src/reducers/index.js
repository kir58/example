import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const basket = handleActions(
  {
    [actions.addGood](
      state, { payload: { item } },
    ) {
      return [...state, item];
    },
    [actions.removeGood](
      state, { payload: { id } },
    ) {
      return state.filter(g => g.id !== id);
    },
    [actions.getGoods](
      state, { payload: { basket } },
    ) {
      return basket;
    },
    [actions.changeAmount](
      state, { payload: { id, symbol } },
    ) {
      return state.map(g => (g.id === id ? { ...g, amount: g.amount + symbol } : g));
    },
  }, [],
);
export default combineReducers({ basket });
