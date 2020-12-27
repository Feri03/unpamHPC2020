import {DESCREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT} from '../../Redux';

const incrementCount = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNT
  })
}

const decrementCount = () => dispatch => {
  dispatch({
    type: DESCREMENT_COUNT
  })
}

const resetCount = () => dispatch => {
  dispatch({
    type: RESET_COUNT,
    payload: 0
  })
}

export {
  incrementCount,
  decrementCount,
  resetCount
}
