import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Text from "../../Components/Text/Text";
import CorpusChristiHooks from "./Img/Corpus-Christi-Hooks.png";
import GreenvilleDrive from "./Img/Greenville-Drive-1.png";
import houstontexans from "./Img/houston-texans.png";
import RiceOwls from "./Img/Rice_Owls.png";
import SouthernMissGoldenEagles from "./Img/Southern-Miss-Golden-Eagles.png";
import SugarLandSkeeters from "./Img/Sugar-Land-Skeeters.png";
const Partners = [
  {
    logo: <img style={{ maxWidth: "50%" }} src={CorpusChristiHooks} />,
  },
  {
    logo: <img style={{ maxWidth: "50%" }} src={GreenvilleDrive} />,
  },
  {
    logo: <img style={{ maxWidth: "50%" }} src={houstontexans} />,
  },
  {
    logo: <img style={{ maxWidth: "50%" }} src={RiceOwls} />,
  },
  {
    logo: <img style={{ maxWidth: "50%" }} src={SouthernMissGoldenEagles} />,
  },
  {
    logo: <img style={{ maxWidth: "50%" }} src={SugarLandSkeeters} />,
  },
];
export default function ClientPartners() {
  return (
    <>
      <Banner title="Clients & Partners" />

      <Container>
        <Row>
          <Row className="justify-content-center pt-5 pb-5 mt-5">
            <Col xl={6}>
              <div className="text-center">
                <Text
                  fontSize="25px"
                  text={
                    <>
                      Enjoy the sEATz experience at your next event with one of
                      our great clients!
                    </>
                  }
                />
                <div className="text-center justify-content-center pt-4">
                  <hr
                    style={{
                      width: "40%",
                      margin: "auto",
                      height: "3px",
                      color: "#ff761b",
                      opacity: "1",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
          {Partners.map(({ logo }) => {
            return (
              <>
                <Col xl={2}>
                  <div className="shadow text-center p-3">{logo}</div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>

      <Container>
        <Row>
          <Row className="justify-content-center pt-5 pb-5 mt-5">
            <Col xl={6}>
              <div className="text-center">
                <Text
                  fontSize="25px"
                  text={
                    <>
                      We partner with the best in the business to deliver
                      first-rate fan experiences
                    </>
                  }
                />
                <div className="text-center justify-content-center pt-4">
                  <hr
                    style={{
                      width: "40%",
                      margin: "auto",
                      height: "3px",
                      color: "#ff761b",
                      opacity: "1",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
          {Partners.map(({ logo }) => {
            return (
              <>
                <Col xl={2}>
                  {" "}
                  <div className="shadow text-center p-3">{logo}</div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Banner
        bottomBanner
        btnText="Contact US"
        title="Want to bring the sEATz platform to your venue?
"
      />
    </>
  );
}
