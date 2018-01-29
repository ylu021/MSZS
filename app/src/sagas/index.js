import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api';
import { EVENT } from '../const';

export default function* rootSaga() {
  yield all([
    watchForLoadEvents(),
  ])
}

export function* watchForLoadEvents() {
  yield takeEvery( EVENT.LOADEVENT.action, loadEvents);
}

export function* loadEvents() {
  let {events} = yield api.fetchEvents();
  yield put({type: EVENT.LOADEVENT.payload, payload: events})
}
