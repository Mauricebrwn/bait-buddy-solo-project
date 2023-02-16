import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function EditTripForm() {

  const params = useParams();
  const dispatch = useDispatch();
  const tripToEdit = useSelector((store) => store.tripToEdit);
  const history = useHistory();


  useEffect(() => {
    
    console.log('params.id should work, let us make sure!', params.id)
    dispatch({
      type: 'FETCH_TRIP_TO_EDIT',
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
      type: 'SET_TRIP_TO_EDIT',
      payload: tripToEdit
    })
    history.push('/trip');
  }

  return (

    <div>
      <h2>Edit Trip:</h2>

      <form>
        <input 
          type="text"
          value={tripToEdit.lake_name || ''}
          onChange={handleTripNameChange}
        />
        <input 
          type="date"
          value={tripToEdit.date || ''}
          onChange={handleDateChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default EditTripForm;