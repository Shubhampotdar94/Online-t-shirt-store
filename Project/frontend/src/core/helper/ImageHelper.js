import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = `https://media.istockphoto.com/photos/young-handsome-man-isolated-on-gray-textured-wall-smiling-while-with-picture-id1093999178`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
