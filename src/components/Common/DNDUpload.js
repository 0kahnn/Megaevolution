import React from "react";
import Dropzone from "react-dropzone";
import galleryIcon from "../../assets/icons/gallery-icon.png";
const DNDUpload = ({ onFileDrop, singleFileUploadHandler }) => {
  return (
    <div className="drag-file-box text-center">
      <Dropzone onDrop={(acceptedFiles) => onFileDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img src={galleryIcon} />
              <h4 className="mb-4">Drag and drop files</h4>
              <span>* Total Max File Size is 500mb</span>
              <div className="file bg-blue btn d-block">
                Browse Now
                <input
                  type="file"
                  name="file"
                  onChange={singleFileUploadHandler}
                />
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};
export default DNDUpload;
