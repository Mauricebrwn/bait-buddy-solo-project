import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* tripFormSaga(action){
    const trip = action.payload
    console.log('this is a trip', trip);
    const response = yield axios({
        method: 'POST',
        url:'/api/trip',
        data: trip
    })
    yield put({
        type:'FETCH_TRIP'
    })   
    
}

function* sagaForm() {
    yield takeLatest('NEW_TRIP_TO_POST', tripFormSaga)
}


export default sagaForm; 