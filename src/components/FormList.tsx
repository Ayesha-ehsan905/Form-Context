import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import Detail from "./SingleDetail";
import "./Style.css";

const FormList = () => {
  const { forms } = useContext(FormContext);
  const [search, setsearch] = useState("");
  const [data, setdata] = useState(forms);

  //set the state if the input has a value
  const handleFilter = (e) => {
    setsearch(e.target.value);
    // filterList();
  };
  //search from the value in the form
  const filterdata = () => {
    return forms.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterList = () => {
    const x = filterdata();
    setdata(x);
  };
  useEffect(() => {
    setdata(forms);
    filterList();
  }, [forms, search]);

  return (
    <>
      <div className="input-div">
        <input
          className="input-grey-rounded"
          type="text"
          value={search}
          placeholder="search"
          onInput={(e) => handleFilter(e)}
        />
      </div>
      <div className="list-main">
        <div className="list">
          <span className="list-heading">ID</span>
          <span className="list-heading">Name</span>
          <span className="list-heading">Grade</span>
          <span className="list-heading">Image</span>
          <span className="list-heading">Action</span>
        </div>
        <div className="list-content">
          {data.map((form) => (
            <Detail key={form.id} form={form} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FormList;
