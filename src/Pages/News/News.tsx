import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/card/Card";
import Text from "../../Components/Text/Text";
import img from "./Img/article1-400x250.png";
const featuredStories = [
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
  },
];
const latestNews = [
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
    text: (
      <>
        When sEATz launched, the startup was looking to provide a way for sports
        fans to order their beer and hotdog to their seat without having to miss
        a moment of a game. Over the years, the Houston company has expanded its
        technology to be a reliable platform for mobile...
      </>
    ),
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
    text: (
      <>
        When sEATz launched, the startup was looking to provide a way for sports
        fans to order their beer and hotdog to their seat without having to miss
        a moment of a game. Over the years, the Houston company has expanded its
        technology to be a reliable platform for mobile...
      </>
    ),
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
    text: (
      <>
        When sEATz launched, the startup was looking to provide a way for sports
        fans to order their beer and hotdog to their seat without having to miss
        a moment of a game. Over the years, the Houston company has expanded its
        technology to be a reliable platform for mobile...
      </>
    ),
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
    text: (
      <>
        When sEATz launched, the startup was looking to provide a way for sports
        fans to order their beer and hotdog to their seat without having to miss
        a moment of a game. Over the years, the Houston company has expanded its
        technology to be a reliable platform for mobile...
      </>
    ),
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
    text: (
      <>
        When sEATz launched, the startup was looking to provide a way for sports
        fans to order their beer and hotdog to their seat without having to miss
        a moment of a game. Over the years, the Houston company has expanded its
        technology to be a reliable platform for mobile...
      </>
    ),
  },
  {
    date: "Nov 1, 2020",
    title: "Optimizing Labor Cost at Sports Venues",
    text: (
      <>
        When sEATz launched, the startup was looking to provide a way for sports
        fans to order their beer and hotdog to their seat without having to miss
        a moment of a game. Over the years, the Houston company has expanded its
        technology to be a reliable platform for mobile...
      </>
    ),
  },
];
export default function News() {
  return (
    <>
      <Banner title="In The News" />

      <Container className=" pt-5">
        <div className="pb-3 pt-5">
          <Text bold fontSize="35px" text={<>FEATURED STORIES</>} />
          <hr
            style={{
              color: "#ff761b",
              width: "250px",
              height: "2px",
              opacity: "1",
            }}
          />
        </div>

        <Row>
          {featuredStories.map(({ date, title }) => {
            return (
              <>
                <Col lg={4} md={6} sm={6} xs={12} className="pt-2">
                  <Card img={img} date={date} title={title} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Container className=" pt-5">
        <div className="pb-3 pt-5">
          <Text bold fontSize="35px" text={<>LATEST NEWS</>} />
          <hr
            style={{
              color: "#ff761b",
              width: "250px",
              height: "2px",
              opacity: "1",
            }}
          />
        </div>

        <Row>
          {latestNews.map(({ date, title, text }) => {
            return (
              <>
                <Col lg={4} md={6} sm={6} xs={12} className="pt-4">
                  <Card img={img} date={date} title={title} text={text} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Banner
        bottomBanner
        title="Learn how sEATz can transform your venue "
        btnText="Contact Us"
      />
    </>
  );
}
