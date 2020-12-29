const initialState = {
  b: 1
};

const reducerB = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "UPDATE_B":
      newState.b += action.value;
      break;
  }
  return newState;
};

export default reducerB;
