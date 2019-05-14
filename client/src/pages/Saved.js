import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import {CardList, Card } from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";

class Saved extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getUser(/*TODO: USER ID*/)
      .then(res => this.setState({ jobs: res.data.savedJobs }))
      .catch(err => console.log(err));
  }

  deleteJob = id => {
    API.deleteJob(id)
      .then(res => this.loadJobs())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav
          location={this.props.location.pathname}
        />
        <Jumbotron />
        {this.state.jobs.length <= 0 ? (
          <h5 class="text-center">You do not have any saved jobs</h5>
        ) : (
          <CardList>
            {this.state.jobs.map(job => {
              return (
                <Card
                  key={job._id}
                  jobData={job}
                  deleteOnClick={() => this.deleteJob(job._id)}
                />
              );
            })}
          </CardList>
        )}
        <Footer />
      </div>
    );
  }
}

export default Saved;