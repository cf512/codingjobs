import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div className="container">
      <form>
          <div className="form">
              <input type="text" className="form-control-lg" id="search" aria-describedby="emailHelp" placeholder="Enter City to Search" />
              <button type="button" className="btn-lg btn-primary">Go Get It!</button>
          </div>
          <h5 className="dropdown accordion text-center" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Advanced Search
          </h5>
        <div className="collapse" id="collapseExample">
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
                    <option value="" disabled selected>Choose Primary Skill</option>
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
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="4">Poland</option>
                    <option value="5">Japan</option>
                  </select>
                  <button className="btn-save btn btn-primary btn-sm">Save</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;