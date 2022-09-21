import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { IForm } from "./IForm";
import Detail from "./SingleDetail";
import "./Style.css";

const FormList = () => {
  const { forms } = useContext(FormContext);

  return (
    <>
      <div className="list-main">
        <div className="list">
          <span className="list-heading">ID</span>
          <span className="list-heading">Name</span>
          <span className="list-heading">Grade</span>
          <span className="list-heading">Action</span>
        </div>
        <div className="list-content">
          {forms.map((form) => (
            <Detail key={form.id} form={form} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FormList;

{
  /* <h2>List</h2>
{forms.map((form) => (
  <Detail key={form.id} form={form} />
))} */
}
