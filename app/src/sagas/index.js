import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api';
import { EVENT } from '../const';

export default function* rootSaga() {
  yield all([
    watchForLoadEvents(),
    watchForLoadEvent(),
  ])
}

export function* watchForLoadEvents() {
  yield takeEvery( EVENT.LOAD_EVENTS.action, loadEvents);
}

export function* loadEvents() {
  let {events} = yield api.fetchEvents();
  yield put({type: EVENT.LOAD_EVENTS.payload, payload: events})
}

export function* watchForLoadEvent() {
  yield takeEvery( EVENT.LOAD_EVENT.action, loadEvent);
}

export function* loadEvent(action) {
  try {
    const events = yield call(api.fetchEvent, action.payload.eventId);
    yield put({type: EVENT.LOAD_EVENT.payload_success, payload: events.events})
  }catch(e) {
    yield put({type: EVENT.LOAD_EVENT.payload_error, payload: e.message})
  }
}
