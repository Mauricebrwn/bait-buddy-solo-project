import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import tripSaga from './trip.saga';
import sagaForm from './tripform.saga';
import catchFormSaga from './catchform.saga';
import catchSaga from './catch.saga';
import deleteSaga from './delete.saga';
import deleteCatchSaga from './deletecatch.saga';
import fetchTripToEditSaga from './edittrip.saga';
import fetchCatchToEditSaga from './editcatch.saga';
import updatedTripSaga from './updatetrip.saga';
import updatedCatchSaga from './updatecatch.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    tripSaga(),
    sagaForm(),
    catchFormSaga(),
    catchSaga(),
    deleteSaga(),
    deleteCatchSaga(),
    fetchTripToEditSaga(),
    fetchCatchToEditSaga(),
    updatedTripSaga(),
    updatedCatchSaga(),
  ]);
}
