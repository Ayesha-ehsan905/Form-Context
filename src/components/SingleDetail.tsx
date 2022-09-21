import React, { useContext } from "react";
const Test = (props) => {
  let { form } = props;

  return <li>{form.text}</li>;
};

export default Test;
