import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import {CardList, Card } from "../components/Card";
import Footer from "../components/Footer";

class Search extends Component {
  state = {
    jobs: [],
    location: "",
    position: "",
    remote: "",
    primarySkills: [],
    secondarySkills: []
  }

  componentDidMount() {
    this.handleFormSubmit();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // event.preventDefault();

    const query = "software developer"
    API.searchJobs(query, "Austin, TX", 0)
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err));
  }

  saveJob = jobData => {
    API.saveJob(jobData)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav location={this.props.location.pathname}/>
        <Jumbotron />
        <Form />
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

export default Search;