import React, { Component } from "react";
import { UserProfile, Loader } from "../components";
import { Grid } from "@material-ui/core";
import Axios from "axios";

const GITHUB_API_USER = "https://api.github.com/users/";

export default class Resume extends Component {
  state = {
    data: null,
    isFetching: false,
    language: [],
  };

  async componentDidMount() {
    const { username } = this.props.match.params;
    this.setState({ isFetching: true });

    try {
      const userData = await this.fetchUserData(username);
      const userRepos = await this.fetchUserRepos(username);
      this.setState({
        data: { ...userData, repositories: userRepos },
        isFetching: false,
      });
    } catch (err) {
      this.props.history.push({
        pathname: "/404-not-found",
        state: {
          user: this.props.match.params.username,
          error: err.message,
        },
      });
    }
    let lang = {};
    //Cached language data
    if (localStorage.getItem("lang")) {
      lang.data = JSON.parse(localStorage.getItem("lang"));
    } else {
      localStorage.clear();
      lang = await Axios.get("https://github-lang-deploy.herokuapp.com/lang");
      localStorage.setItem("lang", JSON.stringify(lang.data));
    }
    this.setState({ language: lang.data });
  }

  fetchUserData(username) {
    return Axios.get(GITHUB_API_USER + username)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  fetchUserRepos(username) {
    return Axios.get(GITHUB_API_USER + username + "/repos")
      .then((response) => this.fetchReposLanguages(response.data))
      .catch((error) => Promise.reject(error));
  }
  comapare(a, b) {
    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;
    else if ((a.stargazers_count = b.stargazers_count)) {
      if (a.forks_count > b.forks_count) return -1;
      else if (a.forks_count < b.forks_count) return 1;
      else return 0;
    }
  }

  fetchReposLanguages(repositories) {
    repositories.sort(this.comapare);
    return Promise.all(
      repositories.map((repo) =>
        Axios.get(repo.languages_url).then((repoLanguages) => {
          return {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            languages: repoLanguages.data,
            stars: repo.stargazers_count,
            watchers: repo.watchers_count,
          };
        })
      )
    );
  }

  render() {
    const { username } = this.props.match.params;
    const { data, isFetching, language } = this.state;
    if (!isFetching && data) {
      return (
        <Grid id="resume">
          <UserProfile data={data} username={username} language={language} />
        </Grid>
      );
    } else {
      return <Loader />;
    }
  }
}
