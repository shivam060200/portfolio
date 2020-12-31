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
    projects: [
      {
        id: 1,
        title: "Library Management System",
        imageUrl:
          "https://www.pixel-studios.com/blog/wp-content/uploads/2018/12/012.jpg  ",
        excerpt:
          "Library Management System for our University where 600-800 people will use it ",
        body:
          " This is not a personal project. This project is being worked upon under Developer Student Clubs of our University.",
      },
      {
        id: 2,
        title: " Basic Weather Forecasting App",
        imageUrl:
          " https://mikkonuuttila.com/wp-content/uploads/2019/07/Weather-App-Mikko-Nuuttila-01.jpg ",
        excerpt: "App which forecasts based on location",
        body:
          " Entering a city name in the search box and hitting the search button will automatically forecast the data",
      },
      {
        id: 3,
        title: "Note Making App",
        imageUrl:
          "https://vivaldi.com/wp-content/uploads/Back-to-school_hero_final-980x551.png           ",
        excerpt: "A commandline based tool for note making  ",
        body:
          "Implemented with the help of NodeJS. I used the help of some packages like yargs,chalk and validator",
      },
      
    ],

    recommendations: [],
    //skills: [],
    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 1,
      },
    ],
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
