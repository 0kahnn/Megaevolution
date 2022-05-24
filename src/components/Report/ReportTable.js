import { DropdownButton, Dropdown, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const ReportTable = ({ isAdmin, data, theadData, keyword }) => {
  let navigate = useNavigate();

  // console.log(data.filter((el) => el.title.includes(keyword)));
  let items = data;
  // We start with an empty list of items.
  let itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    items = keyword
      ? data.filter((el) =>
          el.title.toLowerCase().includes(keyword.toLowerCase())
        )
      : data;
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, keyword]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
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
              <Link to="/report/add" className="buttons btn-yellow">
                Report
              </Link>
            </div>
          )}
        </div>

        <div className="table-responsive">
          <table className="table w-100 mt-3">
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
              {currentItems.map((el, i) => {
                return (
                  <tr
                    className="cursor-pointer"
                    key={i}
                    onClick={() => navigate("/report/view")}
                  >
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
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className="pagination pagination-sm"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              nextClassName="next page-item"
              nextLinkClassName="page-link"
              previousClassName="prev page-item"
              previousLinkClassName="page-link"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportTable;
