import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@mui/material";


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
           <TextField size="small" id="outlined-basic" label="Lake" variant="outlined"type="text" value={newLakeName} onChange= {e=>setNewLakeName(e.target.value)}/>
           <TextField size="small" id="outlined-basic" variant="outlined" type="datetime-local" value={newDate} onChange= {e=>setNewDate(e.target.value)} placeholder='Date'/>
           <Button onClick={addToTrip} size= "medium" variant="outlined">Start Trip</Button>        
        </form>
        </>
    )
}


export default NewTripPageForm;