import React, { useState } from "react";
import { Container, Col, FloatingLabel, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import InputField from "../../Components/InputField/InputField";

import Text from "../../Components/Text/Text";
const contactDetails = [
  {
    bold: true,
    title: "Office Location",
    padding: "",
  },
  {
    title: "Rivalry Technologies, Inc.",
    padding: "",
  },
  {
    title: "2180 N Loop West, Ste 260",
    padding: "",
  },
  {
    title: "Houston, TX 77018",
    padding: "",
  },
  {
    bold: true,
    title: "Phone",
    padding: "pt-3",
  },
  {
    title: "Tel: +1.713.364.2149",
    padding: "",
  },
];
export default function ContactUS() {
  return (
    <>
      <div>
        <Banner title="Contact" />
        <Container className="pt-5 pb-5">
          <Row className="align-items-center">
            <Col lg={7} md={12} sm={12}>
              <Form />
            </Col>
            <Col lg={1} md={12} sm={12}></Col>
            <Col lg={4} md={12} sm={12} className="pt-5">
              {contactDetails.map(({ bold, title, padding }) => {
                return (
                  <>
                    <div className={padding}>
                      <Text bold={bold} fontSize="20px" text={title} />
                    </div>
                  </>
                );
              })}

              {/* <Text
                fontSize="20px"
                text="Rivalry Technologies, Inc.

"
              />
              <Text
                fontSize="20px"
                text="2180 N Loop West, Ste 260

"
              />
              <Text
                fontSize="20px"
                text="Houston, TX 77018


"
              />
              <div className="pt-3">
                <Text
                  bold
                  fontSize="20px"
                  text="Phone

"
                />
              </div>
              <Text
                fontSize="20px"
                text="Tel: +1.713.364.2149




"
              /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
