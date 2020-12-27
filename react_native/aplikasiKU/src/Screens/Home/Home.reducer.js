import {DESCREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT} from '../../Redux';

const initialState = {
  count: 0
};

export const home_store = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DESCREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return { ...state };
  }
}
