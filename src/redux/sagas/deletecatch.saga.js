import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteCatch(action) {
    const id = action.payload
    console.log(action.payload)

    try{
        const response = yield axios.delete(`/api/catch/${id}`);
        yield put({ type: 'FETCH_CATCH'})
    }catch(err) {
        console.log('delete catch error', err);
    }
}

export default function* deleteCatchSaga(){
    yield takeLatest('DELETE_CATCH', deleteCatch);
}