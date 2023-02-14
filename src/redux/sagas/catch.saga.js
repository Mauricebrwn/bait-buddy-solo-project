import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCatch() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/catch', config);
    

    yield put({ type: 'SET_CATCH', payload: response.data });
  } catch (error) {
    console.log('Catch get request failed', error);
  }
}

export default function* catchSaga() {
  yield takeLatest('FETCH_CATCH', fetchCatch);
}