import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CurrentTrip(){
    const dispatch = useDispatch();
    const trip = useSelector((store) => store.trip)
    const history = useHistory();
    const lastTrip = trip[trip.length-1]
    console.log(lastTrip)
    const backToTripsPage = (event) => {
        event.preventDefault();
        history.push('/trip')
    }
    const catchPage = (event) => {
        event.preventDefault();
        history.push('/catch')
    }
    console.log('this is the current trip', lastTrip);
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP' })
    }, []);
    
    return (
        <main>
        <h1>Current Trip</h1>
        <button onClick={backToTripsPage}>Done</button> 
        <button onClick={catchPage}>Catch</button>
        </main>
    )

}
export default CurrentTrip;