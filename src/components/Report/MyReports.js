import Tabs from "../Chat/Tabs";
import ReportTable from "./ReportTable";
import { myReportListData, theadData } from "./data";
import "./report.css";
import { useState } from "react";
import ReportSearch from "./ReportSearch";

const MyReports = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Tabs />
      <ReportSearch searchHandler={(e) => setKeyword(e.target.value)} />

      <ReportTable
        data={myReportListData}
        theadData={theadData}
        keyword={keyword}
        isAdmin={false}
      />
    </div>
  );
};
export default MyReports;
