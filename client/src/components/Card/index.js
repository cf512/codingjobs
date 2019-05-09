import React from "react";
import "./style.css";

export function CardList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.children}
      </ul>
    </div>
  )
}

export function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>{props.jobData.title}</h3>
            <h5>{props.jobData.company}</h5>
            <h5>{props.jobData.location}</h5>
          </div>
          <div className="col-md-8 text-center">
            <p>{props.jobData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}