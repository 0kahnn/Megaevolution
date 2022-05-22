import { myReportListData, theadData } from "./data";
import { DropdownButton, Dropdown, Pagination } from "react-bootstrap";
const ReportTable = ({ isAdmin }) => {
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
    <div className="container mt-5">
      <div className="report p-4">
        <div className="d-flex justify-content-between">
          <div className="">
            <h3 className="pt-0">My Report List</h3>
          </div>
          {isAdmin ? (
            ""
          ) : (
            <div className="">
              <button className="buttons btn-yellow">Report</button>
            </div>
          )}
        </div>
        <div>
          <table className="table-responsive w-100 mt-3">
            <thead>
              <tr>
                {theadData.map((el, i) => {
                  return el.children ? (
                    <th key={i}>
                      <DropdownButton
                        className="table-dropdown"
                        title={el.title}
                      >
                        {el.children.map((el, i) => {
                          return (
                            <Dropdown.Item href="#" key={i}>
                              {el}
                            </Dropdown.Item>
                          );
                        })}
                      </DropdownButton>
                    </th>
                  ) : (
                    <th key={i}>{el.title}</th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {myReportListData.map((el, i) => {
                return (
                  <tr>
                    <td className="py-2">{el.date}</td>
                    <td>{el.title}</td>
                    <td>{el.topic}</td>
                    <td className="">
                      <span
                        className={`status-badge ${
                          el.status === "progressing"
                            ? "progressing-badge"
                            : "solved-badge"
                        }  `}
                      >
                        {el.status}{" "}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr className="hr" />
          <div className="d-flex justify-content-center table-pagination">
            <Pagination size="sm">
              <Pagination.Prev className="prev" />
              {items}
              <Pagination.Next className="next" />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportTable;
