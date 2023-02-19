import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@mui/material"
import CurrentTripItem from "./CurrentTripItem";

function CurrentTrip(){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const trip = useSelector(store => store.trip);
    const backToTripsPage = (event) => {
        event.preventDefault();
        history.push('/trip')
    }
    const catchPage = (event) => {
        event.preventDefault();
        history.push('/catch')
    }
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP' });
    }, []);

    return (
        <main>
        <h1>Current Trip</h1>
        <h3>Reed</h3>
        <h3>Feb 20th 23</h3>
        <Button onClick={backToTripsPage}size= "medium" variant="outlined">End Trip</Button> 
        <Button onClick={catchPage}size= "medium" variant="outlined">Catch</Button>
        <div>
            
        </div>
        </main>
    )

}
export default CurrentTrip;