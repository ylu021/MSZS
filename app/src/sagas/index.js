import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api';
import { USER, EVENT } from '../const';

export default function* rootSaga() {
  yield all([
    watchForLoadEvents(),
    watchForLoadEvent(),
    watchForRegisterUser(),
    watchForLoginUser()
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

export function* watchForRegisterUser() {
  yield takeEvery( USER.REGISTER_USER.action, registerUser);
}

export function* registerUser(action) {
  try {
    const user = yield call(api.registerUser, action.payload.user);
    yield put({type: USER.REGISTER_USER.payload_success, payload: user})
  }catch(e) {
    yield put({type: USER.REGISTER_USER.payload_error, payload: e.message})
  }
}

export function* watchForLoginUser() {
  yield takeEvery( USER.LOGIN_USER.action, loginUser);
}

export function* loginUser(action) {
  try {
    const user = yield call(api.loginUser, action.payload.user);
    yield put({type: USER.LOGIN_USER.payload_success, payload: user})
  }catch(e) {
    yield put({type: USER.LOGIN_USER.payload_error, payload: e.message})
  }
}
