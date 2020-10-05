import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RepoCard } from "./index";
import { makeStyles, Grid, Avatar, Typography } from "@material-ui/core";

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
  avatar: {
    borderRadius: "100%",
    maxWidth: "150px",
    maxHeight: "150px",
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  blockFlex: {
    "@media (min-width: 992px)": {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  blockFlexRepo: {
    "@media (min-width: 992px)": {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
  },
  blockItem: {
    padding: "0 1rem",
  },
  info: {
    margin: "2rem 0",
  },
}));

const UserProfile = (props) => {
  const { username, language } = props;
  const {
    name,
    bio,
    location,
    company,
    login,
    avatar_url,
    repositories,
  } = props.data;
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Link to="/" className="link--back">
        <i className="icon fas fa-chevron-left fa-2x"></i>
      </Link>
      <Grid className={classes.blockFlex}>
        <Avatar alt="avatar" src={avatar_url} className={classes.avatar} />
        <Grid className={classes.blockItem}>
          {name ? (
            <Typography variant="body1" paragraph>
              <i className="icon fas fa-user"></i> {name}
            </Typography>
          ) : null}
          {login ? (
            <Typography variant="body1" paragraph>
              <i className="icon fab fa-github"></i> {login}
            </Typography>
          ) : null}
          {bio ? (
            <Typography variant="body1" paragraph>
              <i className="icon fas fa-book"></i> {bio}
            </Typography>
          ) : null}
          {location ? (
            <Typography variant="body1" paragraph>
              <i className="icon fas fa-map-marker-alt"></i>
              {location}
            </Typography>
          ) : null}
          {company ? (
            <Typography variant="body1" paragraph>
              <i className="icon far fa-building"></i>
              {company}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
      <br />
      <Grid className={classes.blockFlexRepo}>
        {repositories.length > 0 ? (
          repositories.map((repo, index) => (
            <RepoCard item={repo} key={index} language={language} />
          ))
        ) : (
          <Grid className={classes.info}>
            <i className="icon fas fa-info-circle"></i>
            <span>{username} does not has any repositories</span>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

UserProfile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserProfile;
