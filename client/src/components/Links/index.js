import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBNavLink, MDBNav, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import "./style.css";

const Resources = props => {
  return (
      <MDBContainer className="mt-5 text-center links-jumbo">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3 className="h3 display-3">Coding Resources!</h3>
              <p className="lead">
                The Links Below are to Useful Coding Resources to Help Further Your Skills.
              </p>
              <hr className="my-2" />
              <div className="text-left">
                <div className="row">
                  <div className="col-md-6">
                    <h4>HTML</h4>
                    <ul>
                      <li><a href="https://htmlreference.io/" target="_blank" className="link">HTML Reference</a></li>
                      <li><a href="http://htmlshell.com" target="_blank">HTML Shell</a></li>
                      <li><a href="http://html5doctor.com" target="_blank">HTML5 Doctor</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4>CSS</h4>
                    <ul>
                      <li><a href="https://css-tricks.com" target="_blank">CSS Tricks</a></li>
                      <li><a href="https://daneden.github.io/animate.css/" target="_blank">Animate</a></li>
                      <li><a href="https://www.imagehover.io" target="_blank">Image Hover</a></li>
                      <li><a href="https://loading.io" target="_blank">Loading</a></li>
                      <li><a href="http://getskeleton.com" target="_blank">Skeleton</a></li>
                      <li><a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank">CSS Reset</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Javascript</h4>
                    <ul>
                      <li><a href="https://javascript.info/" target="_blank">Javascript Info</a></li>
                      <li><a href="https://www.geeksforgeeks.org/javascript-tutorial/" target="_blank">GeeksForGeeks</a></li>
                      <li><a href="https://www.w3schools.com/js/" target="_blank">W3Schools</a></li>
                    </ul>
                  </div>
                    <div className="col-md-6">
                      <h4>Free Use Photos</h4>
                      <ul>
                        <li><a href="https://unsplash.com" target="_blank">Unsplash</a></li>
                        <li><a href="http://www.splashbase.co" target="_blank">Splashbase</a></li>
                        <li><a href="https://www.pexels.com" target="_blank">Pexels</a></li>
                      </ul>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Inspiration</h4>
                    <ul>
                      <li><a href="https://land-book.com" target="_blank">Land-book</a></li>
                      <li><a href="https://www.awwwards.com" target="_blank">Awwwards</a></li>
                      <li><a href="https://www.siteinspire.com" target="_blank">Site Inspire</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  <h4>Tutorials</h4>
                    <ul>
                      <li><a href="https://www.w3schools.com" target="_blank">W3Schools</a></li>
                      <li><a href="http://html.net" target="_blank">HTML.net</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Fonts</h4>
                    <ul>
                      <li><a href="https://fontawesome.com/?from=io" target="_blank">Font Awesome</a></li>
                      <li><a href="https://fonts.google.com" target="_blank">Google Fonts</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  <h4>Color Codes</h4>
                    <ul>
                      <li><a href="https://htmlcolorcodes.com" target="_blank">HTML Color Codes</a></li>
                      <li><a href="https://coolors.co" target="_blank">Coolors</a></li>
                      <li><a href="http://paletton.com" target="_blank">Paletton</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default Resources;
