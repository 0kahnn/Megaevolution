import { FormControl, InputGroup } from "react-bootstrap";
import search_icon from "../../assets/icons/search_icon.png";

const ReportSearch = ({ searchHandler }) => {
  return (
    <div className="container ">
      <div className="report-search-wrapper">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Requestor"
            onChange={searchHandler}
          />
          <InputGroup.Text id="basic-addon2">
            <img src={search_icon} alt="search_icon" />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};
export default ReportSearch;
