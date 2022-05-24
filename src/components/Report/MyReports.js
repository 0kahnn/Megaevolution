import Tabs from "../Chat/Tabs";
import ReportTable from "./ReportTable";
import { myReportListData, theadData } from "./data";
import "./report.css";

const MyReports = () => {
  return (
    <div>
      <Tabs />
      <ReportTable data={myReportListData} theadData={theadData} />
    </div>
  );
};
export default MyReports;
