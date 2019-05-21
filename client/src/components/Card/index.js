import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
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
    <div className="card" id="resultsCards">
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
              <div className="col-md-12 d-flex justify-content-center">
                {props.saveOnClick ? (
                  <MDBBtn id="resultsBtns" color={props.saveBtnAttr.color} onClick={props.saveOnClick}>
                    <MDBIcon icon={props.saveBtnAttr.icon} /> {props.saveBtnAttr.text}
                  </MDBBtn>
                ) : null}
                {props.deleteOnClick ? (
                  <MDBBtn id="resultsBtns" color="danger" onClick={props.deleteOnClick}>
                    <MDBIcon icon="trash-alt" /> Delete
                  </MDBBtn>
                ) : null}
                <MDBBtn id="resultsBtns" href={props.jobData.link} rel="nofollow" target="_blank" color="primary" >
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