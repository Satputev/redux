const initialState = {
  a: 1
};

const reducerA = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "UPDATE_A":
      newState.a += action.value;
      break;
  }
  return newState;
};

export default reducerA;
