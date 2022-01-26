import react from "react";
import { brotliDecompress } from "zlib";
interface Itext {
  text?: any;
  bold?: boolean;
  medium?: boolean;
  black?: boolean;
  fontSize?:
    | "60px"
    | "35px"
    | "45px"
    | "25px"
    | "20px"
    | "18px"
    | "16px"
    | "15px";
  //   color?: "white" | "black" | "#ff761b";
  white?: boolean;
  orange?: boolean;
  nextText?: any;
  className?: string;
}
export default function Text({
  text,
  bold,
  medium,
  black,
  fontSize,
  white,
  orange,
  nextText,
  className,
}: Itext) {
  return (
    <>
      <h1
        className={className}
        style={{
          color: white ? "white" : orange ? "#ff761b" : "black",
          fontSize,
          fontFamily: bold
            ? "Roboto-Bold"
            : medium
            ? "Roboto-Medium"
            : black
            ? "Roboto-Black"
            : "Roboto-Regular",
        }}>
        {text}
        <br />
        {nextText}
      </h1>
    </>
  );
}
