import { createAction } from 'redux-actions';

export const addGood = createAction('ADD_GOOD');
export const removeGood = createAction('REMOVE_GOOD');
export const getGoods = createAction('GET_GOODS');

export const getInitState = () => dispatch => {
  const keys = Object.keys(localStorage).filter(
    key => key !== "loglevel:webpack-dev-server"
  );
  const initState = keys.map(key => JSON.parse(localStorage[key]));
  dispatch(getGoods({ basket: initState }));
}