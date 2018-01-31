export const EVENT = {
  LOAD_EVENTS: {
    action: 'LOAD_EVENTS_ACTION',
    payload: 'LOAD_EVENTS_PAYLOAD_'
  },
  LOAD_EVENT: {
    action: 'LOAD_EVENT_ACTION',
    payload_success: 'LOAD_EVENT_PAYLOAD__SUCCEEDED',
    payload_error: 'LOAD_EVENT_PAYLOAD_FAILED',
  }
}

export const USER = {
  REGISTER_USER: {
    action: 'REGISTER_USER_ACTION',
    payload_success: 'REGISTER_USER_PAYLOAD__SUCCEEDED',
    payload_error: 'REGISTER_USER_PAYLOAD_FAILED',
  },
  LOGIN_USER: {
    action: 'LOGIN_USER_ACTION',
    payload_success: 'LOGIN_USER_PAYLOAD__SUCCEEDED',
    payload_error: 'LOGIN_USER_PAYLOAD_FAILED',
  },
}
