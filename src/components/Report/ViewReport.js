import ReportHeader from "./ReportHeader";
import "./report.css";

const ViewReport_ = () => {
  return (
    <>
      <div>
        {/* resolution start */}
        <ReportHeader isAdmin={false} />
        {/* resolution end */}
        <div className="container report-section reply-section">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="report">
                <div className="report-header d-flex justify-content-between">
                  <h3 className="text-center pt-0">
                    <span className="heading-3"> Your Report</span>
                    <span className="status-badge solved-badge ms-3 font-weight-bold">
                      Solved
                    </span>
                  </h3>
                  <span>02.02.2022 PM 7:44</span>
                </div>
                <form className="form-inline ">
                  <div className="form-group d-flex justify-content-between align-items-center">
                    <span>Title</span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="I have something to report about my recent order!"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between align-items-center mt-4">
                    <span>Topic</span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Report in Order - MOMOCO NFT #12345678"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between  mt-4">
                    <span>Description</span>
                    <textarea
                      id="textarea"
                      name="description"
                      readOnly="readonly"
                      defaultValue={
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                \n                            "
                      }
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between  mt-4">
                    <span>Files</span>
                    <div className="files-list">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Abc.jpg</span>
                        <span>1.3 kb</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Abc.jpg</span>
                        <span>1.3 kb</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Abc.jpg</span>
                        <span>1.3 kb</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Abc.jpg</span>
                        <span>1.3 kb</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-between  mt-4">
                    <span>Reply</span>
                    <textarea
                      id="textarea"
                      name="description"
                      readOnly="readonly"
                      defaultValue={
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                Accusantium facilis, sequi veritatis odit quaerat repellendus dicta consequuntur quisquam qui in velit aliquam culpa ipsam assumenda explicabo impedit iusto laudantium aspernatur! Iste ad nisi nemo dolores corrupti sed inventore at, distinctio nobis laborum et ipsam mollitia itaque nihil reiciendis culpa eius, deleniti earum provident dolor aspernatur. Ab dolores impedit odio quaerat!\n                                \n                            "
                      }
                    />
                  </div>
                  <div className="form-footer">
                    <button>Close</button>
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
export default ViewReport_;
