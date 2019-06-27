import { createAction } from 'redux-actions';

export const addGood = createAction('ADD_GOOD');
export const removeGood = createAction('REMOVE_GOOD');

export const getInitState = () => dispatch => {
  const keys = Object.keys(localStorage).filter(
    key => key !== "loglevel:webpack-dev-server"
  );
  const allIds = keys.map(key => Number(JSON.parse(localStorage[key]).id));
  const maxId = Math.max(...allIds, 0);
  const initState = keys.map(key => JSON.parse(localStorage[key]));
  dispatch(getTasks({ tasks: initState }));
}