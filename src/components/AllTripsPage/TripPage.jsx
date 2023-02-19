import NewTripPageForm from './NewTripsPageForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import Trip from './TripItem';


export default function TripList() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const trip = useSelector(store => store.trip);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP' });
    }, []);

    return (
        <div className="trips">
        <h2>Trips</h2>
        <NewTripPageForm/>
        <div>
            {trip.map((trip) => {
                return (
                   <div key={trip.id}><Trip trip={trip}/></div>
                )
            })}
        </div>
        </div>
    )
}
