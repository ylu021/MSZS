import { EVENT } from '../const';

export function fetchEvents() {
  return {
    type: EVENT.LOAD_EVENTS.action
  }
}

export function fetchEvent(eventId) {
  return {
    type: EVENT.LOAD_EVENT.action,
    payload: {
      eventId
    }
  }
}
