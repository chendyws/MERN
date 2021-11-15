const initialState = {
  name: 'Chendy'
}

const globalReducer = (state = initialState, action) => {
 
  if(action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Widya'
    }
  }
  return state;
}

export default globalReducer;
