import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import "./Style.css";
const Form = () => {
  const { addDetail } = useContext(FormContext);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  // debugger;
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      grade,
    };
    addDetail(data);
  };

  return (
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
  );
};

export default Form;
