const UploadFilesList = ({ files, singleFileUploadHandler }) => {
  return (
    <div class="form-group drag-list">
      <div class="files-list border-0">
        {files.map((el, i) => {
          return (
            <div
              class="d-flex justify-content-between align-items-center"
              key={i}
            >
              <span>{el.name}</span>
              <span>{el.size / 100} kb</span>
            </div>
          );
        })}

        <div className="file upload-plus">
          +
          <input type="file" name="file" onChange={singleFileUploadHandler} />
        </div>

        {/* <span className="upload-plus">+</span> */}
        <div class="size-note">
          <span>* Total Max File Size is 500MB</span>
        </div>
      </div>
    </div>
  );
};
export default UploadFilesList;
