import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CurrentTrip(){
    const dispatch = useDispatch();
    const trip = useSelector((store) => store.trip)
    const history = useHistory();
    const backToTripsPage = (event) => {
        event.preventDefault();
        history.push('/trip')
    }
    const catchPage = (event) => {
        event.preventDefault();
        history.push('/catch')
    }
    console.log('this is the current trip', CurrentTrip);
    dispatch({
        type:'GET',
        payload: CurrentTrip
    })
    return(
        <div>
            <h1>Current Trip</h1>
            <p>{trip.date}</p>
            <p>{trip.lake_name}</p>
            <button onClick={backToTripsPage}>Done</button> 
            <button onClick={catchPage}>Catch</button>        
        </div>
    )

}
export default CurrentTrip