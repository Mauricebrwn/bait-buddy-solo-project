import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
            type:'SET_CATCH',
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
        <h1>Catch</h1>
        <form onSubmit={addToCatch}>
           <input type="text" value={newFish_type} onChange= {e=>setNewFish_type(e.target.value)} placeholder= 'Fish Type'/>
           <input type="number" value={newFish_length} onChange= {e=>setNewFish_length(e.target.value)} placeholder= 'Fish Length'/>
           <input type="number" value={newFish_weight} onChange= {e=>setNewFish_weight(e.target.value)} placeholder= 'Fish Weight'/>
           <input type="text" value={newLure_bait} onChange= {e=>setNewLure_bait(e.target.value)} placeholder= 'Lure/ bait'/>
           <input type="time" value={newTime} onChange= {e=>setNewTime(e.target.value)} placeholder= 'time'/>
           <button onClick={addToCatch}>Add Catch</button>        
        </form>

        {/* <button onClick={toCurrentTripPage}>Add Catch</button> */}
        </div>
    )

}

export default NewCatchForm