import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import Text from "../../Components/Text/Text";
import bgImg from "./Img/bgImg.jpg";
import mobGraphic from "./Img/mobGraphic.png";
import iosBtn from "./Img/App-iOS.png";
import venueImg from "./Img/bb.png";
import event from "./Img/event.png";
import touchlessbg from "./Img/SEATZ_touchless.png";
import scan from "./Img/SEATZ_CONTACT scan.png";
import tablet from "./Img/SEATZ_TABLET.png";
import runners from "./Img/SEATZ_CONTACT.png";
import "./TheApp.css";
import Banner from "../../Components/Banner/Banner";
const mobiles = [
  {
    title: "Select Your Event",
    text: <>Let us know your location and we’ll show you all your gameday .</>,
    nextline: "options",
  },
  {
    title: "Shop Food, Drinks & Merchandise",
    text: (
      <>
        Browse all the venue has to offer from food and beverage items to
        jerseys and merchandise.
      </>
    ),
  },
  {
    title: "Choose Delivery or Pick Up",
    text: (
      <>
        We will let you know when your order is on the way or ready for pick up
        in the sEATz Express Lane.
      </>
    ),
  },
];
const touchless = [
  {
    img: <img style={{ maxWidth: "70%" }} src={tablet} />,
    text: (
      <>…place your order with one of our servers on a “touchless” tablet.</>
    ),
  },
  {
    img: <img style={{ maxWidth: "70%" }} src={scan} />,
    text: (
      <>
        Scan your QR code at one of our sEATz Express Lanes to pick up your
        order and get back to the action OR…
      </>
    ),
  },
  {
    img: <img style={{ maxWidth: "70%" }} src={runners} />,
    text: <>…have your order delivered by one of our speedy runners!</>,
  },
];

const seatzCard = [
  {
    title: "Run for sEATz",
    text: "Deliver with sEATz and get paid!",
    btnText: "Get Started",
  },
  {
    title: "Run for sEATz",
    text: "Deliver with sEATz and get paid!",
    btnText: "Get Started",
  },
];
export default function TheApp() {
  return (
    <>
      {/* main banner start */}
      <section
        style={{
          paddingTop: "200px",
          paddingBottom: "100px",
          backgroundColor: "rgb(255, 94, 0)",
        }}>
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="responsBanner">
                <Text
                  className="resBannerText"
                  white
                  fontSize="60px"
                  black
                  text="SKIP THE LINE."
                  nextText="NOT THE GAME."
                />
                <div className=" pt-4">
                  <img
                    style={{ maxWidth: "35%", marginRight: "25px" }}
                    src={iosBtn}
                  />
                  <img style={{ maxWidth: "35%" }} src={iosBtn} />
                </div>
                {/* <div className="pt-5">
                  <Button text="Request a Demo" />
                </div> */}
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="text-center">
                <img style={{ maxWidth: "100%" }} src={mobGraphic} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* main banner end */}

      {/* venue solution start */}
      <Container className="pt-5 pb-5">
        <Row className="align-items-center pt-5 pb-5">
          <Col lg={6}>
            <div>
              <Text
                medium
                fontSize="25px"
                text={
                  <>
                    MULTI-PLATFORM SOFTWARE CONNECTS FANS TO GAME DAYLIKE NO
                    OTHER
                  </>
                }
              />
            </div>
            <div className="pt-2 pb-2">
              <Text
                fontSize="18px"
                text={
                  <>
                    mobile ordering/delivery | express pick-up | self-serve
                    kiosks | event management | and more!
                  </>
                }
              />
            </div>

            <Button text="Venue Solution" primaryBtn href="" />
          </Col>
          <Col lg={6}>
            <img style={{ maxWidth: "100%" }} src={venueImg} />
          </Col>
        </Row>
      </Container>

      {/* venue solution end */}

      {/* mobile cards start */}
      <Container className="pt-5  pb-5">
        <div className="text-center">
          <Text medium fontSize="35px" text="HOW DOES IT WORK?" orange />
          <Text
            medium
            fontSize="16px"
            text="sEATz’s mobile platform puts the 
stadium at the fans’ fingertips"
          />
        </div>
        <Row className="pt-5 pb-5 ">
          {mobiles.map(({ title, text, nextline }) => {
            return (
              <>
                <Col lg={4} className="pt-5">
                  <div
                    className="text-center shadow"
                    style={{ padding: "20px" }}>
                    <img style={{ maxWidth: "35%" }} src={event} />
                    <div className="pt-4">
                      <Text medium fontSize="20px" text={title} orange />
                    </div>
                    <Text
                      medium
                      fontSize="16px"
                      text={text}
                      nextText={nextline}
                    />
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      {/* mobile cards end */}

      {/* TOUCHLESS TRANSACTION TECHNOLOGY start */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "50px",
          backgroundImage: `url(${touchlessbg}) `,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <Container className="pt-5  pb-5">
          <div className="text-center">
            <Text
              medium
              fontSize="35px"
              text="TOUCHLESS TRANSACTION TECHNOLOGY"
              white
            />
            <Text
              medium
              white
              fontSize="16px"
              text="Use your phone to place your “contact-free” express pickup 
              or delivery order for a safer ordering experience OR…"
            />
          </div>
          <Row className="pt-5 pb-5 ">
            {touchless.map(({ text, img }) => {
              return (
                <>
                  <Col lg={4}>
                    <div className="text-center " style={{ padding: "20px" }}>
                      {img}
                      <div className="pt-3">
                        <Text medium fontSize="16px" text={text} white />
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* TOUCHLESS TRANSACTION TECHNOLOGY end */}

      {/* Still Have Questions start */}

      <Banner
        bottomBanner
        title="Still Have Questions?
"
        btnText="Contact Us"
      />
      {/* Still Have Questions end */}

      {/* seatzCard start */}

      <Container>
        <Row className="justify-content-center">
          {seatzCard.map(({ title, text, btnText }) => {
            return (
              <>
                <Col lg={5} className="pt-4">
                  <div
                    className="text-center p-5 shadow"
                    style={{
                      border: "1px solid #ff761b",
                      borderRadius: "10px",
                    }}>
                    <Text medium fontSize="35px" text={title} orange />
                    <div className="pt-3 pb-3">
                      <Text medium fontSize="18px" text={text} />
                    </div>
                    <Button text={btnText} primaryBtn />
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      {/* seatzCard end */}
    </>
  );
}
