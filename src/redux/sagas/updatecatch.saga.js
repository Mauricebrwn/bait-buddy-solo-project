import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateCatch(action) {
    const editedCatch = action.payload;
    yield axios({
      method: 'PUT',
      url: `/api/catch/${editedCatch.id}`,
      data: editedCatch,
    })
    yield put({
      type: 'FETCH_CATCH'
    })
  
  }
  function* updatedCatchSaga() {
    yield takeLatest('NEW_CATCH_TO_PUT', updateCatch)
}

export default updatedCatchSaga