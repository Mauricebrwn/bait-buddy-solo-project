const catchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CATCH':
        return action.payload;
      case 'UNSET_CATCH':
        return [];
      default:
        return state;
        
    }
  };
  
  export default catchReducer;