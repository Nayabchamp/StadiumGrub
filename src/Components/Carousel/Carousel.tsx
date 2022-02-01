import {
  Carousel as BootstrapCarousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Text from "../Text/Text";
import bgImg from "./Img/bg.png";
import "./Carousel.css";

export default function Carousel() {
  return (
    <>
      <section>
        <BootstrapCarousel
          style={{
            backgroundImage: `url(${bgImg}) `,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <BootstrapCarousel.Item
            style={{
              backgroundColor: "#00000094",
            }}>
            <Container className="pt-5 pb-5 mb-5 mt-5">
              <Row className="justify-content-center text-center pt-5 pb-5 mb-5 mt-5">
                <Col lg={8}>
                  <Text
                    white
                    medium
                    fontSize="25px"
                    text="lorem lipsum lorem lipsum lorem lorem lipsum lorem lipsum loremlorem lipsum lorem lipsum loremlorem lipsum lorem lipsum lorem"
                  />
                </Col>
              </Row>
            </Container>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item
            style={{
              backgroundColor: "#00000094",
            }}>
            <Container className="pt-5 pb-5 mb-5 mt-5">
              <Row className="justify-content-center text-center pt-5 pb-5 mb-5 mt-5">
                <Col lg={8}>
                  <Text
                    white
                    medium
                    fontSize="25px"
                    text="lorem lipsum lorem lipsum lorem lorem lipsum lorem lipsum loremlorem lipsum lorem lipsum loremlorem lipsum lorem lipsum lorem"
                  />
                </Col>
              </Row>
            </Container>
          </BootstrapCarousel.Item>
        </BootstrapCarousel>
      </section>
    </>
  );
}
