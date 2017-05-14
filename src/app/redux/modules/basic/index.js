import { createAction, handleActions } from 'redux-actions';
import { loadSomeData } from '../../../api';

const INITIAL_STATE = {
  basicData: [1, 2, 'fock'],
};

export const BASIC_ACTION = 'basic/BASIC_ACTION';
export const basicAction = createAction(BASIC_ACTION);

export const loadData = () => dispatch => {
  return loadSomeData('users')
    .then(res => {
      dispatch(basicAction(res.data))
    })
    .catch(err => {
      console.error('Error when loading data', err);
    })
};

export default handleActions({

  [BASIC_ACTION]: (state, action) => ({
    ...state,
    basicData: [
      ...state.basicData,
      action.payload
    ]
  }),

}, INITIAL_STATE);