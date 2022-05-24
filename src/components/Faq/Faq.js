import { Nav, Tab } from "react-bootstrap";
import FaqAccordion from "./FaqAccordion";
import { faqData } from "./faqData";
import "./faq.css";
const Faq = () => {
  return (
    <div className="faq-wrapper">
      <div className="container ask-title">
        <h3 className="text-center">Frequently Asked Questions</h3>
      </div>
      {/*  */}
      <div className="container">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={faqData[0]?.title}
        >
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="side-menu py-3">
                <Nav variant="pills" className="flex-column">
                  {faqData.map((el, i) => {
                    return (
                      <Nav.Item key={i} className="p-2">
                        <Nav.Link className="d-inline" eventKey={el.title}>
                          {el.title}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
              <div className="accordion-wrapper">
                <Tab.Content>
                  {faqData.map((el, i) => {
                    return (
                      <Tab.Pane eventKey={el.title} key={i}>
                        <FaqAccordion data={el} />
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};
export default Faq;
