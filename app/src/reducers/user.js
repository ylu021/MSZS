import { USER } from '../const';
const defaultState = {
  user: {}
};

export default function reducer(state=defaultState, action) {
  switch(action.type) {
    case USER.REGISTER_USER.payload_success: {
      return {...state, user: action.payload};
    }
    case USER.REGISTER_USER.payload_error: {
      return {...state, user: action.payload};
    }
    case USER.LOGIN_USER.payload_success: {
      return {...state, user: action.payload};
    }
    case USER.LOGIN_USER.payload_error: {
      return {...state, user: action.payload};
    }
    default:
      return state;
  }
}
