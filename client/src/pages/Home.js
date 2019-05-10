import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const query = "software developer"
    API.searchJobs(query, this.state.location, 0)
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err));
  }

  saveJob = jobData => {
    API.saveJob(jobData)
      .catch(err => console.log(err));
  }

  getValueOfSelectPrimary = value => {
    this.setState({ primarySkills: value });
  };

  getValueOfSelectSecondary = value => {
    this.setState({ secondarySkills: value });
  };

  render() {
    return (
      <div>
        <Nav
          location={this.props.location.pathname}
        />
        <Jumbotron />
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