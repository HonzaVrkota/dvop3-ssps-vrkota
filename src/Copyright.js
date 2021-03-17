import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#023f6b",
    padding: "1rem 0",
  },
  text: {
    color: "#ffffff",
  },
});

export default function Copyright() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      variant="primary"
      position="fixed"
      bottom={0}
      width="100vw"
    >
      <Typography variant="body2" align="center" className={classes.text}>
        {"Copyright © "}
        <MuiLink color="inherit" href="https://material-ui.com/">
          SSPŠ - Jan Vrkota
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
