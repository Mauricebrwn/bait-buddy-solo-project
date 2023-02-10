import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* catchFormSaga(action){
    const fishCatch = action.payload
    console.log('this is a catch', fishCatch);
    const catchSent = yield axios({
        method: 'POST',
        url:'/api/catch',
        data: trip
    })
    yield put({
        type:'FETCH_CATCH'
    })   

}

function* sagaForm() {
    yield takeLatest('NEW_CATCH_TO_POST', catchFormSaga)
}


export default CatchSagaForm; 