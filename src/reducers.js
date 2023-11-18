const initialState = {
    hearts: Array(6).fill(false),
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_HEART':
        const updatedHearts = [...state.hearts];
        updatedHearts[action.payload.index] = !updatedHearts[action.payload.index];
        return { ...state, hearts: updatedHearts };
      default:
        return state;
    }
  };
  
  export default rootReducer;