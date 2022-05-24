import { useState } from "react";
import DNDUpload from "../Common/DNDUpload";
import UploadFilesList from "../Common/UploadFilesList";
import ReportHeader from "./ReportHeader";
import "./report.css";
const AddReport_ = () => {
  const [files, setFiles] = useState(null);
  const onFileDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };
  const singleFileUploadHandler = (e) => {
    setFiles((files) => [...files, e.target.files[0]]);
  };

  return (
    <>
      <div>
        <ReportHeader />
        {/* resolution end */}
        <div className="container report-section">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="report">
                <h3 className="text-center">Report</h3>
                <form className="form-inline">
                  <div className="form-group d-flex justify-content-between align-items-center">
                    <span>Title</span>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="e.g. I need support with my incomplete order."
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between align-items-center mt-4">
                    <span>Topic</span>
                    <div className="dropdown select ">
                      <button
                        className="select-btn dropdown-toggle p-0"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Tutorials
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a tabIndex={-1} href="#">
                            HTML
                          </a>
                        </li>
                        <li>
                          <a tabIndex={-1} href="#">
                            CSS
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="test" tabIndex={-1} href="#">
                            New dropdown <span className="caret" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a tabIndex={-1} href="#">
                                2nd level dropdown
                              </a>
                            </li>
                            <li>
                              <a tabIndex={-1} href="#">
                                2nd level dropdown
                              </a>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="test" href="#">
                                Another dropdown <span className="caret" />
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="#">3rd level dropdown</a>
                                </li>
                                <li>
                                  <a href="#">3rd level dropdown</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-between  mt-4">
                    <span>Description</span>
                    <textarea id="textarea" defaultValue={""} />
                  </div>

                  <div className="form-group d-flex justify-content-between  mt-4">
                    <span>Files</span>

                    {files?.length ? (
                      <UploadFilesList
                        files={files}
                        singleFileUploadHandler={singleFileUploadHandler}
                      />
                    ) : (
                      <DNDUpload
                        onFileDrop={onFileDrop}
                        singleFileUploadHandler={singleFileUploadHandler}
                      />
                    )}
                  </div>
                  <div className="form-footer">
                    <button>Submit</button>
                    <button>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddReport_;
