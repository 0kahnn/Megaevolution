import { myReportListData, theadData } from "./data";

import ReportHeader from "./ReportHeader";
import ReportSearch from "./ReportSearch";
import ReportTable from "./ReportTable";
import "./report.css";
import { useState } from "react";

const ReportList_ = () => {
  const [keyword, setKeyword] = useState("lorem");

  return (
    <div>
      <ReportHeader isAdmin={true} />
      <ReportSearch searchHandler={(e) => setKeyword(e.target.value)} />
      <ReportTable
        keyword={keyword}
        isAdmin={true}
        data={myReportListData}
        theadData={theadData}
      />
    </div>
  );
};
export default ReportList_;
