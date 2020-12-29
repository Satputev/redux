const initialState = {
  age: 20
};
const reducer = (state = initialState, action) => {
  const newstate = { ...state };
  switch (action.type) {
    case "AGE_UP":
      newstate.age += action.value;
      break;
    case "AGE_DOWN":
      newstate.age -= action.value;
      break;
  }
  return newstate;
};
export default reducer;
