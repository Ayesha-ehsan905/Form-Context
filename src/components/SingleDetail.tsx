import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
const SingleDetail = (props) => {
  let { form } = props;
  let { deletedetails } = useContext(FormContext);
  return (
    <>
      <div className="list-content-row">
        <span className="content">{form.id}</span>
        <span className="content">{form.name}</span>
        <span className="content">{form.grade}</span>
        <span className="content">
          <button className="Buttons" onClick={() => deletedetails(form.id)}>
            Delete
          </button>
        </span>
      </div>
    </>
  );
};

export default SingleDetail;
