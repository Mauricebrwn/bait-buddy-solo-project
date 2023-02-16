import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTripToEdit(action) {
    const idOfTripToEdit = action.payload;
    console.log(idOfTripToEdit)
    const response = yield axios({
      method: 'GET',
      url: `/api/trip/${idOfTripToEdit}`
    })
    yield put({
      type: 'SET_TRIP_TO_EDIT',
      payload: response.data
    })
  }

  export default function* fetchTripToEditSaga(){
    yield takeLatest('PUT_TRIP', fetchTripToEdit);
  }