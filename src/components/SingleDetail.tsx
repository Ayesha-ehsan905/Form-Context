import React, { useContext } from "react";
const Test = (props) => {
  let { form } = props;

  return (
    <div>
      First Form
      <h1>{form.name}</h1>
      <h1>{form.grade}</h1>
    </div>
  );
};

export default Test;
