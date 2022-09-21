import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { IForm } from "./IForm";
import Detail from "./SingleDetail";

const FormList = () => {
  const { forms } = useContext(FormContext);
  console.log(forms);
  return (
    <div>
      <h2>List</h2>
      {forms.map((forms) => {
        return <Detail forms={forms} />;
      })}
    </div>
  );
};

export default FormList;
