import React from "react";
import { Box, Typography, Button, Link,  } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Fonts } from "../../utils/Fonts";
import vector from "../../assets/images/Vector.png";
import { Container } from "react-bootstrap";
const styles = {
  heading: {
    fontWeight: 600,
    lineHeight: "16px",
    textAlign: "center",
    ...Fonts.Poppins,
  },
};
function Footer() {
  return (
    <Container fluid
      style={{
        borderRadius: "50px",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
        // py: 10,
        // mt: 4,
        backgroundImage: `url(${vector})`,
        padding:10,
    width:'99%',

        // marginRight:10,
        // marginLeft:10
      }}
    >
        <div style={{display:'flex',justifyContent:'center'}}>
      {/* Heading */}
      <Typography
        sx={{
          mb: 4,
          fontSize: "56px",
          fontWeight: 400,
          lineHeight: "84px",
          textAlign: "center",
          ...Fonts.Poppins,
          maxWidth:'800px',
          display: "flex",
          alignSelf: "center",
        }}
      >
        You Have a New Interesting Challenge or Opportunity! Let’s Discuss it
      </Typography>
        </div>

      {/* Email Section */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="subtitle1"
          style={{ ...Fonts.Poppins, fontSize: 16, fontWeight: 600 }}
        >
          Email
        </Typography>
        <Typography
          variant="body1"
          style={{ ...styles.heading, fontSize: 24, fontWeight: 400 }}
        >
          <Link
            href="mailto:talal.jawaid94@gmail.com"
            underline="none"
            color="inherit"
          >
            talal.jawaid94@gmail.com
          </Link>
        </Typography>
      </Box>

      {/* Social Links */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="subtitle1"
          style={{ ...Fonts.Poppins, fontSize: 16, fontWeight: 600 }}
        >
          Social
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 1,
            ...Fonts.Poppins,
            fontSize: 24,
          }}
        >
          <Link href="#" underline="none" color="inherit">
            LinkedIn
          </Link>
          <Link href="#" underline="none" color="inherit">
            Behance
          </Link>
          <Link href="#" underline="none" color="inherit">
            Dribbble
          </Link>
          <Link href="#" underline="none" color="inherit">
            Medium
          </Link>
        </Box>
      </Box>

      {/* Download Resume Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "50px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
        endIcon={<ArrowOutwardIcon />}
      >
        Download Resume
      </Button>
    </Container>
  );
}

export default Footer;
