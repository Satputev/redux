const initialState = {
  age: 20,
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value
        })
      };
      break;
    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value
        })
      };
      break;
    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter(e1 => {
          return e1.id != action.value;
        })
      };
      break;
  }
  return state;
};
export default reducer;
