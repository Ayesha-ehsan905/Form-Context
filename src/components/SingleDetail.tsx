import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import SRC from "./GetSrc";
const SingleDetail = (props) => {
  let { form } = props;
  let { deletedetails } = useContext(FormContext);

  const [image, setimage] = useState<File>(form.image);

  return (
    <>
      <div className="list-content-row">
        <span className="content">{form.id}</span>
        <span className="content">{form.name}</span>
        <span className="content">{form.grade}</span>
        <SRC Image={image} />
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
