import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@mui/material";


function NewCatchForm(){
    const dispatch = useDispatch();
    const catches = useSelector((store) => store.catchReducer)
    const [newFish_type, setNewFish_type] = useState('')
    const [newFish_length, setNewFish_length] = useState('')
    const [newFish_weight, setNewFish_weight] = useState('')
    const [newLure_bait, setNewLure_bait] = useState('')
    const [newTime, setNewTime] = useState('')
    const history = useHistory();

    const toCurrentTripPage = (event) => {
        event.preventDefault();
        history.push('/currenttrip')
    }

    const addToCatch = (event) => {
        event.preventDefault();
        let newCatch ={
            fish_type: newFish_type,
            fish_length: newFish_length,
            fish_weight: newFish_weight,
            lure_bait: newLure_bait,
            time: newTime
        } 
        console.log('this is a new catch', newCatch);
        dispatch({
            type:'NEW_CATCH_TO_POST',
            payload: newCatch
        })
       setNewFish_type(''),
       setNewFish_length(''),
       setNewFish_weight(''),
       setNewLure_bait(''),
       setNewTime('')
    }
    return(
        <div>
        <form onSubmit={addToCatch}>
           <TextField size="small" id="outlined-basic" label="Fish Type" variant="outlined" type="text" value={newFish_type} onChange= {e=>setNewFish_type(e.target.value)}/>
           <TextField size="small" id="outlined-basic" label="Fish Length" variant="outlined" type="number" value={newFish_length} onChange= {e=>setNewFish_length(e.target.value)}/>
           <TextField size="small" id="outlined-basic" label="Fish Weight" variant="outlined" type="number" value={newFish_weight} onChange= {e=>setNewFish_weight(e.target.value)}/>
           <TextField size="small" id="outlined-basic" label="Lure/ Bait" variant="outlined" type="text" value={newLure_bait} onChange= {e=>setNewLure_bait(e.target.value)}/>
           <TextField size="small" id="outlined-basic" variant="outlined" type="datetime-local" value={newTime} onChange= {e=>setNewTime(e.target.value)}/>
           <Button onClick={addToCatch} size= "medium" variant="outlined">Add Catch</Button>        
        </form>

        {/* <button onClick={toCurrentTripPage}>Add Catch</button> */}
        </div>
    )

}

export default NewCatchForm