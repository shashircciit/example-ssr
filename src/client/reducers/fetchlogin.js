import { FETCH_LOGIN } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return action.payload|| false;
    default:
      return state;
  }
}
