import { FaTimes } from "react-icons/fa";
const UploadFilesList = ({ files, singleFileUploadHandler, removeHandler }) => {
  return (
    <div className="form-group drag-list">
      <div className="files-list border-0">
        {files.map((el, i) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center"
              key={i}
            >
              <span>{el.name}</span>
              <span>
                {el.size / 100} kb{" "}
                <button
                  className="close-icon ms-4"
                  type="button"
                  onClick={() => removeHandler(el)}
                >
                  <FaTimes />
                </button>
              </span>
            </div>
          );
        })}

        <div className="file upload-plus">
          +
          <input type="file" name="file" onChange={singleFileUploadHandler} />
        </div>

        {/* <span className="upload-plus">+</span> */}
        <div className="size-note">
          <span>* Total Max File Size is 500MB</span>
        </div>
      </div>
    </div>
  );
};
export default UploadFilesList;
