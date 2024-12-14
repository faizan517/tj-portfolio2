import { Box, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "../../utils/Fonts";

const styles = {
  heading: {
    fontSize: 16,
    ...Fonts.Poppins,
    color: "#515151",
    textAlign: "center",
  },
};
const Companies = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent={"center"} gap={5} padding={5}>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{
          fontFamily: "Poppins, Helvetica",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: "38px",
        }}
      >
        I had worked with teams at:
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        gap={10}
      >
        <img src={require("../../assets/images/careem.png")} />
        <img src={require("../../assets/images/ventureDive.png")} />
        <img src={require("../../assets/images/tezFinancials.png")} />
        <img src={require("../../assets/images/Motive.png")} />
      </Box>
    </Box>
  );
};

export default Companies;
