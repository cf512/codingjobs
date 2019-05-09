import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div class="card">
        <div class="card-body">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h3>Job Title</h3>
                    <h5>Company Name</h5>
                    <h5>Location</h5>
                    <h5>Salary</h5>
                </div>
                <div className="col-md-8 text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;