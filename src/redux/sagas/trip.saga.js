import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTrip() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/trip', config);
    

    yield put({ type: 'SET_TRIP', payload: response.data });
  } catch (error) {
    console.log('Trip get request failed', error);
  }
}

export default function* tripSaga() {
  yield takeLatest('FETCH_TRIP', fetchTrip);
}