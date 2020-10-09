import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  makeStyles,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    margin: "1.5rem 0",
    height: "30px",
    width: "100%",
    maxWidth: "300px",
    fontSize: "0.9rem",
  },
  button: {
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#29b6f6",
    height: "36px",
    padding: "0 1.5rem",
    marginLeft: "0.5rem",
  },
  validationTypo: {
    color: "red",
    fontSize: "0.9rem",
  },
  icon: {
    marginRight: "0.5rem",
    color: "black",
  },
}));

const SearchForm = (props) => {
  const classes = useStyles();

  return (
    <Grid style={{ textAlign: "center" }}>
      <form onSubmit={props.handleSubmit}>
        <FormControl className="form">
          <Grid className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="username"
                  label="Github username"
                  onChange={props.handleChange}
                  placeholder="type your github username"
                  type="text"
                  className={classes.textField}
                />
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={props.handleSubmit}
              >
                Generate
              </Button>
            </Grid>
          </Grid>
          {props.validationError ? (
            <Typography className={classes.validationTypo} variant="body1">
              <i
                className={[classes.icon, "fas fa-exclamation-circle"].join(
                  " "
                )}
                style={{ color: "red" }}
              ></i>
              Username is required
            </Typography>
          ) : null}
        </FormControl>
      </form>
    </Grid>
  );
};

SearchForm.propTypes = {
  validationError: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
