import { useState } from "react";
import DNDUpload from "../Common/DNDUpload";
import UploadFilesList from "../Common/UploadFilesList";
import ReportHeader from "./ReportHeader";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./report.css";

const AddReport_ = () => {
  const [files, setFiles] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("Select");
  const onFileDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };
  const singleFileUploadHandler = (e) => {
    setFiles((files) => [...files, e.target.files[0]]);
  };
  const removeFileHandler = (file) => {
    let tempFiles = [...files];
    let updatedFiles = tempFiles.filter((el) => {
      return el !== file;
    });
    setFiles(updatedFiles);
  };
  const navigate = useNavigate();

  const dropDownData = [
    {
      title: "General Support",
    },
    {
      title: "Report an Order",
      children: ["MOMOCO NFT #12345", "MOMOCO NFT #12345", "MOMOCO NFT #12345"],
    },
    {
      title: "Account Issues",
    },
    {
      title: "Technical Issues",
    },
  ];
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
                {/* <CustomDropDown config={config} /> */}
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
                    <Dropdown
                      autoClose="outside"
                      className="plan-dropdown p-_8 custom-dropdown"
                    >
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="desc-toggler"
                      >
                        {selectedTopic && selectedTopic}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {dropDownData.map((el, i) => {
                          return (
                            <Dropdown.Item
                              key={i}
                              onClick={() => setSelectedTopic(el.title)}
                            >
                              {el.children ? (
                                <Dropdown className="plan-dropdown">
                                  <Dropdown.Toggle id="dropdown-basic-2">
                                    {el.title}
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="subdropdown">
                                    {el.children.map((el, i) => {
                                      return (
                                        <Dropdown.Item
                                          key={i}
                                          onClick={() => setSelectedTopic(el)}
                                        >
                                          {el}
                                        </Dropdown.Item>
                                      );
                                    })}
                                  </Dropdown.Menu>
                                </Dropdown>
                              ) : (
                                el.title
                              )}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
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
                        removeHandler={removeFileHandler}
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
                    <button type="button" onClick={() => navigate(-1)}>
                      Cancel
                    </button>
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
