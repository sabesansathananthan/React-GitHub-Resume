import React from "react";
import Proptypes from "prop-types";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "80%",
    margin: "2rem auto",
    padding: "1rem",
    background: "white",
    borderRadius: "10px",
    textAlign: "center",
    "@media (min-width: 992px)": {
      maxWidth: "800px",
    },
  },
}));

const NotFoundPage = (props) => {
  const { location } = props;

  setTimeout(() => {
    props.history.push("/");
  }, 1500);

  const classes = useStyles();

  return (
    <Grid id="not-found">
      <Grid className={classes.container}>
        <i className="far fa-meh fa-4x"></i>
        <Typography variant="h3">
          404 - {location && location.state ? location.state.error : ""}
        </Typography>
        <br />
      </Grid>
    </Grid>
  );
};

NotFoundPage.propTypes = {
  location: Proptypes.object.isRequired,
};

export default NotFoundPage;
