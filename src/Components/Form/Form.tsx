import React, { useState } from "react";
import {
  Container,
  Col,
  FloatingLabel,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";
import Text from "../../Components/Text/Text";
const runnersForm = [
  {
    type: "text",
    placeholder: "Name",
  },
  {
    type: "text",
    placeholder: "Email",
  },
  {
    type: "Phone",
    placeholder: "Phone Number",
  },
  {
    type: "text",
    placeholder: "City",
  },
  {
    type: "text",
    placeholder: "State",
  },
  {
    type: "text",
    placeholder: "Birthdate",
  },
];
const contactForm = [
  {
    col: 6,
    type: "text",
    placeholder: "Your Name",
  },
  {
    col: 6,
    type: "text",
    placeholder: "nayabkhan.4922 at gee",
  },
  {
    formSelect: true,
    col: 12,
    type: "text",
    placeholder: "Type of Inquery",
  },
  {
    col: 12,
    as: "textarea",
    placeholder: "your Message",
  },
];
interface Form {
  primary?: boolean;
}

export default function Form({ primary }: Form) {
  return (
    <>
      <div>
        <Row className="justify-content-center d-flex pt-5 " id="contactus">
          <Col
            className="shadow"
            style={{
              backgroundColor: "white",
              padding: "30px",
            }}>
            {primary ? (
              <BootstrapForm>
                <div className="pb-4 ">
                  <Text
                    bold
                    fontSize="35px"
                    text={<>Thank you for your interest!</>}
                  />
                </div>

                <Row className="g-2 pt-1 pb-1">
                  {runnersForm.map(({ type, placeholder }) => {
                    return (
                      <>
                        <Col lg={6}>
                          <InputField
                            type={type}
                            lable="kjkkk"
                            placeholder={placeholder}
                          />
                        </Col>
                      </>
                    );
                  })}

                  <Col lg={12}>
                    <InputField
                      type="text"
                      lable="kjkkk"
                      placeholder="Comments"
                    />
                  </Col>
                </Row>
              </BootstrapForm>
            ) : (
              <BootstrapForm>
                <div className="pb-4 ">
                  <Text bold fontSize="35px" text={<>contact us</>} />
                </div>

                <Row className="g-2 pt-1 pb-1">
                  {contactForm.map(
                    ({ type, placeholder, col, formSelect, as }) => {
                      return (
                        <>
                          <Col lg={col}>
                            <InputField
                              type={type}
                              lable="kjkkk"
                              placeholder={placeholder}
                              formSelect={formSelect}
                              as={as}
                            />
                          </Col>
                        </>
                      );
                    }
                  )}
                  <Button text="Get in Touch" primaryBtn />
                </Row>
              </BootstrapForm>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
