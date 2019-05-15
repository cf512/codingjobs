import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import {CardList, Card } from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Saved extends Component {
  state = {
    jobs: [],
    user: cookies.get('user')
  }

  componentDidMount() {
    if(this.state.user === undefined) {
      this.props.history.push("/login");
    } else {
      this.loadJobs();
    }
  }

  loadJobs = () => {
    API.getUser(this.state.user)
      .then(res => this.setState({ jobs: res.data.savedJobs }))
      .catch(err => console.log(err));
  }

  deleteJob = jobId => {
    API.deleteJob(this.state.user, jobId)
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
          <h5 className="text-center">You do not have any saved jobs</h5>
        ) : (
          <CardList>
            {this.state.jobs.map(job => {
              return (
                <Card
                  key={job._id}
                  jobData={job}
                  deleteOnClick={() => {this.deleteJob(job._id)}}
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