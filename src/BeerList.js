import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import data from "./Utils/data";
import BeerCard from "./BeerCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "4rem 0",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function BeerList() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {data.map((value) => (
            <Grid key={value} item>
              <BeerCard title={value.title} desc={value.desc} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
