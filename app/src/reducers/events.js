import { EVENT } from '../const';
const defaultState = {
  events: []
};
export default function reducer(state=defaultState, action) {
  switch(action.type) {
    case EVENT.LOAD_EVENTS.payload: {
      return {...state, events: action.payload};
    }
    case EVENT.LOAD_EVENT.payload_success: {
      return {...state, events: action.payload};
    }
    case EVENT.LOAD_EVENT.payload_error: {
      return {...state, events: action.payload};
    }
    default:
      return state;
  }
}
