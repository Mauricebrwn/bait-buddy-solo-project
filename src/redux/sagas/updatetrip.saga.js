import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateTrip(action) {
    const editedTrip = action.payload;
    yield axios({
      method: 'PUT',
      url: `/trip/${editedTrip.id}`,
      data: editedTrip,
    })
    yield put({
      type: 'FETCH_TRIP'
    })
  
  }
  function* updatedTripSaga() {
    yield takeLatest('NEW_TRIP_TO_PUT', updateTrip)
}

export default updatedTripSaga