import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import SRC from "./GetSrc";

const AddForm = () => {
  const { addDetail } = useContext(FormContext);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [selectedFile, setselectedFile] = useState<File>();
  const [IsFileSelected, setIsFileSelected] = useState<boolean>(false);

  // debugger;
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 55),
      name,
      grade,
      image: selectedFile,
    };
    addDetail(data);
    setName("");
    setGrade("");
    setIsFileSelected(false);
    // setselectedFile(null);
  };
  const fileHandler = (e) => {
    setselectedFile(e.target.files[0]);
    setIsFileSelected(true);
  };
  return (
    <>
      <div className="header">Enter Your Details</div>
      <form onSubmit={onSubmit}>
        <div className="parent-input">
          {IsFileSelected ? (
            <div>
              <SRC Image={selectedFile} IsFileSelect={IsFileSelected} />
            </div>
          ) : (
            <>
              <div className="file-input">
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={fileHandler}
                  style={{ border: "none" }}
                  required
                />

                <span
                  className="material-icons upload-icon "
                  style={{ fontSize: "51px" }}
                >
                  upload_file
                </span>
              </div>
              <div className="file-content">
                <h3>Upload Image</h3>
                <p>
                  Upload image with dimensions of 256*256 pixel on transparent
                  background
                </p>
              </div>
            </>
          )}
        </div>
        <div className="field input-field">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            required
          />
          <label>Name</label>
        </div>
        <div className="field input-field">
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            maxLength={1}
            required
          />
          <label>Grade</label>
        </div>

        <div className="field button-field">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
