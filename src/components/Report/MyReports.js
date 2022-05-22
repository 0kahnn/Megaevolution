import { DropdownButton, Dropdown, Pagination } from "react-bootstrap";
import Tabs from "../Chat/Tabs";
import { myReportListData, theadData } from "./data";
import ReportTable from "./ReportTable";
const MyReports = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Tabs />
      <ReportTable />
    </div>
  );
};
export default MyReports;
