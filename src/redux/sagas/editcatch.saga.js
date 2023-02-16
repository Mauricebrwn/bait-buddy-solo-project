import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCatchToEdit(action) {
    const idOfCatchToEdit = action.payload;
    
    const response = yield axios({
      method: 'GET',
      url: `/api/catch/${idOfCatchToEdit}`
    })
    yield put({
      type: 'SET_CATCH_TO_EDIT',
      payload: response.data
    })
  }

  export default function* fetchCatchToEditSaga(){
    yield takeLatest('PUT_CATCH', fetchCatchToEdit);
  }