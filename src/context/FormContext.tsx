import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { IForm, IFormContext } from "../components/IForm";

const initialStates: IFormContext = {
  addDetail(form) {},
  deletedetails(id) {},
  forms: [{ name: "Ayesha", grade: "B+", id: 46013 }],
};

const reduceIntialState = {
  forms: [{ name: "Ayesha", grade: "B+", id: 46013 }],
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
