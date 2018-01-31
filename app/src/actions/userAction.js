import { USER } from '../const';

export function registerUser(user) {
  return {
    type: USER.REGISTER_USER.action,
    payload: {
      user
    }
  }
}

export function loginUser(user) {
  return {
    type: USER.LOGIN_USER.action,
    payload: {
      user
    }
  }
}
