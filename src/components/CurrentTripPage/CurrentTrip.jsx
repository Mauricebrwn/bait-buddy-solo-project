import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CurrentTripItem from "./CurrentTripItem";

function CurrentTrip(){
    const dispatch = useDispatch();
    const history = useHistory();

    const backToTripsPage = (event) => {
        event.preventDefault();
        history.push('/trip')
    }
    const catchPage = (event) => {
        event.preventDefault();
        history.push('/catch')
    }
    
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP' })
    }, []);
    
    return (
        <main>
        <h1>Current Trip</h1>
        <button onClick={backToTripsPage}>Done</button> 
        <button onClick={catchPage}>Catch</button>
        <div>
            
        </div>
        </main>
    )

}
export default CurrentTrip;