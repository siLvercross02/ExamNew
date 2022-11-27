const initialState = {
  componentRender: "",
};

const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMPONENT":
      return {
        ...state,
        componentRender: action.payload,
      };
    default:
      return state;
  }
};

export default componentReducer;
