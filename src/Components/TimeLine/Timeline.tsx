import { Button, Col, Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Vectarytexture from "./Img/Vectary-texture.png";
import Vectarytexture1 from "./Img/Vectary-texture-1.png";
import Vectarytexture2 from "./Img/Vectary-texture-2.png";
import Text from "../Text/Text";
import MediaQuery from "react-responsive";
interface timeline {
  img?: any;
}

export default function Timealine({ img }: timeline) {
  const timeline = [
    {
      title: <>mobile ordering/delivery</>,
      text: (
        <>
          Lorem lipsum lorem lipsum lorem lipsum Lorem lipsum lorem lipsum lorem
          lipsum Lorem lipsum lorem lipsum lorem lipsum
        </>
      ),
      img: Vectarytexture,
      alignitems: "align-items-center",
      height: "380px",
      circleText: "01",
    },
    {
      title: <>mobile ordering/delivery</>,
      text: (
        <>
          Lorem lipsum lorem lipsum lorem lipsum Lorem lipsum lorem lipsum lorem
          lipsum Lorem lipsum lorem lipsum lorem lipsum
        </>
      ),
      img: Vectarytexture1,
      alignitems: "align-items-center",
      height: "380px",
      circleText: "02",
    },
    {
      title: <>mobile ordering/delivery s</>,
      text: (
        <>
          Lorem lipsum lorem lipsum lorem lipsum Lorem lipsum lorem lipsum lorem
          lipsum Lorem lipsum lorem lipsum lorem lipsum
        </>
      ),
      img: Vectarytexture2,
      alignitems: "align-items-center",
      circleText: "03",
    },
  ];
  return (
    <>
      <div className="pt-5 pb-5 text-center">
        <Text medium fontSize="35px" text="How its Work" />
      </div>

      <Container>
        {timeline.map(
          ({ text, title, alignitems, height, circleText, img }) => {
            return (
              <>
                <Row className={alignitems}>
                  <Col lg={4} md={5}>
                    <MediaQuery maxWidth={766}>
                      <div className="text-center">
                        <div>
                          <Text orange medium fontSize="25px" text={title} />
                        </div>
                        <div className="p-2">
                          <hr
                            style={{
                              color: "#ff761b",
                              width: "50%",
                              margin: "auto",
                            }}
                          />
                        </div>

                        <div className="pt-2 pb-2">
                          <Text fontSize="18px" text={text} />
                        </div>
                      </div>
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                      <div>
                        <div>
                          <Text orange medium fontSize="25px" text={title} />
                        </div>
                        <hr style={{ color: "#ff761b", width: "50%" }} />
                        <div className="pt-2 pb-2">
                          <Text fontSize="18px" text={text} />
                        </div>
                      </div>
                    </MediaQuery>
                  </Col>
                  <Col lg={4} md={2} className="text-center">
                    <MediaQuery minWidth={767}>
                      <Button
                        style={{
                          height: "70px",
                          width: "70px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          color: "#ff761b",
                          borderColor: "#ff761b",
                          border: "2px solid",
                        }}>
                        {circleText}
                      </Button>

                      <div
                        className="justify-content-center d-flex"
                        style={{
                          border: "1px solid #ff761b ",
                          width: "2px",
                          height,
                          position: "absolute",
                          left: "0",
                          right: "0",
                          margin: "auto",
                          zIndex: "-1",
                        }}></div>
                    </MediaQuery>
                  </Col>
                  <Col lg={4} md={5}>
                    <MediaQuery maxWidth={766}>
                      <div className="text-center">
                        <img src={img} style={{ maxWidth: "130%" }} />
                      </div>
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                      <div>
                        <img src={img} style={{ maxWidth: "130%" }} />
                      </div>
                    </MediaQuery>
                  </Col>
                </Row>
              </>
            );
          }
        )}
      </Container>
    </>
  );
}
