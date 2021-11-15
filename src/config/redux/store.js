const { createStore } = require("redux");

const initialState = {
  dataBlogs: [],
  name: 'Chendy'
}

const reducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_DATA_BLOG') {
    return {
      ...state,
      dataBlogs: action.value.payload
    }
  }
  if(action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Widya'
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;