import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  container: {
    background: "linear-gradient(to bottom, #05011b, #0f0828)",
    borderRadius: "20px",
    // padding: "80px 50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    width:'99%',
    height:'100vh',
    marginTop: "12px",
  },
  leftColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "30px",
  },
  role: {
    fontSize: "18px",
    color: "#C2C2C2",
    letterSpacing: "2px",
    marginBottom: "20px",
    textAlign: "left",
  },
  name: {
    fontSize: "70px",
    fontWeight: "600",
    lineHeight: "1.1",
    marginBottom: "20px",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "left",
  },
  bio: {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#C2C2C2",
    maxWidth: "500px",
    textAlign: "left",
  },
  highlight: {
    fontWeight: "600",
    color: "#FFFFFF",
  },
  divider: {
    width: "1px",
    backgroundColor: "#444",
    height: "100%",
    margin: "0 30px",
  },
  rightColumn: {
    flex: "0 0 300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    marginBottom: "20px",
  },
  tagline: {
    fontSize: "14px",
    textTransform: "uppercase",
    color: "#C2C2C2",
    textAlign: "center",
    marginTop: "10px",
  },
};

const Introduction = () => {
  return (
    <Container fluid style={styles.container}>
      {/* Left Column */}
      <div
        style={{
        //   width: "50vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        //   backgroundColor:'red'
        }}
      >
        <div style={styles.leftColumn}>
          <div style={styles.role}>SENIOR PRODUCT DESIGNER</div>
          <div style={styles.name}>M. Talal Jawaid</div>
          <div style={styles.bio}>
            Currently simplifying work-life for employers at{" "}
            <span style={styles.highlight}>BAYZAT</span>. Originally from
            Karachi, Pakistan{" "}
            <span style={styles.highlight}>now based in Dubai, U.A.E.</span>
          </div>
        </div>

        
        {/* Right Column */}
        <div style={styles.rightColumn}>
          <img
            src={require("../../assets/images/image.png")}
            alt="Profile"
            style={styles.image}
          />
          <div style={styles.tagline}>
            A blend of visual mindset and a passion to simplicity
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
