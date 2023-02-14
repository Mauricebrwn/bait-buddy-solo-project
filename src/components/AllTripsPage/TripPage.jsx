
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function TripList() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const trip = useSelector(store => store.trip);
    console.log(trip)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP' });
    }, []);


    return (
        <main>
        <h2>Trips</h2>
        <section className="trips">
            {trip.map(trip => {
                return (
                    <div className="trip"
                    key={trip.id}>
                        <p>{trip.lake_name}</p>
                        <p>{trip.date}</p>

                    </div>
                )
            })}
        </section>
        </main>
    )
}

export default TripList;