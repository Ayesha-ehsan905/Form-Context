import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { IForm } from "./IForm";
import Detail from "./SingleDetail";

const FormList = () => {
  const { forms } = useContext(FormContext);

  return (
    <div>
      <h2>List</h2>
      {forms.map((form) => (
        <Detail key={form.id} form={form} />
      ))}
    </div>
  );
};

export default FormList;
