import R from 'ramda';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchAppartments } from 'js/modules/Http';
import {
  FETCH_APPARTMENTS_START,
  fetchAppartmentsFail,
  fetchAppartmentsSuccess,
} from '../actions';

const take10 = R.take(10);

function* fetchAppartmentsSaga() {
  try {
    const res = yield call(fetchAppartments);

    yield put(fetchAppartmentsSuccess(take10(res)));
  } catch (error) {
    yield put(fetchAppartmentsFail(error));
  }
}

export default function* appartmentSaga() {
  yield [takeLatest(FETCH_APPARTMENTS_START, fetchAppartmentsSaga)];
}
