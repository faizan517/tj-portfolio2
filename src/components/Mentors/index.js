import ellipse1 from "@mui/icons-material/Star";
import ellipse2 from "@mui/icons-material/Star";
import puzzle from "@mui/icons-material/Star";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
const Frame = () => {
  return (
    <Box
      sx={{
        width: 1416,
        height: 1380,
        bgcolor: "black",
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 1304,
          height: 1333,
          position: "absolute",
          top: 47,
          left: 28,
        }}
      >
        <img
          style={{
            position: "absolute",
            width: 1166,
            height: 1161,
            top: 172,
            left: 138,
          }}
          alt="Ellipse"
          src={ellipse1}
        />
        <img
          style={{
            position: "absolute",
            width: 1304,
            height: 1259,
            top: 0,
            left: 0,
          }}
          alt="Ellipse"
          src={ellipse2}
        />
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            top: 8,
            left: 276,
            fontFamily: "Poppins, Helvetica",
            fontWeight: "normal",
            color: "white",
            textAlign: "center",
          }}
        >
          Design Mentor &amp; Leader
        </Typography>
        <img
          style={{
            position: "absolute",
            width: 152,
            height: 136,
            top: 573,
            left: 591,
          }}
          alt="Puzzle"
          src={puzzle}
        />
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: 528,
            top: 400,
            left: 500,
            fontFamily: "Poppins, Helvetica",
            fontWeight: "normal",
            color: "transparent",
            fontSize: 21,
            lineHeight: "38px",
          }}
        >
          <span style={{ fontWeight: "medium", color: "white" }}>
            I mentored new Product and UI/UX designers,
          </span>
          <span style={{ fontFamily: "Poppins, Helvetica", color: "#b6b6b6" }}>
            {" "}
            providing constructive feedback to{" "}
          </span>
          <span style={{ fontWeight: "medium", color: "white" }}>
            help them in improving their work, acquire new skills, and grow
            professionally.
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: 528,
            top: 968,
            left: 164,
            fontFamily: "Poppins, Helvetica",
            fontWeight: "normal",
            color: "transparent",
            fontSize: 21,
            lineHeight: "38px",
          }}
        >
          <span style={{ color: "#a7a7a7" }}>I helped the to </span>
          <span
            style={{
              fontFamily: "Poppins, Helvetica",
              fontWeight: "bold",
              color: "white",
            }}
          >
            recruit and interview for new Product Designers.
          </span>
          <span style={{ color: "#a7a7a7" }}>
            {" "}
            Actively worked on the improvement of our process
          </span>
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: 416,
            height: 498,
            top: 209,
            left: 52,
          }}
        >
          <Box sx={{ position: "relative", height: 498 }}>
            <Box
              sx={{
                position: "absolute",
                width: 242,
                height: 353,
                top: 0,
                left: 0,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  top: 290,
                  left: 15,
                  fontFamily: "Poppins, Helvetica",
                  fontWeight: "normal",
                  color: "white",
                  fontSize: "small",
                }}
              >
                Muhammad Zohaib
                <br />
                UX Designer
                <br />
                @VentureDive
              </Typography>
              <Paper
                sx={{
                  position: "absolute",
                  width: 240,
                  height: 280,
                  top: 0,
                  left: 0,
                  bgcolor: "#ffd997",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: 4,
                  borderColor: "white",
                  boxShadow: 3,
                }}
              >
                <Avatar
                  alt="Element"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: 240,
                height: 334,
                top: 164,
                left: 44,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  top: 292,
                  left: 3,
                  fontFamily: "Poppins, Helvetica",
                  fontWeight: "normal",
                  color: "white",
                  fontSize: "small",
                }}
              >
                Daria Kyselova
                <br />
                Product Designer @Ex Parle
              </Typography>
              <Paper
                sx={{
                  position: "absolute",
                  width: 240,
                  height: 280,
                  top: 0,
                  left: 0,
                  bgcolor: "#ce97ff",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: 4,
                  borderColor: "white",
                  boxShadow: 3,
                }}
              >
                <Avatar
                  alt="Element"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 416,
            height: 416,
            top: 837,
            left: 722,
          }}
        >
          <Box sx={{ position: "relative", height: 416 }}>
            <Box
              sx={{
                position: "absolute",
                width: 294,
                height: 262,
                top: 0,
                left: 0,
              }}
            >
              <Paper
                sx={{
                  position: "relative",
                  height: 262,
                  bgcolor: "#edeff1",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: 4,
                  borderColor: "white",
                  boxShadow: 3,
                }}
              >
                <Avatar
                  alt="Screenshot"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: 302,
                height: 262,
                top: 154,
                left: 114,
              }}
            >
              <Paper
                sx={{
                  position: "relative",
                  height: 262,
                  bgcolor: "#edeff1",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: 4,
                  borderColor: "white",
                  boxShadow: 3,
                }}
              >
                <Avatar
                  alt="Image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Frame;
