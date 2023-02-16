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
      type: 'FETCH_CATCH_TO_EDIT',
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
      type: 'SET_CATCH_TO_EDIT',
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
        />
        <input 
            type="number"
            value={catchToEdit.fish_length || ''}
            onChange={handleCatchLengthChange}
        />
        <input 
            type="number"
            value={catchToEdit.fish_weight || ''}
            onChange={handleCatchWeightChange}
        />
        <input 
            type="text"
            value={catchToEdit.lure_bait || ''}
            onChange={handleCatchLureChange}
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