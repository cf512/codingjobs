import React, { Component } from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";
import "./style.css";

// function Form(props) {
class Form extends Component {
  state = {
    options: [
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option One",
        value: "1"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option two",
        value: "2"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option three",
        value: "3"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option four",
        value: "4"
      }
    ]
  };

  // build function for your selects, and pass it as getValue property to reed the select's value
  getValueOfSelect = value => {
    console.log(value);
  };

  remove = () => {
    this.setState({
      options: this.state.options.slice(0, -1)
    });
  };

  render() {
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
            <div className="row">
              <div className="col-md-6">
                <MDBSelect
                  getValue={this.getValueOfSelect}
                  getTextContent={this.getValueOfSelect}
                // multiple

                // uncomment the above line / one word of "multiple" to make this a multiple selection dropdown
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
                <label>Primary Skill (optional):</label>
              </div>
              <div className="col-md-6">
                <MDBSelect
                  getValue={this.getValueOfSelect}
                  getTextContent={this.getValueOfSelect}
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
                <label>Secondary Skills (optional):</label>
              </div>
            </div>
            {/* <div className="row lower">
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
            </div> */}
            <button type="button" className="btn-lg btn-primary">Go Get It!</button>
          </div>
        </form>
      </div>
    );
  }
}



  export default Form;