import { Pagination } from "react-bootstrap";

import ReportHeader from "./ReportHeader";
import ReportSearch from "./ReportSearch";
import ReportTable from "./ReportTable";
const ReportList_ = () => {
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
      <ReportHeader isAdmin={true} />
      <ReportSearch />
      <ReportTable isAdmin={true} />
    </div>
  );
};
export default ReportList_;
