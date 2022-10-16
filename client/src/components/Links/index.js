import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./style.css";

const Resources = props => {
  return (
      <MDBContainer className="mt-5 text-center links-jumbo resources">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3 className="h3 display-3">Coding Resources!</h3>
              <p>
                The Links Below are to Useful Coding Resources to Help Further Your Skills.
              </p>
              <hr className="my-2" />
              <div className="text-left">
                <div className="row">
                  <div className="col-md-6">
                    <h4>HTML</h4>
                    <ul>
                      <li><a href="https://htmlreference.io/" target="_blank" rel="noopener noreferrer" className="link">HTML Reference</a></li>
                      <li><a href="http://htmlshell.com" target="_blank" rel="noopener noreferrer">HTML Shell</a></li>
                      <li><a href="http://html5doctor.com" target="_blank" rel="noopener noreferrer">HTML5 Doctor</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4>CSS</h4>
                    <ul>
                      <li><a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer">CSS Tricks</a></li>
                      <li><a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">Animate</a></li>
                      <li><a href="https://www.imagehover.io" target="_blank" rel="noopener noreferrer">Image Hover</a></li>
                      <li><a href="https://loading.io" target="_blank" rel="noopener noreferrer">Loading</a></li>
                      <li><a href="http://getskeleton.com" target="_blank" rel="noopener noreferrer">Skeleton</a></li>
                      <li><a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener noreferrer">CSS Reset</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Javascript</h4>
                    <ul>
                      <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">Javascript Info</a></li>
                      <li><a href="https://www.geeksforgeeks.org/javascript-tutorial/" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a></li>
                      <li><a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
                    </ul>
                  </div>
                    <div className="col-md-6">
                      <h4>Free Use Photos</h4>
                      <ul>
                        <li><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></li>
                        <li><a href="http://www.splashbase.co" target="_blank" rel="noopener noreferrer">Splashbase</a></li>
                        <li><a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a></li>
                      </ul>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Inspiration</h4>
                    <ul>
                      <li><a href="https://land-book.com" target="_blank" rel="noopener noreferrer">Land-book</a></li>
                      <li><a href="https://www.awwwards.com" target="_blank" rel="noopener noreferrer">Awwwards</a></li>
                      <li><a href="https://www.siteinspire.com" target="_blank" rel="noopener noreferrer">Site Inspire</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  <h4>Tutorials</h4>
                    <ul>
                      <li><a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
                      <li><a href="http://html.net" target="_blank" rel="noopener noreferrer">HTML.net</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Fonts</h4>
                    <ul>
                      <li><a href="https://fontawesome.com/?from=io" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
                      <li><a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  <h4>Color Codes</h4>
                    <ul>
                      <li><a href="https://htmlcolorcodes.com" target="_blank" rel="noopener noreferrer">HTML Color Codes</a></li>
                      <li><a href="https://coolors.co" target="_blank" rel="noopener noreferrer">Coolors</a></li>
                      <li><a href="http://paletton.com" target="_blank" rel="noopener noreferrer">Paletton</a></li>
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
