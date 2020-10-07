import React, { useEffect, useState } from 'react';
import { Grid, InputLabel, makeStyles, Select, MenuItem } from "@material-ui/core";

import i18n from '../i18n';

import languages from '../constants/languages';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "80%",
    margin: "2rem auto",
    padding: "1rem",
    borderRadius: "10px",
    "@media (min-width: 992px)": {
      maxWidth: "800px",
    },
  },
  languageWrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  languageLabel: {
    marginRight: '8px'
  }
}));

const Header = () => {
  const classes = useStyles();
  const [languageCode, setLanguageCode] = useState('en');

  const handleChangeLanguage = ({ target: { value } }) => {
    setLanguageCode(value);
    i18n.changeLanguage(value);

    if (
      window
      && window.localStorage
    ) {
      window.localStorage.setItem('REACT_GITHUB_PROFILE_LANG', value);
    }
  }

  useEffect(() => {
    if (
      window
      && window.localStorage
    ) {
      const lang = window.localStorage.getItem('REACT_GITHUB_PROFILE_LANG');
      setLanguageCode(lang || 'en');
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(languageCode);
  }, [languageCode]);

  return (
    <Grid
      container
      className={classes.container}
    >
      <Grid
        className={classes.languageWrapper}
      >
        <InputLabel
          id="demo-simple-select-label"
          className={classes.languageLabel}
        >
            Languages
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={languageCode}
          onChange={handleChangeLanguage}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            languages.length > 0
            ?
              languages.map((item, index) => {
                return (
                  <MenuItem
                    key={index.toString()}
                    value={item.code}
                  >
                    {item.nativeName}
                  </MenuItem>
                )
              })
            : null
          }
        </Select>
      </Grid>
    </Grid>
  )
};

export default Header;
