import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Form from "../../Components/Form/Form";
import Text from "../../Components/Text/Text";
import ContactUS from "../ContactUs/ContactUs";
const hiring = [
  "Houston",
  "Austin",
  "San Antonio",
  "New York",
  "Chicago",
  "Philadelphia",
  "Los Angeles",
  "San Jose",
];
export default function Runners() {
  return (
    <>
      <Banner title="Runners" />

      <Container className="pt-5">
        <div className=" pt-5">
          <Text bold fontSize="35px" text={<>Now Hiring in:</>} />
          <hr
            style={{
              color: "#ff761b",
              width: "150px",
              height: "2px",
              opacity: "1",
            }}
          />
        </div>

        <Row>
          {hiring.map((title) => {
            return (
              <>
                <Col lg={3} md={4} sm={6} xs={6} className="pt-4">
                  <div className="shadow p-3 text-center">
                    <Text fontSize="25px" text={title} />
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Container className="pt-5">
        <Row className="pt-5">
          <Col lg={8}>
            <div className="  pt-5">
              <Text
                bold
                fontSize="35px"
                text={<>Get PAID to attend your </>}
                nextText={<>favorite events!</>}
              />
              <hr
                style={{
                  color: "#ff761b",
                  width: "200px",
                  height: "2px",
                  opacity: "1",
                }}
              />
              <div className="pt-3">
                <Text
                  fontSize="18px"
                  text={
                    <>
                      Start Running today and get paid to help out at and attend
                      your favorite sporting event or concert!Running for sEATz
                      is like getting free tickets to some of the best events in
                      town, except it’s BETTER than free tickets because you
                      receive a paycheck and tips!
                    </>
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Form primary />
      </Container>
      <Banner
        bottomBanner
        title="Ready to be a Partner?"
        btnText="Contact Us"
      />
    </>
  );
}
