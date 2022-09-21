import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import FormList from "./FormList";
import "./Style.css";
const Form = () => {
  const { addDetail } = useContext(FormContext);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  // debugger;
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 100000),
      name,
      grade,
    };
    addDetail(data);
  };

  return (
    <div className="main_container">
      <div className="container">
        <div className="header">Enter Your Details</div>
        <form onSubmit={onSubmit}>
          <div className="field input-field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Name</label>
          </div>
          <div className="field input-field">
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
            <label>Grade</label>
          </div>

          <div className="field button-field">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="container">
        <FormList />
      </div>
    </div>
  );
};

export default Form;
