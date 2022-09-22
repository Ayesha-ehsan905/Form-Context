const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        forms: [action.payload, ...state.forms],
      };
    case "REMOVE":
      return {
        ...state,
        forms: state.forms.filter((form) => form.id !== action.payload),
      };

    default:
      return state;
  }
};

export default Reducer;
