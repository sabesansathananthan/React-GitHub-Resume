import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RepoCard, Footer } from "./index";
import { makeStyles, Grid, Avatar, Typography } from "@material-ui/core";
import DownloadPdf from "./DownloadPdf";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "80%",
    margin: "2rem auto",
    padding: "1rem",
    background: "white",
    borderRadius: "0 0 10px 10px",
    "@media (min-width: 992px)": {
      maxWidth: "800px",
    },
  },
  buttonContainer: {
    maxWidth: "80%",
    margin: "2rem auto -2rem auto",
    padding: "1rem",
    background: "white",
    borderRadius: "10px 10px 0 0",
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
    width: "80%",
    "@media (min-width: 992px)": {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "800px",
    },
  },
  blockFlexRepo: {
    width: "80%",
    "@media (min-width: 992px)": {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      alignItems: "flex-start",
      width: "800px",
    },
  },
  blockItem: {
    padding: "0 1rem",
  },
  info: {
    margin: "2rem 0",
  },
  icon: {
    marginRight: "0.5rem",
    color: "black",
    '@media print': {
      display: 'none'
    }
  },
  wrapper: {
    display: 'flex',
    width: "100%",
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: "flex-end",
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: "flex-start",
    width: "100%",
  }
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
  const ref = React.createRef();
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <React.Fragment>
      <Grid container className={classes.buttonContainer}>
        <div className={classes.wrapper}>
          <div className={classes.iconWrapper}>
            <Link to="/" className="link--back">
              <i
                className={[classes.icon, "fas fa-chevron-left fa-2x"].join(" ")}
              ></i>
            </Link>
          </div>
          <div className={classes.buttonWrapper}>
            <DownloadPdf resume={ref} height={height} />
          </div>
        </div>
      </Grid>

      <Grid container className={classes.container} ref={ref}>
        <Grid className={classes.blockFlex}>
          <Grid className={classes.blockItem}>
            <Avatar alt="avatar" src={avatar_url} className={classes.avatar} />
          </Grid>
          <Grid className={classes.blockItem}>
            {name ? (
              <Typography variant="body1" paragraph>
                <i className={[classes.icon, "fas fa-user"].join(" ")}></i>{" "}
                {name}
              </Typography>
            ) : null}
            {login ? (
              <Typography variant="body1" paragraph>
                <i className={[classes.icon, "fab fa-github"].join(" ")}></i>{" "}
                {login}
              </Typography>
            ) : null}
            {bio ? (
              <Typography variant="body1" paragraph>
                <i className={[classes.icon, "fas fa-book"].join(" ")}></i>{" "}
                {bio}
              </Typography>
            ) : null}
            {location ? (
              <Typography variant="body1" paragraph>
                <i
                  className={[classes.icon, "fas fa-map-marker-alt"].join(" ")}
                ></i>
                {location}
              </Typography>
            ) : null}
            {company ? (
              <Typography variant="body1" paragraph>
                <i className={[classes.icon, "far fa-building"].join(" ")}></i>
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
              <i className={[classes.icon, "fas fa-info-circle"].join(" ")}></i>
              <span>{username} does not has any repositories</span>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

UserProfile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserProfile;
