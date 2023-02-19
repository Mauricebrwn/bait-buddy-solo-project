import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import moment from "moment";

function EditCatchForm() {

  const params = useParams();
  const dispatch = useDispatch();
  const catchToEdit = useSelector((store) => store.catchToEdit);
  const history = useHistory();


  useEffect(() => {
    
    console.log('params.id should work, let us make sure!', params.id)
    dispatch({
      type: 'PUT_CATCH',
      payload: params.id
    })
  }, [])

  const handleCatchNameChange = (event) => {
    dispatch({
      type: 'SET_CATCH_NAME',
      payload: event.target.value
    })
  }
  const handleCatchLengthChange = (event) => {
    dispatch({
      type: 'SET_LENGTH',
      payload: event.target.value
    })
  }
  const handleCatchWeightChange = (event) => {
    dispatch({
      type: 'SET_WEIGHT',
      payload: event.target.value
    })
  }
  const handleCatchLureChange = (event) => {
    dispatch({
      type: 'SET_LURE',
      payload: event.target.value
    })
  }
  const handleCatchTimeChange = (event) => {
    dispatch({
      type: 'SET_TIME',
      payload: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'NEW_CATCH_TO_PUT',
      payload: catchToEdit
    })
    history.push('/catch');
  }
  
  return (

    <div className="edit">
      <h2>Edit Catch:</h2>

      <form>
        <TextField size="small" id="outlined-basic" label="Fish Type" variant="outlined" 
            type="text"
            value={catchToEdit.fish_type || ''}
            onChange={handleCatchNameChange}
        />
        <TextField size="small" id="outlined-basic" label="Fish Length" variant="outlined" 
            type="number"
            value={catchToEdit.fish_length || ''}
            onChange={handleCatchLengthChange}
        />
        <TextField size="small" id="outlined-basic" label="Fish Weight" variant="outlined" 
            type="number"
            value={catchToEdit.fish_weight || ''}
            onChange={handleCatchWeightChange}
        />
        <TextField size="small" id="outlined-basic" label="Lure/ Bait" variant="outlined" 
            type="text"
            value={catchToEdit.lure_bait || ''}
            onChange={handleCatchLureChange}
        />
        <TextField size="small" id="outlined-basic" variant="outlined"
            type="datetime-local"
            value={catchToEdit.time || ''}
            onChange={handleCatchTimeChange}
        />
        <Button size= "medium" variant="outlined" onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  )
}

export default EditCatchForm;