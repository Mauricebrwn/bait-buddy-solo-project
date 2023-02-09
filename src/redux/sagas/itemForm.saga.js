import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* itemFormSaga(action){
    const item = action.payload
    console.log('this is item', item);
    const itemSent = yield axios({
        method: 'POST',
        url:'/api/trip',
        data: item
    })
    yield put({
        type:'FETCH_TRIP'
    })   

}

function* sagaForm() {
    yield takeLatest('NEW_ITEM_TO_POST', itemFormSaga)
}


export default sagaForm; 