import { DropdownButton, Dropdown, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const ReportTable = ({ isAdmin, data, theadData, keyword }) => {
  const [sortKey, setSortKey] = useState("");
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
    console.log(sortKey.title, sortKey.keyword);

    // let tempSort = data.sort((a, b) =>
    //   a.status > b.status ? 1 : b.status > a.status ? -1 : 0
    // );

    let tempSort = sortKey
      ? items.sort((a, b) => {
          return (
            (b[sortKey.title.toLowerCase()].toLowerCase() ===
              sortKey.keyword.toLowerCase()) -
              (a[sortKey.title.toLowerCase()].toLowerCase() ===
                sortKey.keyword.toLowerCase()) ||
            b[sortKey.title.toLowerCase()].toLowerCase() -
              a[sortKey.title.toLowerCase()].toLowerCase()
          );
        })
      : null;

    console.log(items);

    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, keyword, sortKey]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  //sort by dropdown
  const sortHandler = (title, keyword) => {
    setSortKey({ title: title, keyword: keyword });
    // console.log("sortHandler", title, keyword);
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
                {theadData.map((parentEl, i) => {
                  return parentEl.children ? (
                    <th key={i}>
                      <DropdownButton
                        className="table-dropdown"
                        title={parentEl.title}
                      >
                        {parentEl.children.map((el, i) => {
                          let { title } = parentEl;
                          console.log(title);
                          return (
                            <Dropdown.Item
                              href="#"
                              key={i}
                              onClick={() => sortHandler(title, el)}
                            >
                              {el}
                            </Dropdown.Item>
                          );
                        })}
                      </DropdownButton>
                    </th>
                  ) : (
                    <th key={i}>{parentEl.title}</th>
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
                    <td className="py-3">{el.date}</td>
                    <td className="py-3">{el.title}</td>
                    <td className="py-3">{el.topic}</td>
                    <td className="py-3">
                      <span
                        className={`status-badge ${
                          el.status === "In Progress"
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
