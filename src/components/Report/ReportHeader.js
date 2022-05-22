const ReportHeader = ({ isAdmin }) => {
  return (
    <div className="container-fluid top-banner mb-5">
      <div className="container ">
        <div className="row">
          <h3 className="text-center">
            Resolution Center{" "}
            {isAdmin ? <span className="admin-badge">Admin</span> : ""}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default ReportHeader;
