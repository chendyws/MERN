const { createStore } = require("redux");

const initialState = {
  dataBlog: [],
  name: 'Chendy'
}

const reducer = (state = initialState, action) => {
  
  return state;
}

const store = createStore(reducer);

export default store;