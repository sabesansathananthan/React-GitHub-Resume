import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "80%",
    margin: "2rem auto",
    padding: "1rem",
    background: "white",
    borderRadius: "10px",
    "@media (min-width: 992px)": {
      maxWidth: "800px",
    },
  },
  spinner: {
    display: "block",
    margin: "0 auto",
    width: "64px",
    height: "64px",
    "&:after": {
      content: '" "',
      display: "block",
      width: "46px",
      height: "46px",
      margin: "1px",
      borderRadius: "50%",
      border: "5px solid #000000",
      borderColor: "#000000 transparent #000000 transparent",
      animationName: "$spin",
      animationDuration: "1.2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.spinner}></Grid>
    </Grid>
  );
};

export default Loader;
