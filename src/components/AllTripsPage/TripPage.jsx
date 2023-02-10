import AllTripsPageForm from './NewTripsPageForm'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function TripList() {

    const dispatch = useDispatch();
    const trips = useSelector(store => store.trip);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP' });
    }, []);

    const captureDetails= (trip) =>{
        history.push(`/details/${trip.id}`)
    }

    return (
        <main>
        <h1>Trips</h1>
        <section className="trips">
            {trips.map(trip => {
                return (
                    <div className="trip"
                    key={trip.id}>
                        <h3>{trip.lake_name}</h3>
                        <h3>{trip.date}</h3>

                    </div>
                )
            })}
        </section>
        </main>
    )
}

export default TripList;