import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    borderTop: "1px dashed #bfbfbf",
    padding: "1rem",
    display: "inline-block",
    "@media (min-width: 992px)": {
      width: "40%",
      minHeight: "100px",
    },
  },
  chip: {
    display: "inline-block",
    margin: "0 0.5rem 0.5rem 0",
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  icon: {
    marginRight: "0.5rem",
    color: "black",
  },
  iconAlign: {
    verticalAlign: "middle",
  },
}));

const RepoCard = (props) => {
  const { item, language } = props;
  const classes = useStyles();
  const hasLanguages = Object.keys(item.languages).length === 0 ? false : true;

  return (
    <Grid className={classes.card}>
      <i className={[classes.icon, "fas fa-star"].join(" ")}></i> {item.stars}
      <a
        href={item.url}
        style={{ textDecoration: "none", color: "black" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bolder", wordBreak: "break-word" }}
        >
          {item.name}
        </Typography>
      </a>
      <Typography variant="body1" style={{ wordBreak: "break-word" }}>
        {item.description}
      </Typography>
      {hasLanguages ? (
        Object.keys(item.languages).map((lang, index) =>
          language[lang] ? (
            <Grid className={classes.chip} key={index}>
              <i
                className={[classes.icon, "fas fa-circle"].join(" ")}
                style={{ color: `${language[lang]}` }}
              ></i>
              {lang}
            </Grid>
          ) : null
        )
      ) : (
        <>
          <i
            className={[
              classes.icon,
              classes.iconAlign,
              "fas fa-times-circle",
            ].join(" ")}
          ></i>
          <span>no language detected</span>
        </>
      )}
    </Grid>
  );
};

RepoCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    stars: PropTypes.number,
    languages: PropTypes.object,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default RepoCard;
