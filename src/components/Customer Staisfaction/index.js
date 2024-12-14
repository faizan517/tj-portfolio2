import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fonts } from "../../utils/Fonts";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

const styles = {
  section: {
    // color: "#fff",
  },
  testimonialContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  imageContainer: {
    flexShrink: 0,
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  content: {
    flexGrow: 1,
    color: "#fff",
    fontFamily: "Urbanist, sans-serif",
  },
  quote: {
    fontSize: "20px",
    lineHeight: "46px",
    marginBottom: "20px",
    color: "black",
    textAlign: "left",
    fontWeight: 400,
    ...Fonts.Poppins,
  },
  highlight: {
    backgroundColor: "#C485F4",
    borderRadius: "4px",
    padding: "2px 4px",
  },
  name: {
    fontSize: "40px",
    fontWeight: 500,
    margin: "10px 0 5px",
    color: "black",
    ...Fonts.Poppins,
    textAlign: "left",
  },
  title: {
    fontSize: "18px",
    color: "black",
    ...Fonts.Poppins,
    // font-size: 18px,
    fontWeight: 500,
    // lineHeight: '27px',
    textAlign: "left",

    // text-underline-position: from-font,
    // text-decoration-skip-ink: none,
  },
};

const testimonials = [
  {
    image: person1, // Replace with actual image URL
    quote: (
      <>
        From his very first day at Careem (placed via VentureDive), it was clear
        Talal would drive step-change improvements in Careem’s design-led
        outcomes.{" "}
        <span style={styles.highlight}>
          He is user-centric by nature, has strong critical thinking, and
          engages actively in team critiques
        </span>{" "}
        and reviews always driving for bar-raising across the board. His
        contributions to the design team, and Careem product{" "}
        <span style={styles.highlight}>
          experiences still live on to this day! A great designer to add to any
          design team!
        </span>
      </>
    ),
    name: "Tiago Cabaço",
    title: "VP Design @Careem",
  },
  {
    image: person2, // Replace with actual image URL
    quote: (
      <>
        Talal is a creative out of the box thinker. He easily reflects his ideas
        to his designs and experiences he come up with. You can communicate with
        him openly.
        <span style={styles.highlight}>
          He always welcome the feedback and act upon it. His approaches while
          discussing with engineers were always to the point and constructive.
          He tries to understand the foundations and impact of the problem space
          and comes up with intuitive solutions.
        </span>{" "}
        I recommend him to any company.
      </>
    ),
    name: "Emre Barış Baki",
    title: "Senior Engineering Manager @Bayzat",
  },
  {
    image: person3, // Replace with actual image URL
    quote: (
      <>
        Talal is a talented product designer with a bright future ahead of him.
        <span style={styles.highlight}>
          He consistently delivers high-quality work and has a knack for finding
          creative solutions to complex design detail documentation problems.
        </span>
        I have no doubt that he has a lot of upside and would be an asset to any
        team.
      </>
    ),
    name: "Zain Adeel",
    title: "Director, Product Design @ Motive",
  },
];

const Satisfaction = () => {
  return (
    // <div style={styles.section}>
    <Container style={styles.section}>
      <p
        style={{
          ...Fonts.Poppins,
          fontSize: "56px",
          fontWeight: 400,
          lineHeight: "84px",
          textAlign: "center",
        }}
      >
        What My Colleagues Says About Me
      </p>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={4000}
        emulateTouch
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.testimonialContainer}>
            {/* Circular Image */}
            <div style={styles.imageContainer}>
              <img src={testimonial.image} alt="Profile" style={styles.image} />
            </div>

            {/* Testimonial Content */}
            <div style={styles.content}>
              <p style={styles.title}>{testimonial.title}</p>
              <p style={styles.name}>{testimonial.name}</p>
              <p style={styles.quote}>{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
    // </div>
  );
};

export default Satisfaction;
