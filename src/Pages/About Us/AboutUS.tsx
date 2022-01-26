import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/card/Card";
import Text from "../../Components/Text/Text";
import i from "./Img/SEATZ_VALUES_ICONS-lead.png";
const card = [
  {
    title: <>LEAD with GRIT</>,
    text: (
      <>
        To succeed, we not only have to lead by example, but set the example of
        mental toughness to keep trying in the face of challenges while keeping
        passion for the work we do. Always be willing to experiment and take
        risks, while also being transparent about the struggles and share
        failures so they can be used by the organization as an opportunity to
        thrive in the future.
      </>
    ),
    icon: i,
  },
  {
    title: <>PERFORM with AGILITY</>,
    text: (
      <>
        The ability for an organization to cope with today’s turbulent
        customer-driven marketplace enables our organization to master and
        harness continuous change. It permits sEATz to flourish in an
        increasingly volatile, uncertain, complex and ambiguous environment with
        the goal of building competitive advantage. <br />
      </>
    ),
    icon: i,
  },
  {
    title: <>COMMIT to EXCELLENCE</>,
    text: (
      <>
        Making every moment count as each day is an open opportunity for
        mastering skills and furthering goals. Acknowledging success often comes
        down to having the right attitude and smart decision making. <br />{" "}
        <br />
      </>
    ),
    icon: i,
  },
  {
    title: <>CREATE OPPORTUNITY</>,
    text: (
      <>
        The entrepreneurial mindset that is marked by imagination, initiative
        and readiness to undertake new projects through perseverance and
        determination, risk-taking and daring, integrity and honesty. Aim to
        change the world in concrete ways through their inventions, our
        businesses, and, social and economic impacts.
      </>
    ),
    icon: i,
  },
  {
    title: <>SERVE with POSITIVE ENERGY</>,
    text: (
      <>
        This allows us to achieve our greatest potential in business by learning
        to monitor one’s own attitude and its impact on work performance,
        relationships and everyone around you. We all have a choice and
        can/should choose an inner dialogue of self-encouragement and
        self-motivation.
      </>
    ),
    icon: i,
  },
];
export default function AboutUs() {
  return (
    <>
      <Banner title="About US" />
      <Container className="mt-5">
        <div className=" pt-5 mt-5">
          <Text bold fontSize="35px" text={<>Our VAlues</>} />
          <hr
            style={{
              color: "#ff761b",
              width: "150px",
              height: "2px",
              opacity: "1",
            }}
          />
        </div>
        <Row className="">
          {card.map(({ text, title, icon }) => {
            return (
              <>
                <Col lg={6} md={12} sm={12} xs={12} className="pt-5">
                  <div className="shadow p-3">
                    <Card text={text} title={title} secondaryCard icon={icon} />
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Banner
        bottomBanner
        title="Like what we're doing?
"
        btnText="
Let's do business together!"
      />
    </>
  );
}
