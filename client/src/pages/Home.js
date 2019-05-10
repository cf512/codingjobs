import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import PlacesAutocomplete from "../components/PlacesAutocomplete"
import Form from "../components/Form";
import {CardList, Card } from "../components/Card";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    jobs: [],
    location: "",
    position: "None",
    remote: "Either",
    primarySkills: [],
    secondarySkills: []
  }

  // Generic handler for input change
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handles the submit for the job search form
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const query = "software developer"
    API.searchJobs(query, this.state.location, 0)
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err));
  }

  // Save a job to the database
  saveJob = jobData => {
    API.saveJob(jobData)
      .catch(err => console.log(err));
  }

  // Get the value of the primary skill select
  getValueOfSelectPrimary = value => {
    this.setState({ primarySkills: value });
  };

  // Get the value of the secondary skills select
  getValueOfSelectSecondary = value => {
    this.setState({ secondarySkills: value });
  };

  renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
    <div className="autocomplete-root">
      <input {...getInputProps()} />
      <div className="autocomplete-dropdown-container">
        {loading && <div>Loading...</div>}
        {suggestions.map(suggestion => (
          <div {...getSuggestionItemProps(suggestion)}>
            <span>{suggestion.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

  render() {
    return (
      <div>
        <Nav
          location={this.props.location.pathname}
        />
        <Jumbotron />
        <PlacesAutocomplete
          value={this.state.location}
          onChange={location => this.setState({ location })}
        />
        <Form
          locationName="location"
          locationValue={this.state.location}
          getValueOfSelectPrimary={this.getValueOfSelectPrimary}
          getValueOfSelectSecondary={this.getValueOfSelectSecondary}
          positionName="position"
          positionValue={this.state.position}
          remoteName="remote"
          remoteValue={this.state.remote}
          onChange={this.handleInputChange}
          submit={this.handleFormSubmit}
        />
        <CardList>
          {this.state.jobs.map(job => {
            const jobData = {
              title: job.jobtitle,
              company: job.company,
              location: job.formattedLocation,
              description: job.snippet,
              url: job.url
            }
            return (
              <Card
                key={job.jobkey}
                jobData={jobData}
                saveOnClick={() => this.saveJob(jobData)}
              />
            );
          })}
        </CardList>
        <Footer />
      </div>
    );
  }
}

export default Home;