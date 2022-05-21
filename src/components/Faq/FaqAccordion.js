import { Accordion } from "react-bootstrap";

const FaqAccordion = ({ data }) => {
  return (
    <Accordion>
      {data.data.map((el, i) => {
        return (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>{el.title}</Accordion.Header>
            <Accordion.Body>{el.description}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default FaqAccordion;
