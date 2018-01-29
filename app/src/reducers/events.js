import { EVENT } from '../const';
const defaultState = {
  events: []
};
export default function reducer(state=defaultState, action) {
  switch(action.type) {
    case EVENT.LOADEVENT.payload: {
      return {...state, events: action.payload};
    }
    default:
      return state;
  }
}
