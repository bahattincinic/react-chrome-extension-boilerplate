import { INCREASE_COUNTER } from '../constants/ActionTypes';


const initialState = {
  counter: 0,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
