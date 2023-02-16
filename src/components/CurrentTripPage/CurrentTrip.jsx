import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CurrentTripItem from "./CurrentTripItem";

function CurrentTrip(){
    const params = useParams();
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