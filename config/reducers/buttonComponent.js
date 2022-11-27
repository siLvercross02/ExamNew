const initialState = {
  buttonRender: "",
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUTTON":
      return {
        ...state,
        buttonRender: action.payload,
      };
    default:
      return state;
  }
};

export default buttonReducer;
