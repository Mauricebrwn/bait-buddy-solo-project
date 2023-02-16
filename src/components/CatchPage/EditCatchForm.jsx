import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

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

    <div>
      <h2>Edit Catch:</h2>

      <form>
        <input 
            type="text"
            value={catchToEdit.fish_type || ''}
            onChange={handleCatchNameChange}
            placeholder= 'Fish Type'
        />
        <input 
            type="number"
            value={catchToEdit.fish_length || ''}
            onChange={handleCatchLengthChange}
            placeholder= 'Fish Length'
        />
        <input 
            type="number"
            value={catchToEdit.fish_weight || ''}
            onChange={handleCatchWeightChange}
            placeholder= 'Fish Weight'
        />
        <input 
            type="text"
            value={catchToEdit.lure_bait || ''}
            onChange={handleCatchLureChange}
            placeholder= 'Lure/ Bait'
        />
        <input 
            type="datetime-local"
            value={catchToEdit.time || ''}
            onChange={handleCatchTimeChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default EditCatchForm;