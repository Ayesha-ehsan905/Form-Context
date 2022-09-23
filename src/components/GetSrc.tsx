import { useState } from "react";

const SRC = (props) => {
  //   console.log("Fromsrc", props.Image);
  const [preview, setPreview] = useState();
  const [IsFileSelected, setFileSelected] = useState(props.IsFileSelect);
  const reader = new FileReader();
  reader.onloadend = () => {
    setPreview(reader.result);
  };
  // console.log(IsFileSelected);

  reader.readAsDataURL(props.Image);
  return (
    <>
      {IsFileSelected ? (
        <img src={preview} style={{ width: "250px", height: "250px" }} />
      ) : (
        <span className="content">
          <img src={preview} style={{ width: "40px", height: "40px" }} />
        </span>
      )}
    </>
  );
};

export default SRC;
