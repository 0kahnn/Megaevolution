import { FormControl, InputGroup } from "react-bootstrap";
import search_icon from "../../assets/icons/search_icon.png";
const ReportSearch = () => {
  return (
    <div className="container ">
      <div className="report-search-wrapper">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Requestor"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
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
