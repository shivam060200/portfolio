import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    projects: [],

    recommendations: [],
    skills: [],
  };

  async componentDidMount() {
    const [
      responseRecommendations,
      responseSkills,
      responseProjects,
    ] = await Promise.all([
      axios.get("http://laptop-v3t0v29o:9000/api/recommendations"),
      axios.get("http://laptop-v3t0v29o:9000/api/skills"),
      axios.get("http://laptop-v3t0v29o:9000/api/projects"),
    ]);

    const newState = {};
    if (
      responseRecommendations.data.isSuccessful &&
      responseRecommendations.data.results.length !== 0
    ) {
      newState.recommendations = responseRecommendations.data.results;
    }

    if (
      responseSkills.data.isSuccessful &&
      responseSkills.data.results.length !== 0
    ) {
      newState.skills = responseSkills.data.results;
    }

    if (
      responseProjects.data.isSuccessful &&
      responseProjects.data.results.length !== 0
    ) {
      newState.projects = responseProjects.data.results;
    }

    this.setState(newState);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
