import react from "react";
import { Form } from "react-bootstrap";
import "./InputField.css";

interface InputField {
  type?: string;
  lable?: any;
  bottomlable?: any;
  as?: any;
  height?: any;
  width?: any;
  placeholder?: any;
  formSelect?: boolean;
}

export default function InputField({
  type,
  lable,
  bottomlable,
  as,
  height,
  width,
  placeholder,
  formSelect,
}: InputField) {
  return (
    <>
      {/* <lable style={{ fontFamily: "light", fontSize: "14px" }}>{lable}</lable> */}
      {formSelect ? (
        <Form.Select
          className=" mt-2  mb-2  "
          size="lg"
          style={{
            height,
            width,
            borderRadius: "2px",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontSize: "16px",
          }}>
          <option>select</option>
        </Form.Select>
      ) : (
        <Form.Control
          id="floatingInputCustom"
          type={type}
          placeholder={placeholder}
          as={as}
          style={{
            height,
            width,
            borderRadius: "2px",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontSize: "16px",
          }}
          className=" mt-2  mb-2  "
        />
      )}
    </>
  );
}
