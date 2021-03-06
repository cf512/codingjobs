import axios from "axios";

export default {
  // Gets a user by the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Create a new user and save them to the database
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Searches for jobs using the Indeed API
  searchJobs: function(query, location, jobType, page) {
    const limit = 20;
    const start = page * limit;
    return axios.get("/api/jobs/search", {
      params: {
        q: query,
        l: location,
        jt: jobType,
        start: start,
        limit: limit
      }
    });
  },
  // Saves a job to the given user id
  saveJob: function(jobData, userId) {
    return axios.post("/api/jobs/" + userId, jobData);
  },
  // Delete a job by the job id
  deleteJob: function(userId, jobId) {
    return axios.put("/api/jobs/" + userId, { "jobId": jobId });
  }
};