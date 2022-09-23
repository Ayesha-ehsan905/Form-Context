import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import AddForm from "./AddForm";
import FormList from "./FormList";
import "./Style.css";
const Form = () => {
  return (
    <div className="main_container">
      <div className="container box">
        <AddForm />
      </div>
      <div className="container">
        <div
          className="header"
          style={{ background: "none", color: "rgb(63, 0, 77)" }}
        >
          List Entries
        </div>

        {/* <Search /> */}

        <FormList />
      </div>
    </div>
  );
};

export default Form;
