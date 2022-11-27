export const getInput = (input) => {
  return {
    type: "COMPONENT",
    payload: input,
  };
};

export const getButton = (button) => {
  return {
    type: "BUTTON",
    payload: button,
  };
};
