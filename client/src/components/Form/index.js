import React from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBBtn, MDBIcon } from "mdbreact";
import PlacesAutocomplete from "../PlacesAutocomplete"
import "./style.css";

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form">
          <PlacesAutocomplete
            type="text"
            className="form-control form-control-lg"
            id="search-box"
            placeholder="Enter city to search"
            onPlaceChanged={props.getValueOfLocation}
          />
        </div>
        <div className="card card-body">
          <div className="row upper">
            <div className="col-md-6">
              <h5>Primary Skill</h5>
              <MDBSelect
                getValue={props.getValueOfSelectPrimary}
              >
                <MDBSelectInput selected="Choose one" />
                <MDBSelectOptions search>
                  <MDBSelectOption disabled>Choose one</MDBSelectOption>
                  <MDBSelectOption value="Angular">Angular</MDBSelectOption>
                  <MDBSelectOption value="ASP">ASP/ASP.NET</MDBSelectOption>
                  <MDBSelectOption value="AWS">AWS</MDBSelectOption>
                  <MDBSelectOption value="C#">C#</MDBSelectOption>
                  <MDBSelectOption value="C++">C++</MDBSelectOption>
                  <MDBSelectOption value="CSS">CSS</MDBSelectOption>
                  <MDBSelectOption value="Debian">Debian</MDBSelectOption>
                  <MDBSelectOption value="Drupal">Drupal</MDBSelectOption>
                  <MDBSelectOption value="Elixir">Elixir/Erlang</MDBSelectOption>
                  <MDBSelectOption value="Golang">Golang</MDBSelectOption>
                  <MDBSelectOption value="GCP">Google GCP</MDBSelectOption>
                  <MDBSelectOption value="Haskell">Haskell</MDBSelectOption>
                  <MDBSelectOption value="Java">Java</MDBSelectOption>
                  <MDBSelectOption value="JavaScript">JavaScript</MDBSelectOption>
                  <MDBSelectOption value="Laravel">Laravel</MDBSelectOption>
                  <MDBSelectOption value="Linux">Linux</MDBSelectOption>
                  <MDBSelectOption value="Lisp">Lisp</MDBSelectOption>
                  <MDBSelectOption value="MySQL">MySQL</MDBSelectOption>
                  <MDBSelectOption value="NodeJS">NodeJS</MDBSelectOption>
                  <MDBSelectOption value="Objective-C">Objective-C</MDBSelectOption>
                  <MDBSelectOption value="OCaml">OCaml</MDBSelectOption>
                  <MDBSelectOption value="Pascal">Pascal</MDBSelectOption>
                  <MDBSelectOption value="Perl">Perl</MDBSelectOption>
                  <MDBSelectOption value="PostgreSQL">PostgreSQL</MDBSelectOption>
                  <MDBSelectOption value="PostScript">PostScript</MDBSelectOption>
                  <MDBSelectOption value="PHP">PHP</MDBSelectOption>
                  <MDBSelectOption value="Python">Python</MDBSelectOption>
                  <MDBSelectOption value="React">React</MDBSelectOption>
                  <MDBSelectOption value="Ruby">Ruby on Rails</MDBSelectOption>
                  <MDBSelectOption value="Rust">Rust</MDBSelectOption>
                  <MDBSelectOption value="Scala">Scala</MDBSelectOption>
                  <MDBSelectOption value="SQL">SQL</MDBSelectOption>
                  <MDBSelectOption value="Swift">Swift</MDBSelectOption>
                  <MDBSelectOption value="Ubuntu">Ubuntu</MDBSelectOption>
                  <MDBSelectOption value="Unix">Unix</MDBSelectOption>
                  <MDBSelectOption value="Vue">Vue</MDBSelectOption>
                  <MDBSelectOption value="WordPress">WordPress</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </div>
            <div className="col-md-6">
            <h5>Additional Skills</h5>
              <MDBSelect
                getValue={props.getValueOfSelectSecondary}
                selected="Choose multiple"
                multiple
              >
                <MDBSelectInput selected="Choose multiple" />
                <MDBSelectOptions search>
                  <MDBSelectOption disabled>Choose multiple</MDBSelectOption>
                  <MDBSelectOption value="Angular">Angular</MDBSelectOption>
                  <MDBSelectOption value="ASP">ASP/ASP.NET</MDBSelectOption>
                  <MDBSelectOption value="AWS">AWS</MDBSelectOption>
                  <MDBSelectOption value="C#">C#</MDBSelectOption>
                  <MDBSelectOption value="C++">C++</MDBSelectOption>
                  <MDBSelectOption value="CSS">CSS</MDBSelectOption>
                  <MDBSelectOption value="Debian">Debian</MDBSelectOption>
                  <MDBSelectOption value="Drupal">Drupal</MDBSelectOption>
                  <MDBSelectOption value="Elixir">Elixir/Erlang</MDBSelectOption>
                  <MDBSelectOption value="Golang">Golang</MDBSelectOption>
                  <MDBSelectOption value="GCP">Google GCP</MDBSelectOption>
                  <MDBSelectOption value="Haskell">Haskell</MDBSelectOption>
                  <MDBSelectOption value="HTML">HTML</MDBSelectOption>
                  <MDBSelectOption value="Java">Java</MDBSelectOption>
                  <MDBSelectOption value="JavaScript">JavaScript</MDBSelectOption>
                  <MDBSelectOption value="Laravel">Laravel</MDBSelectOption>
                  <MDBSelectOption value="Linux">Linux</MDBSelectOption>
                  <MDBSelectOption value="Lisp">Lisp</MDBSelectOption>
                  <MDBSelectOption value="MySQL">MySQL</MDBSelectOption>
                  <MDBSelectOption value="NodeJS">NodeJS</MDBSelectOption>
                  <MDBSelectOption value="Objective-C">Objective-C</MDBSelectOption>
                  <MDBSelectOption value="OCaml">OCaml</MDBSelectOption>
                  <MDBSelectOption value="Pascal">Pascal</MDBSelectOption>
                  <MDBSelectOption value="Perl">Perl</MDBSelectOption>
                  <MDBSelectOption value="PostgreSQL">PostgreSQL</MDBSelectOption>
                  <MDBSelectOption value="PostScript">PostScript</MDBSelectOption>
                  <MDBSelectOption value="PHP">PHP</MDBSelectOption>
                  <MDBSelectOption value="Python">Python</MDBSelectOption>
                  <MDBSelectOption value="React">React</MDBSelectOption>
                  <MDBSelectOption value="Ruby">Ruby on Rails</MDBSelectOption>
                  <MDBSelectOption value="Rust">Rust</MDBSelectOption>
                  <MDBSelectOption value="Scala">Scala</MDBSelectOption>
                  <MDBSelectOption value="SQL">SQL</MDBSelectOption>
                  <MDBSelectOption value="Swift">Swift</MDBSelectOption>
                  <MDBSelectOption value="Ubuntu">Ubuntu</MDBSelectOption>
                  <MDBSelectOption value="Unix">Unix</MDBSelectOption>
                  <MDBSelectOption value="Vue">Vue</MDBSelectOption>
                  <MDBSelectOption value="WordPress">WordPress</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </div>
          </div>
          <hr />
          <div className="row upper">
            <div className="col-md-6">
              <h5>Position Level</h5>
              <div className="btn-group" data-toggle="buttons">
                <label className={props.positionValue==="none" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.positionName} value="none" onClick={props.onChange} autoComplete="off" />
                  None
                </label>
                <label className={props.positionValue==="junior" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.positionName} value="junior" onClick={props.onChange} autoComplete="off" />
                  Junior
                </label>
                <label className={props.positionValue==="senior" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.positionName} value="senior" onClick={props.onChange} autoComplete="off" />
                  Senior
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Job Type</h5>
              <div className="btn-group" data-toggle="buttons">
                <label className={props.jobTypeValue==="fulltime" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.jobTypeName} value="fulltime" onClick={props.onChange} autoComplete="off" />
                  Full Time
                </label>
                <label className={props.jobTypeValue==="parttime" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.jobTypeName} value="parttime" onClick={props.onChange} autoComplete="off" />
                  Part Time
                </label>
                <label className={props.jobTypeValue==="contract" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.jobTypeName} value="contract" onClick={props.onChange} autoComplete="off" />
                  Contract
                </label>
                <label className={props.jobTypeValue==="internship" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.jobTypeName} value="internship" onClick={props.onChange} autoComplete="off" />
                  Internship
                </label>
                <label className={props.jobTypeValue==="temporary" ? "btn btn-blue-grey btn-sm form-check-label active" : "btn btn-blue-grey btn-sm form-check-label"}>
                  <input className="form-check-input" type="radio" name={props.jobTypeName} value="temporary" onClick={props.onChange} autoComplete="off" />
                  Temporary
                </label>
              </div>
            </div>
          </div>
          <hr />
          <MDBBtn type="submit" className="btn-lg btn-primary" color="primary" onClick={props.submit}>
            <MDBIcon icon="search" /> Go Get It!
          </MDBBtn>
        </div>
      </form>
    </div>
  );
}

export default Form;