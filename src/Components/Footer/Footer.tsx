import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "./Img/logo.png";
import appBtn from "./Img/App-iOS.png";
import googleBtn from "./Img/App-iOS.png";
import Text from "../Text/Text";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const footermenu = [
  {
    to: "/",
    title: <>The App</>,
  },
  {
    title: <>Venue Solutions</>,
    to: "/venue-solutions",
  },

  {
    title: <>News</>,
    to: "/news",
  },
  {
    title: <>About Us</>,
    to: "/about-us",
  },
  {
    title: <>Runners</>,
    to: "/runners",
  },
];
const footercontact = [
  {
    to: "/contact-us",
    title: <>Contact Us</>,
  },
  {
    title: <>Privecy Policy</>,
  },

  {
    title: <>Terms And Condition</>,
  },
];
export default function Footer() {
  return (
    <>
      <section className="mt-5" style={{ backgroundColor: "#4E4B4F" }}>
        <Container className="pt-5">
          <Row>
            <Col lg={4} md={4} sm={4} xs={12} className="pt-5">
              <img style={{ maxWidth: "50%" }} src={footerLogo} />
              <div className="pt-3">
                <img
                  style={{ maxWidth: "30%", marginRight: "10px" }}
                  src={appBtn}
                />
                <img style={{ maxWidth: "30%" }} src={googleBtn} />
              </div>
            </Col>

            <Col lg={4} md={4} sm={4} xs={6} className="pt-5">
              {footermenu.map(({ title, to }) => {
                return (
                  <>
                    <div className="pb-3">
                      <Link
                        to={{ pathname: `${to} ` }}
                        style={{ textDecoration: "none" }}>
                        <Text white fontSize="18px" text={title} />
                      </Link>
                    </div>
                  </>
                );
              })}
            </Col>
            <Col lg={4} md={4} sm={4} xs={6} className="pt-5">
              {footercontact.map(({ title, to }) => {
                return (
                  <>
                    <div className="pb-3">
                      <Link
                        to={{ pathname: `${to} ` }}
                        style={{ textDecoration: "none" }}>
                        <Text white fontSize="18px" text={title} />
                      </Link>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: "#4E4B4F" }}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div className="">
                <Text
                  white
                  fontSize="16px"
                  text="© 2020 All Rights Reserved "
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div className="text-end">
                <FaFacebookF color="white" style={{ marginRight: "10px" }} />
                <AiOutlineTwitter
                  color="white"
                  style={{ marginRight: "10px" }}
                />
                <AiOutlineInstagram color="white" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
