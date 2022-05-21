import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="container-fluid top-banner">
      <div className="row">
        <h3 className="text-center">Resolution Center</h3>
        <div className="chat-links d-flex justify-content-center mt-5">
          <a href>Comming Soon</a>
          <NavLink
            exact
            to="/chat"
            className={(isActive) => (isActive ? "chat-active" : "")}
          >
            {" "}
            1:1 Chat
          </NavLink>
          <NavLink
            exact
            to="/report"
            className={(isActive) => (isActive ? "chat-active" : "")}
          >
            {" "}
            Report
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
