import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import BeerList from "../src/BeerList";

export default function Beers() {
  return (
    <Fragment>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Druhy piv
          </Typography>
          <Typography variant="body1" component="p">
            Data stažena ze serveru{" "}
            <a
              href="https://www.brewerydb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.brewerydb.com/
            </a>
          </Typography>
          <BeerList />
        </Box>
      </Container>
      <Copyright />
    </Fragment>
  );
}
