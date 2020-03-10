import { put, takeLatest } from 'redux-saga/effects';
import * as type from './constants';
import { fetchExampleError, fetchExampleSuccess } from './actions';

function* fetchExampleSaga(action: type.IFetchExampleRequest) {
  try {
    yield put(fetchExampleSuccess());
  } catch (error) {
    yield put(fetchExampleError(error));
  }
}

export function* exampleSaga() {
  yield takeLatest(type.EXAMPLE_REQUEST, fetchExampleSaga);
}
