const tripReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TRIP':
        return action.payload;
      case 'UNSET_TRIP':
        return [];
      default:
        return state;
        
    }
  };
  
  export default tripReducer;