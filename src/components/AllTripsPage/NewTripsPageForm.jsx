import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

function NewTripPageForm(){
    const dispatch = useDispatch();
    const trip = useSelector((store) => store.trip)
    const [newLakeName, setNewLakeName] = useState('')
    const [newDate, setNewDate ]= useState('')
    const [newIsComplete, setNewIsComplete] = useState('')

    const addToTrip = (event) => {
        event.preventDefault();
        let newTrip ={
            lakeName: newLakeName,
            date: newDate,
            isComplete: newIsComplete,
            trip_id: trip.id
        } 
        console.log('this is a new trip', newTrip);
        dispatch({
            type:'POST',
            payload: newTrip
        })
        setNewLakeName(''),
        setNewDate(''),
        setNewIsComplete('')
    }
    return(
        <>
        <form onSubmit={addToTrip}>
           <input type="text" value={newLakeName} onChange= {e=>setNewLakeName(e.target.value)} placeholder='Lake'/>
           <input type="date" value={newDate} onChange= {e=>setNewDate(e.target.value)} placeholder='date'/>
           <button>Start Trip</button>        
        </form>
        </>
    )
}


export default NewTripPageForm;