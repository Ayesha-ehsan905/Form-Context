import { useState } from "react";

const SRC = (props) => {
  console.log("Fromsrc", props.Image);
  const [preview, setPreview] = useState();
  const reader = new FileReader();
  reader.onloadend = () => {
    setPreview(reader.result);
  };

  reader.readAsDataURL(props.Image);
  return (
    <span className="content">
      <img src={preview} style={{ width: "40px", height: "40px" }} />
    </span>
  );
};

export default SRC;
