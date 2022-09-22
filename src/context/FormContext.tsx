import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { IForm, IFormContext } from "../components/IForm";

const initialStates: IFormContext = {
  addDetail(form) {},
  deletedetails(id) {},
  forms: [],
};

const reduceIntialState = {
  forms: [],
};
const FormContext = createContext<IFormContext>(initialStates);

const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, reduceIntialState);

  const deletedetails = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  const addDetail = (form) => {
    dispatch({
      type: "ADD",
      payload: form,
    });
  };

  return (
    <FormContext.Provider
      value={{
        forms: state.forms,
        addDetail,
        deletedetails,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export { Provider, FormContext };
