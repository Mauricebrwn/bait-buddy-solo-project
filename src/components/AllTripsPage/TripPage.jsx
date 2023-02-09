import AllTripsPageForm from './AllTripsPageForm'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import TripItem from './TripItem';

export default function tripPage() {
    const dispatch = useDispatch();
    const trips = useSelector(store => store.tripReducer)
    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF' });
      }, [dispatch]);

      return (
        <div>
            <h2>Trip</h2>
            <AllTripsPageForm />
            <p>All trips</p>
        <div>
        {trips.map((trip) => {
            return(
                <ul key={trip.id}></ul>
            )
        })}
        </div>
        </div>
      )
}
