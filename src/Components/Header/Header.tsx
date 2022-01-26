import React, { useState, useEffect, useContext } from "react";
import { Nav, Navbar, Container, Row, Dropdown } from "react-bootstrap";
import "./Header.css";
import logo from "./Img/logo.png";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

function Header() {
  let menu = [
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
    {
      title: <>Contact Us</>,
      to: "/contact-us",
    },
  ];
  const [headerColor, setHeaderColor] = useState(false);

  const changebackground = () => {
    window.scrollY > 0 ? setHeaderColor(true) : setHeaderColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changebackground);
  });

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        fixed="top"
        className={headerColor ? "changeheader shadow" : "defaultheader "}>
        <Container>
          <Col xl={2} lg={2} md={3} sm={6} xs={6} id="zLogo">
            <Navbar.Brand href="#">
              {" "}
              <Image src={logo} className="logo"></Image>
            </Navbar.Brand>
          </Col>
          <Col xl={10} lg={10} md={8} sm={6} xs={6}>
            <Navbar.Toggle aria-controls="navbarScroll">
              {/* <Hamburger /> */}
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarScroll">
              <Nav className="ml-auto my-lg-0  ">
                {menu.map(({ title, to }) => {
                  return (
                    <Nav.Link
                      className="pl-6 ml-5"
                      style={{
                        fontFamily: "Roboto-Regular",
                      }}>
                      <Link
                        to={{ pathname: `${to} ` }}
                        style={{ textDecoration: "none" }}>
                        <p
                          className="link"
                          style={{
                            padding: "0px",
                            margin: "0px",
                          }}>
                          {title}
                        </p>
                      </Link>
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
