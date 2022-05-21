import logo from "../../assets/icons/logo.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="footer-detail">
              <img src={logo} alt="" srcSet />
              <p>
                {" "}
                perspiciatis natus quasi mollitia? Ratione nulla obcaecati
                blanditiis et veniam voluptate, dolore cum nobis placeat.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <h3>Community</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Kakao</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2">
            <h3>Social</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className=" col-4 col-md-2">
            <h3>Resources</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Wallet Tracker</a>
              </li>
              <li>
                <a href="#">Contract</a>
              </li>
              <li>
                <a href="#">White paper</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright d-flex justify-content-between">
          <div className="copyright-detail">
            <p>Copyright © 2021 MegaEvolution | All Rights Reserved</p>
          </div>
          <div className="copyright-links">
            <ul className="list-unstyled d-flex">
              <li>
                <a href="#">Terms of Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
