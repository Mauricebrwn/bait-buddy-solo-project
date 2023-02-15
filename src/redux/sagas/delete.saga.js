import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteTrip(action) {
   const id = action.payload
   console.log(action.payload)
  try {
    const response = yield axios.delete(`/api/trip/${id}`);
    yield put({ type: 'FETCH_TRIP'})
  } catch (error) {
    console.log('delete request failed', error);
  }
}

export default function* deleteSaga() {
  yield takeLatest('DELETE_TRIP', deleteTrip);
}