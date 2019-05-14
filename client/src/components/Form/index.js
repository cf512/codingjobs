import React from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBBtn, MDBIcon } from "mdbreact";
import PlacesAutocomplete from "../PlacesAutocomplete"
import angularIcon from "./images/angular.svg";
import aspIcon from "./images/asp.svg";
import awsIcon from "./images/aws.svg";
import csharpIcon from "./images/csharp.svg";
import cppIcon from "./images/cpp.svg";
import cssIcon from "./images/css.svg";
import debianIcon from "./images/debian.svg";
import drupalIcon from "./images/drupal.svg";
import elixerIcon from "./images/elixer.svg";
import gcpIcon from "./images/gcp.svg";
import golangIcon from "./images/golang.svg";
import haskellIcon from "./images/haskell.svg";
import javaIcon from "./images/java.svg";
import jsIcon from "./images/js.svg";
import laravelIcon from "./images/laravel.svg";
import linuxIcon from "./images/linux.svg";
import lispIcon from "./images/lisp.svg";
import mysqlIcon from "./images/mysql.svg";
import nodejsIcon from "./images/nodejs.svg";
import objectivecIcon from "./images/objectivec.svg";
import ocamlIcon from "./images/ocaml.svg";
import pascalIcon from "./images/pascal.svg";
import perlIcon from "./images/perl.svg";
import postgresqlIcon from "./images/postgresql.svg";
import postscriptIcon from "./images/postscript.svg";
import phpIcon from "./images/php.svg";
import pythonIcon from "./images/python.svg";
import reactIcon from "./images/react.svg";
import railsIcon from "./images/rails.svg";
import rustIcon from "./images/rust.svg";
import scalaIcon from "./images/scala.svg";
import sqlIcon from "./images/sql.svg";
import swiftIcon from "./images/swift.svg";
import ubuntuIcon from "./images/ubuntu.svg";
import unixIcon from "./images/unix.svg";
import vueIcon from "./images/vue.svg";
import wordpressIcon from "./images/wordpress.svg";
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
                  <MDBSelectOption value="Angular" icon={angularIcon}>Angular</MDBSelectOption>
                  <MDBSelectOption value="ASP" icon={aspIcon}>ASP/ASP.NET</MDBSelectOption>
                  <MDBSelectOption value="AWS" icon={awsIcon}>AWS</MDBSelectOption>
                  <MDBSelectOption value="C#" icon={csharpIcon}>C#</MDBSelectOption>
                  <MDBSelectOption value="C++" icon={cppIcon}>C++</MDBSelectOption>
                  <MDBSelectOption value="CSS" icon={cssIcon}>CSS</MDBSelectOption>
                  <MDBSelectOption value="Debian" icon={debianIcon}>Debian</MDBSelectOption>
                  <MDBSelectOption value="Drupal" icon={drupalIcon}>Drupal</MDBSelectOption>
                  <MDBSelectOption value="Elixir" icon={elixerIcon}>Elixir/Erlang</MDBSelectOption>
                  <MDBSelectOption value="Golang" icon={golangIcon}>Golang</MDBSelectOption>
                  <MDBSelectOption value="GCP" icon={gcpIcon}>Google GCP</MDBSelectOption>
                  <MDBSelectOption value="Haskell" icon={haskellIcon}>Haskell</MDBSelectOption>
                  <MDBSelectOption value="Java" icon={javaIcon}>Java</MDBSelectOption>
                  <MDBSelectOption value="JavaScript" icon={jsIcon}>JavaScript</MDBSelectOption>
                  <MDBSelectOption value="Laravel" icon={laravelIcon}>Laravel</MDBSelectOption>
                  <MDBSelectOption value="Linux" icon={linuxIcon}>Linux</MDBSelectOption>
                  <MDBSelectOption value="Lisp" icon={lispIcon}>Lisp</MDBSelectOption>
                  <MDBSelectOption value="MySQL" icon={mysqlIcon}>MySQL</MDBSelectOption>
                  <MDBSelectOption value="NodeJS" icon={nodejsIcon}>NodeJS</MDBSelectOption>
                  <MDBSelectOption value="Objective-C" icon={objectivecIcon}>Objective-C</MDBSelectOption>
                  <MDBSelectOption value="OCaml" icon={ocamlIcon}>OCaml</MDBSelectOption>
                  <MDBSelectOption value="Pascal" icon={pascalIcon}>Pascal</MDBSelectOption>
                  <MDBSelectOption value="Perl" icon={perlIcon}>Perl</MDBSelectOption>
                  <MDBSelectOption value="PostgreSQL" icon={postgresqlIcon}>PostgreSQL</MDBSelectOption>
                  <MDBSelectOption value="PostScript" icon={postscriptIcon}>PostScript</MDBSelectOption>
                  <MDBSelectOption value="PHP" icon={phpIcon}>PHP</MDBSelectOption>
                  <MDBSelectOption value="Python" icon={pythonIcon}>Python</MDBSelectOption>
                  <MDBSelectOption value="React" icon={reactIcon}>React</MDBSelectOption>
                  <MDBSelectOption value="Ruby" icon={railsIcon}>Ruby on Rails</MDBSelectOption>
                  <MDBSelectOption value="Rust" icon={rustIcon}>Rust</MDBSelectOption>
                  <MDBSelectOption value="Scala" icon={scalaIcon}>Scala</MDBSelectOption>
                  <MDBSelectOption value="SQL" icon={sqlIcon}>SQL</MDBSelectOption>
                  <MDBSelectOption value="Swift" icon={swiftIcon}>Swift</MDBSelectOption>
                  <MDBSelectOption value="Ubuntu" icon={ubuntuIcon}>Ubuntu</MDBSelectOption>
                  <MDBSelectOption value="Unix" icon={unixIcon}>Unix</MDBSelectOption>
                  <MDBSelectOption value="Vue" icon={vueIcon}>Vue</MDBSelectOption>
                  <MDBSelectOption value="WordPress" icon={wordpressIcon}>WordPress</MDBSelectOption>
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
                  <MDBSelectOption value="Angular" icon={angularIcon}>Angular</MDBSelectOption>
                  <MDBSelectOption value="ASP" icon={aspIcon}>ASP/ASP.NET</MDBSelectOption>
                  <MDBSelectOption value="AWS" icon={awsIcon}>AWS</MDBSelectOption>
                  <MDBSelectOption value="C#" icon={csharpIcon}>C#</MDBSelectOption>
                  <MDBSelectOption value="C++" icon={cppIcon}>C++</MDBSelectOption>
                  <MDBSelectOption value="CSS" icon={cssIcon}>CSS</MDBSelectOption>
                  <MDBSelectOption value="Debian" icon={debianIcon}>Debian</MDBSelectOption>
                  <MDBSelectOption value="Drupal" icon={drupalIcon}>Drupal</MDBSelectOption>
                  <MDBSelectOption value="Elixir" icon={elixerIcon}>Elixir/Erlang</MDBSelectOption>
                  <MDBSelectOption value="Golang" icon={golangIcon}>Golang</MDBSelectOption>
                  <MDBSelectOption value="GCP" icon={gcpIcon}>Google GCP</MDBSelectOption>
                  <MDBSelectOption value="Haskell" icon={haskellIcon}>Haskell</MDBSelectOption>
                  <MDBSelectOption value="Java" icon={javaIcon}>Java</MDBSelectOption>
                  <MDBSelectOption value="JavaScript" icon={jsIcon}>JavaScript</MDBSelectOption>
                  <MDBSelectOption value="Laravel" icon={laravelIcon}>Laravel</MDBSelectOption>
                  <MDBSelectOption value="Linux" icon={linuxIcon}>Linux</MDBSelectOption>
                  <MDBSelectOption value="Lisp" icon={lispIcon}>Lisp</MDBSelectOption>
                  <MDBSelectOption value="MySQL" icon={mysqlIcon}>MySQL</MDBSelectOption>
                  <MDBSelectOption value="NodeJS" icon={nodejsIcon}>NodeJS</MDBSelectOption>
                  <MDBSelectOption value="Objective-C" icon={objectivecIcon}>Objective-C</MDBSelectOption>
                  <MDBSelectOption value="OCaml" icon={ocamlIcon}>OCaml</MDBSelectOption>
                  <MDBSelectOption value="Pascal" icon={pascalIcon}>Pascal</MDBSelectOption>
                  <MDBSelectOption value="Perl" icon={perlIcon}>Perl</MDBSelectOption>
                  <MDBSelectOption value="PostgreSQL" icon={postgresqlIcon}>PostgreSQL</MDBSelectOption>
                  <MDBSelectOption value="PostScript" icon={postscriptIcon}>PostScript</MDBSelectOption>
                  <MDBSelectOption value="PHP" icon={phpIcon}>PHP</MDBSelectOption>
                  <MDBSelectOption value="Python" icon={pythonIcon}>Python</MDBSelectOption>
                  <MDBSelectOption value="React" icon={reactIcon}>React</MDBSelectOption>
                  <MDBSelectOption value="Ruby" icon={railsIcon}>Ruby on Rails</MDBSelectOption>
                  <MDBSelectOption value="Rust" icon={rustIcon}>Rust</MDBSelectOption>
                  <MDBSelectOption value="Scala" icon={scalaIcon}>Scala</MDBSelectOption>
                  <MDBSelectOption value="SQL" icon={sqlIcon}>SQL</MDBSelectOption>
                  <MDBSelectOption value="Swift" icon={swiftIcon}>Swift</MDBSelectOption>
                  <MDBSelectOption value="Ubuntu" icon={ubuntuIcon}>Ubuntu</MDBSelectOption>
                  <MDBSelectOption value="Unix" icon={unixIcon}>Unix</MDBSelectOption>
                  <MDBSelectOption value="Vue" icon={vueIcon}>Vue</MDBSelectOption>
                  <MDBSelectOption value="WordPress" icon={wordpressIcon}>WordPress</MDBSelectOption>
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