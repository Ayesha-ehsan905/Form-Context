import { useContext, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";

const Search = () => {
  const { searchdetails } = useContext(FormContext);
  //   const inputref = useRef<HTMLInputElement>();
  const [name, setname] = useState<string>("");

  const handleFilter = (e) => {
    setname(e.target.value);
    if (e.target.value != "") {
      searchdetails(name);
    }
  };
  return (
    <>
      <div className="input-div">
        <input
          className="input-grey-rounded"
          type="text"
          id=""
          value={name}
          placeholder="Search"
          //   onChange={(e) => Search(e.target.value)}
          onInput={(e) => handleFilter(e)}
        />
      </div>
    </>
  );
};

export default Search;
