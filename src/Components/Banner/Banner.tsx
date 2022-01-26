import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Button/Button";
import Text from "../Text/Text";
import bannerImg from "./Img/bgImg.jpg";
interface Ibanner {
  title?: string;
  bottomBanner?: boolean;
  btnText?: string;
}
export default function Banner({ title, bottomBanner, btnText }: Ibanner) {
  return (
    <>
      {bottomBanner ? (
        <Container className="pt-5 pb-5">
          <Row
            className="text-center align-items-center  mt-5 mb-5"
            style={{
              backgroundColor: "#ff761b",
              borderRadius: "10px",
              paddingTop: "70px",
              paddingBottom: "70px",
            }}>
            <Col lg={8}>
              <div className="">
                <Text medium fontSize="45px" text={title} white />
              </div>
            </Col>
            <Col lg={4}>
              <Button text={btnText} />
            </Col>
          </Row>
        </Container>
      ) : (
        <section
          style={{
            paddingTop: "200px",
            paddingBottom: "100px",
            backgroundColor: "rgb(255, 118, 27)",
          }}>
          <Container>
            <Row className=" text-center">
              <Col>
                <Text white fontSize="60px" text={title} />
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}
