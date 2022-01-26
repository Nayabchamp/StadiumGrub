import react from "react";
import { Button as Bootstrapbtn } from "react-bootstrap";
import "./Button.css";
interface IButton {
  text?: string;
  orangeBorder?: boolean;
  primaryBtn?: boolean;
  secondryBtn?: boolean;
  href?: any;
  onClick?: any;
}
export default function Button({
  text,
  orangeBorder,
  primaryBtn,
  href,
  onClick,
}: IButton) {
  return (
    <Bootstrapbtn
      onClick={onClick}
      href={href}
      style={{
        fontFamily: "Roboto-Medium",
        backgroundColor: primaryBtn ? "#ff761b" : "transparent",
        border: orangeBorder ? "1px solid #ff761b " : "1px solid  white ",
        fontSize: "20px",
        padding: "8px 20px 8px 20px",
      }}>
      {text}
    </Bootstrapbtn>
  );
}
