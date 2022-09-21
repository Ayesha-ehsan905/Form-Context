const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        forms: [action.payload, ...state.forms],
      };
    default:
      return state;
  }
};

export default Reducer;
