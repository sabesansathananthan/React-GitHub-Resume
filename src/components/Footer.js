import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

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
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      style={{ flexDirection: "column" }}
    >
      <Typography variant="h5" align="center">
        Created with care by{" "}
        <a
          href="https://github.com/sabesansathananthan/React-GitHub-Resume"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#29b6f6", textDecoration: "none" }}
        >
          Sabesan Sathananthan
        </a>
      </Typography>
      <Typography variant="body1" className="description" align="center">
        If you like this project don't forget to give{" "}
        <a
          href="https://github.com/sabesansathananthan/React-GitHub-Resume"
          className="octicon octicon-star"
          style={{ color: "#29b6f6" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Star
        </a>{" "}
        to this repository
      </Typography>
    </Grid>
  );
};

export default Footer;
