const catchToEdit = (state = {}, action) => {
    if (action.type === 'SET_CATCH_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_CATCH_NAME') {
     const newCatchNameValue = action.payload;
      return {...state, fish_type: newCatchNameValue}
    }
    if (action.type === 'SET_LENGTH_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_LENGTH') {
     const newCatchLengthValue = action.payload;
      return {...state, fish_length: newCatchLengthValue}
    }if (action.type === 'SET_WEIGHT_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_WEIGHT') {
     const newCatchWeightValue = action.payload;
      return {...state, fish_weight: newCatchWeightValue}
    }
    if (action.type === 'SET_LURE_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_LURE') {
     const newCatchLureValue = action.payload;
      return {...state, lure_bait: newCatchLureValue}
    }
    if (action.type === 'SET_TIME_TO_EDIT') {
      return action.payload; 
    } else if (action.type === 'SET_TIME') {
     const newCatchTimeValue = action.payload;
      return {...state, time: newCatchTimeValue}
    }
    return state;
  }

  export default catchToEdit