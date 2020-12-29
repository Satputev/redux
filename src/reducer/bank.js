const initialState = {
  bal: 1000
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "DEPOSIT":
      newState.bal += parseInt(action.value);
      break;
    case "WITHDRAW":
      newState.bal -= parseInt(action.value);
      break;
  }
  return newState;
};

export default reducer;
