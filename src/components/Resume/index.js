import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import { LuDot } from "react-icons/lu";
import { Fonts } from "../../utils/Fonts";

const styles = {
  section: {
    padding: "60px 20px",
    display:'flex',
    justifyContent:'center'
  },
  heading: {
    fontSize: 72,
    fontFamily: "Crimson_Pro",
    fontWeight: "300",
    marginBottom: "20px",
    textAlign: "left",
  },
  subheading: {
    fontSize: "24px",
    fontWeight: "400",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  listItem: {
    marginBottom: "10px",
    textAlign: "left",
    ...Fonts.Poppins,
    fontWeight: 400,
    fontSize: 21,
  },
  title: {
    fontWeight: "400",
    marginBottom: "10px",
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: 56,
    ...Fonts.Poppins,
  },
  textBlock: {
    textAlign: "left",
    fontSize: 28,
    ...Fonts.Poppins,
    color: "rgba(168, 168, 168, 1)",
  },
  boldText: {
    fontWeight: "700",
    textAlign: "left",
    fontSize: 24,
    ...Fonts.Poppins,
  },
  textBlock: {
    textAlign: "left",
    fontSize: 28,
    ...Fonts.Poppins,
    color: "rgba(168, 168, 168, 1)",
  },
  smallText: {
    textAlign: "left",
    fontSize: 18,
    ...Fonts.Poppins,
    color: "rgba(168, 168, 168, 1)",
  },
  text: {
    textAlign: "left",
    fontSize: 18,
    ...Fonts.Poppins,
    fontWeight: "500",
  },
  spacer: {
    height: "100px",
    // backgroundColor: "black",
  },
};

function Portfolio() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.spacer}></div>
        <Row>
          <Col md={12} lg={9}>
            <h1 style={{ ...styles.heading, fontSize: isMobile ? 42 : 72 }}>
              Hey, I’m Talal. I love solving complex problems
            </h1>
            <Col md={12} lg={12} className="mt-5">
              <p style={{ ...styles.textBlock, fontSize: isMobile ? 20 : 24 }}>
                Currently I work with Bayzat where my focus is to ship features
                to simplify attendance management, employee onboarding, and
                payroll integration in UAE & KSA.
              </p>
            </Col>
            <Col className="mt-5" md={12} lg={12}>
              <p style={{ ...styles.textBlock, fontSize: isMobile ? 20 : 24 }}>
                I crack the code on user & business problems with data-driven
                insights, through experimentation and iterative learning. I'm
                focused on designing solutions that leave a long-lasting impact.
              </p>
            </Col>
            <Col className="mt-5" md={12} lg={12}>
              <p
                style={{
                  ...styles.textBlock,
                  fontSize: isMobile ? 20 : 24,
                  marginBottom: 50,
                }}
              >
                Outside of work, I enjoy playing Counterstrike 1.6, watching
                anime series, and spending time with my pets.
              </p>
            </Col>
          </Col>
        </Row>
        <div style={styles.spacer}></div>

        {/* Experience Section */}
        <Row>
          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? 25 : 32,
              marginBottom: 50,
            }}
          >
            Experience
          </h2>
          <Col md={12} lg={12}>
            <Row style={{ marginBottom: 50 }}>
              <Col md={4} style={{ textAlign: "left" }}>
                <p style={{ ...styles.text, fontSize: isMobile ? 15 : 18 }}>
                  BAYZAT (UAE)
                </p>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Senior Product Designer
                </p>
                <p
                  style={{
                    ...styles.boldText,
                    fontSize: isMobile ? 19 : 24,
                    lineHeight: "0.5",
                  }}
                >
                  (HR & Payroll)
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  2023 - Present
                </p>
              </Col>
              <Col md={8}>
                <ul>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Enhanced the capabilities of the attendance management
                    feature making it 100% labor law compliant for K.S.A and
                    U.A.E.
                  </li>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Retained AED 460K (per month) worth of clients by meeting
                    labor law requirements.
                  </li>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Increased the new lead closure rate by~37.4%.
                  </li>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Increased the new deal size by ~160%.
                  </li>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Facilitates design system team by providing constructive
                    feedback and improved the component stability.
                  </li>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Introduce Mudad in KSA for smooth payroll processing.
                  </li>
                  <li
                    style={{ ...styles.listItem, fontSize: isMobile ? 18 : 24 }}
                  >
                    Led workflow management designs.
                  </li>

                  {/* Additional experience points here */}
                </ul>
              </Col>
              <div style={styles.spacer}></div>
            </Row>
            <Row style={{ marginBottom: 50 }}>
              <Col md={12} lg={12}>
                <Row>
                  <Col md={4} style={{ textAlign: "left" }}>
                    <p style={{ ...styles.text, fontSize: isMobile ? 15 : 18 }}>
                      AHOY (UAE)
                    </p>
                    <p
                      style={{
                        ...styles.boldText,
                        fontSize: isMobile ? 19 : 24,
                      }}
                    >
                      Senior Product Designer
                    </p>
                    <p
                      style={{
                        ...styles.boldText,
                        fontSize: isMobile ? 19 : 24,
                        lineHeight: "0.5",
                      }}
                    >
                      (Fly+)
                    </p>

                    <p
                      style={{
                        ...styles.smallText,
                        fontSize: isMobile ? 15 : 18,
                      }}
                    >
                      2022 - 2023
                    </p>
                  </Col>
                  <Col md={8}>
                    <ul>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Led the collaboration with CX and ops teams.
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Led the product design life-cycle phases, from planning
                        and designing to deployment and QA.
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Led design system team.
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Sold a white label version of fly+ in SAR 50M.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div style={styles.spacer}></div>

            <Row>
              <Col md={12} lg={12}>
                <Row style={{ marginBottom: 50 }}>
                  <Col md={4} style={{ textAlign: "left" }}>
                    <p style={{ ...styles.text, fontSize: isMobile ? 15 : 18 }}>
                      Careem (via VentureDive)
                    </p>
                    <p
                      style={{
                        ...styles.boldText,
                        fontSize: isMobile ? 19 : 24,
                      }}
                    >
                      Product Designer
                    </p>
                    <p
                      style={{
                        ...styles.boldText,
                        fontSize: isMobile ? 19 : 24,
                        lineHeight: "0.5",
                      }}
                    >
                      (Growth & acquisition)
                    </p>
                    <p
                      style={{
                        ...styles.smallText,
                        fontSize: isMobile ? 15 : 18,
                      }}
                    >
                      2020 - 2022
                    </p>
                  </Col>
                  <Col md={8}>
                    <ul>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Re-designed the incentives/bonus feature from scratch.
                        <section style={{ lineHeight: "1", paddingTop: 20 }}>
                          <p>
                            <LuDot />
                            Introduced three new types of incentives for
                            captains,which will boost their weekly income by
                            24%.
                          </p>
                          <p>
                            <LuDot />
                            Increased participation rate in each campaign by
                            8.3%.
                          </p>
                          <p>
                            <LuDot />
                            Increased retention rate by 17.3%.
                          </p>
                        </section>
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Re-designed the captains' referral program from scratch.
                        <section style={{ lineHeight: "1", paddingTop: 20 }}>
                          <p>
                            <LuDot /> Increase the referral rate by 35%.
                          </p>
                          <p>
                            <LuDot />
                            Increase the retention rate of Careem ambassadors in
                            KSA and Egypt by 11%.{" "}
                          </p>
                        </section>
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Worked on the designs of the background tool (BLUE) used
                        by the business team to setup campaigns.
                        <section style={{ lineHeight: "1", paddingTop: 20 }}>
                          <p>
                            <LuDot />
                            Added new capabilities to the tool to set up more
                            effective campaigns for businesses.
                          </p>
                          <p>
                            <LuDot />
                            Improved the overall user experience.{" "}
                          </p>
                        </section>
                      </li>
                    </ul>
                  </Col>
                </Row>
                {/* Repeat similar structure for other experiences */}
              </Col>
            </Row>
            <div style={styles.spacer}></div>

            <Row style={{ marginBottom: 50 }}>
              <Col md={12} lg={12}>
                <Row>
                  <Col md={4} style={{ textAlign: "left" }}>
                    <p style={{ ...styles.text, fontSize: isMobile ? 15 : 18 }}>
                      VentureDive
                    </p>
                    <p
                      style={{
                        ...styles.boldText,
                        fontSize: isMobile ? 19 : 24,
                      }}
                    >
                      Senior UX Designer
                    </p>
                    <p
                      style={{
                        ...styles.smallText,
                        fontSize: isMobile ? 15 : 18,
                      }}
                    >
                      2019 - 2022
                    </p>
                  </Col>
                  <Col md={8}>
                    <ul>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Mentor junior and mid level designers.{" "}
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Recruiting/interviewing new UX and product designer
                        designers.
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Worked on Ethr design system (VentureDive Product).
                      </li>
                      <li
                        style={{
                          ...styles.listItem,
                          fontSize: isMobile ? 18 : 24,
                        }}
                      >
                        Allocated to design ops team of Motive (formerly known
                        as KeepTruckin) where my role is to:
                        <section style={{ lineHeight: "1", paddingTop: 20 }}>
                          <p>
                            <LuDot />
                            Improve design system.
                          </p>
                          <p>
                            <LuDot />
                            Design documentation.
                          </p>
                          <p>
                            <LuDot />
                            Design hand-off process.
                          </p>
                        </section>
                      </li>
                    </ul>
                  </Col>
                </Row>
                {/* Repeat similar structure for other experiences */}
              </Col>
            </Row>
            {/* Repeat similar structure for other experiences */}
          </Col>
        </Row>
        <div style={styles.spacer}></div>

        {/* Education Section */}
        <Row>
          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? 25 : 32,
              marginBottom: 50,
            }}
          >
            Education
          </h2>
          <Col md={12}>
            <Row style={{ marginBottom: 50 }}>
              <Col md={6} style={{ textAlign: "left" }}>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Product Strategy Certification
                </p>
                <p
                  style={{
                    ...styles.boldText,
                    fontSize: isMobile ? 19 : 24,
                    lineHeight: "0.5",
                  }}
                >
                  (PSC)<span style={{ fontSize: 10 }}>TM</span>
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  Product School
                </p>
              </Col>
              <Col md={6} lg={4}>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Master Digital Product Design: UX Research & UI Design
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  Udemy
                </p>
              </Col>
            </Row>
            {/* Repeat for other education points */}
          </Col>
          <Col md={12}>
            <Row style={{ marginBottom: 50 }}>
              <Col md={6} style={{ textAlign: "left" }}>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Product Led Certification
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  Pendo.io
                </p>
              </Col>
              <Col md={6} lg={4}>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Design and Design Thinking
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  Back2Back Research
                </p>
              </Col>
            </Row>
            {/* Repeat for other education points */}
          </Col>
        </Row>
        <div style={styles.spacer}></div>
        {/* Awards & Achievements Section */}
        <Row>
          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? 25 : 32,
              marginBottom: 50,
            }}
          >
            Awards & Achievements
          </h2>
          <Col md={12}>
            <Row>
              <Col md={6}>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Most Valuable Design
                </p>
                <p
                  style={{
                    ...styles.boldText,
                    fontSize: isMobile ? 19 : 24,
                    lineHeight: "0.5",
                  }}
                >
                  (MVP-2021)
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  VentureDive
                </p>
              </Col>
              <Col md={6} lg={4}>
                <p style={{ ...styles.boldText, fontSize: isMobile ? 19 : 24 }}>
                  Webinar on Micro-interactions Using Invision Studio
                </p>
                <p
                  style={{ ...styles.smallText, fontSize: isMobile ? 15 : 18 }}
                >
                  VentureDive
                </p>
              </Col>
            </Row>
            {/* Repeat for other awards */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
