import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { IForm, IFormContext } from "../components/IForm";

const initialStates: IFormContext = {
  addDetail(form) {},
  forms: [],
};

const reduceIntialState = {
  forms: [],
};
const FormContext = createContext<IFormContext>(initialStates);

const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, reduceIntialState);

  const addDetail = (form) => {
    dispatch({
      type: "ADD",
      payload: form,
    });
  };
  return (
    <FormContext.Provider
      value={{
        forms: state.form,
        addDetail,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export { Provider, FormContext };
