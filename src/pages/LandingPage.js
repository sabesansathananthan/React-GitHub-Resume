import React, { Component } from "react";
import { SearchForm } from "../components";
import { Grid, withStyles, Typography } from "@material-ui/core";
import packageJson from "../../package.json";

const style = {
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
};

class Home extends Component {
  state = {
    username: "",
    validationError: false,
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.username.trim() !== "") {
      this.props.history.push("/user/" + this.state.username + "/resume");
    } else {
      this.setState({ validationError: true });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="home">
        <Grid
          container
          className={classes.container}
          style={{ flexDirection: "column" }}
        >
          <Typography variant="h5" align="center">
            React Github Resume {packageJson.version}
          </Typography>
          <Typography variant="body1" className="description" align="center">
            Please enter Github profile name with case sensitive
          </Typography>

          <SearchForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            validationError={this.state.validationError}
          />
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(Home);
