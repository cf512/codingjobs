import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import "./style.css";
// import { PromiseProvider } from "mongoose";

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
          <div className="col-md-8">
            <div className="row">
              <p>{props.jobData.description}</p>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-end">
                {props.saveOnClick ? (
                  <MDBBtn color="primary" onClick={props.saveOnClick}>
                    <MDBIcon icon="bookmark" /> Save
                  </MDBBtn>
                ) : (
                  <MDBBtn color="danger" onClick={props.deleteOnClick}>
                    <MDBIcon icon="trash-alt" /> Delete
                  </MDBBtn>
                )}
                <MDBBtn href={props.jobData.link} target="_blank" color="primary" >
                  <MDBIcon icon="external-link-alt" /> View on Indeed
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}