import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

export default function Index() {
  return (
    <Fragment>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            DVOP3 | Webové aplikace 2
          </Typography>
          <Typography variant="h5">tvorba moderní webové aplikace</Typography>
          <Typography>
            Ukázková aplikace pro DVOP3 školní rok 2021/22. Podobné aplikace
            budeme tvořit na hodinách
          </Typography>
        </Box>
      </Container>
      <Copyright />
    </Fragment>
  );
}
