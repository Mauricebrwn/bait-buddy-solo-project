import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function NewTripPageForm(){
    const dispatch = useDispatch();
    const trip = useSelector((store) => store.trip)
    const [newLakeName, setNewLakeName] = useState('')
    const [newDate, setNewDate ]= useState('')
    const [newIsComplete, setNewIsComplete] = useState('')
    const history = useHistory();


    const addToTrip = (event) => {
        event.preventDefault();
        let newTrip ={
            lake_name: newLakeName,
            date: newDate,
            is_complete: false,
        } 
        dispatch({
            type:'NEW_TRIP_TO_POST',
            payload: newTrip
        })
        setNewLakeName(''),
        setNewDate(''),
        setNewIsComplete('')

        history.push('/currenttrip')
    }
    return(
        <>
        <form onSubmit={addToTrip}>
           <input type="text" value={newLakeName} onChange= {e=>setNewLakeName(e.target.value)} placeholder='Lake'/>
           <input type="date" value={newDate} onChange= {e=>setNewDate(e.target.value)} placeholder='Date'/>
           <button>Start Trip</button>        
        </form>
        </>
    )
}


export default NewTripPageForm;