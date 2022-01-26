import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/card/Card";
import Text from "../../Components/Text/Text";
import img from "./Img/MOBILE.png";
import "./VenueSolutions.css";
const card = [
  {
    img: { img },

    text: (
      <ul>
        <li>
          Touchless Transaction Technology: No physical contact during the
          transaction – no cash or card exchange, no waiting for receipts
        </li>
        <li>
          Digital Hawker: Fans make the call from their seats with our app- and
          mobile-based ordering systems with QR code-enabled links
        </li>
        <li>
          Frictionless, agnostic add-on to any POS system with minimal startup
          costs
        </li>
      </ul>
    ),
  },
  {
    img: { img },

    text: (
      <ul>
        <li>
          Touchless Transaction Technology: No physical contact during the
          transaction – no cash or card exchange, no waiting for receipts
        </li>
        <li>
          Digital Hawker: Fans make the call from their seats with our app- and
          mobile-based ordering systems with QR code-enabled links
        </li>
        <li>
          Frictionless, agnostic add-on to any POS system with minimal startup
          costs
        </li>
      </ul>
    ),
  },
  {
    img: { img },

    text: (
      <ul>
        <li>
          Touchless Transaction Technology: No physical contact during the
          transaction – no cash or card exchange, no waiting for receipts
        </li>
        <li>
          Digital Hawker: Fans make the call from their seats with our app- and
          mobile-based ordering systems with QR code-enabled links
        </li>
        <li>
          Frictionless, agnostic add-on to any POS system with minimal startup
          costs
        </li>
      </ul>
    ),
  },
  {
    img: { img },

    text: (
      <ul>
        <li>
          Touchless Transaction Technology: No physical contact during the
          transaction – no cash or card exchange, no waiting for receipts
        </li>
        <li>
          Digital Hawker: Fans make the call from their seats with our app- and
          mobile-based ordering systems with QR code-enabled links
        </li>
        <li>
          Frictionless, agnostic add-on to any POS system with minimal startup
          costs
        </li>
      </ul>
    ),
  },
  {
    img: { img },

    text: (
      <ul>
        <li>
          Touchless Transaction Technology: No physical contact during the
          transaction – no cash or card exchange, no waiting for receipts
        </li>
        <li>
          Digital Hawker: Fans make the call from their seats with our app- and
          mobile-based ordering systems with QR code-enabled links
        </li>
        <li>
          Frictionless, agnostic add-on to any POS system with minimal startup
          costs
        </li>
      </ul>
    ),
  },
  {
    img: { img },

    text: (
      <ul>
        <li>
          Touchless Transaction Technology: No physical contact during the
          transaction – no cash or card exchange, no waiting for receipts
        </li>
        <li>
          Digital Hawker: Fans make the call from their seats with our app- and
          mobile-based ordering systems with QR code-enabled links
        </li>
        <li>
          Frictionless, agnostic add-on to any POS system with minimal startup
          costs
        </li>
      </ul>
    ),
  },
];
export default function VenueSolutions() {
  return (
    <>
      <Banner title="Venue Solutions" />
      <Row className="justify-content-center pt-5 pb-5 mt-5">
        <Col xl={8}>
          <div className="text-center">
            <Text
              fontSize="35px"
              text={
                <>
                  "Our multi-platform solutions connect fans to stadiums better
                  than anyone in the industry "
                </>
              }
            />
          </div>
        </Col>
      </Row>

      <Container>
        <Row>
          {card.map(({ text }) => {
            return (
              <>
                <Col lg={4} md={6} sm={6} xs={12} className="pt-4">
                  <Card text={text} img={img} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Banner
        bottomBanner
        title="Ready to be a Partner?"
        btnText="Contact Us"
      />
    </>
  );
}
