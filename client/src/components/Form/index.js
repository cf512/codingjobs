import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div className="container">
      <form>
          <div className="form">
              <input type="text" className="form-control-lg" id="search-box" aria-describedby="emailHelp" placeholder="Enter City to Search" />
          </div>
          <div className="card card-body">
            <div className="row upper">
              <div className="col-md-6">
                <h5>Position</h5>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-blue-grey btn-sm">None</button>
                  <button type="button" className="btn btn-blue-grey btn-sm">Junior</button>
                  <button type="button" className="btn btn-blue-grey btn-sm">Senior</button>
                </div>
              </div>
              <div className="col-md-6">
                <h5>Remote Work</h5>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-blue-grey btn-sm">Yes</button>
                  <button type="button" className="btn btn-blue-grey btn-sm">No</button>
                  <button type="button" className="btn btn-blue-grey btn-sm">Either</button>
                </div>
              </div>
            </div>
            <div className="row lower">
              <div className="col-md-6">
                <select className="mdb-select md-form" multiple>
                    <option value="" disabled selected>Choose Primary Skills</option>
                    <option value="1">Java</option>
                    <option value="2">Javascript</option>
                    <option value="3">PHP</option>
                    <option value="4">Python</option>
                    <option value="5">React</option>
                  </select>
                  <button class="btn-save btn btn-primary btn-sm">Save</button>
              </div>
              <div className="col-md-6">
                <select className="mdb-select md-form" multiple>
                    <option value="" disabled selected>Choose Secondary Skills</option>
                    <option value="1">MySql</option>
                    <option value="2">MongoDB</option>
                    <option value="3">jQuery</option>
                    <option value="4">Git</option>
                    <option value="5">Japan</option>
                  </select>
                  <button className="btn-save btn btn-primary btn-sm">Save</button>
              </div>
            </div>
            <button type="button" className="btn-lg btn-primary">Go Get It!</button>
          </div>
      </form>
    </div>
  );
}

  

export default Form;