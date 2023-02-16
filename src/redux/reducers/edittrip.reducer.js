const tripToEdit = (state = {}, action) => {
    if (action.type === 'SET_TRIP_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_TRIP_NAME') {
      const newTripNameValue = action.payload;
      return {...state, lake_name: newTripNameValue}
    }
    if (action.type === 'SET_DATE_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_NEW_DATE') {
      const newTripDateValue = action.payload;
      return {...state, date: newTripDateValue}
    }
    return state;
  }

  export default tripToEdit
