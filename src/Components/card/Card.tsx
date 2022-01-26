import react from "react";
import { Card as BootstrapCard, Col, Row } from "react-bootstrap";
import Text from "../Text/Text";
interface Icard {
  date?: any;
  title?: any;
  text?: any;
  img?: any;
  secondaryCard?: boolean;
  icon?: any;
}
export default function Card({
  date,
  title,
  text,
  img,
  secondaryCard,
  icon,
}: Icard) {
  return (
    <>
      {secondaryCard ? (
        <Row>
          <Col lg={2} md={2} sm={2} xs={3}>
            <img src={icon} style={{ maxWidth: "100%" }} />
          </Col>
          <Col lg={10} md={10} sm={10} xs={10}>
            <Text bold orange text={title} fontSize="25px" />
            <Text text={text} fontSize="15px" />
          </Col>
        </Row>
      ) : (
        <BootstrapCard>
          <BootstrapCard.Img variant="top" src={img} />
          <BootstrapCard.Body>
            <div>
              <Text text={date} fontSize="18px" />
            </div>
            <div>
              <Text bold text={title} fontSize="25px" />
            </div>
            <div>
              <Text text={text} fontSize="18px" />
            </div>
          </BootstrapCard.Body>
        </BootstrapCard>
      )}
    </>
  );
}
