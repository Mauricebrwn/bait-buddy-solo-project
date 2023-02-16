import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

function EditTripForm() {

  const params = useParams();
  const dispatch = useDispatch();
  const tripToEdit = useSelector((store) => store.tripToEdit);
  const history = useHistory();


  useEffect(() => {
    
    console.log('params.id should work, let us make sure!', params.id)
    dispatch({
      type: 'PUT_TRIP',
      payload: params.id
    })
  }, [])

  const handleTripNameChange = (event) => {
    dispatch({
      type: 'SET_TRIP_NAME',
      payload: event.target.value
    })
  }
  const handleDateChange = (event) => {
    dispatch({
      type: 'SET_NEW_DATE',
      payload: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'NEW_TRIP_TO_PUT',
      payload: tripToEdit
    })
    history.push('/trip');
    console.log(tripToEdit)
  }

  return (

    <div className="edit">
      <h2>Edit Trip:</h2>

      <form>
        <TextField size="small" id="outlined-basic" label="Lake" variant="outlined" 
          type="text"
          value={tripToEdit.lake_name || ''}
          onChange={handleTripNameChange}
          placeholder='Lake'
        />
        <TextField size="small" id="outlined-basic" variant="outlined" 
          type="datetime-local"
          value={tripToEdit.date || ''}
          onChange={handleDateChange}
        />
        <Button onClick={handleSubmit} size= "medium" variant="outlined">Submit</Button>
      </form>
    </div>
  )
}

export default EditTripForm;