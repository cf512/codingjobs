import React from "react";
// import "./style.css";

function AboutComponent(props) {
    return (
        <div className="container">
            <h1>About</h1>
            <hr />
            <h3>Our Story</h3>

            <p>We built CodingJobs for our final project for the Spring 2019 Full Stack Development Coding Bootcamp at The University of Texas at Austin.</p> 
            
            <p>We were inspired to create this site as we began our job search and started spending time on the world's leading websites for jobs, which are incredible sites that we have great admiration for, but admittedly these sites can be overwhelming, full of distractions, inundated with advertisements, and sometimes contain too many sponsored and/or low relevance jobs in the search results.</p>

            <p>CodingJobs is designed to provide software engineers with a simple, low noise site strictly for finding software development jobs.</p>
            <hr />
                <h3>Technologies Used</h3>
                <ul>
                    <li>ReactJS</li>
                    <li>MongoDB (Mongoose)</li>
                    <li>Node & Express</li>
                    <li>MERN Stack</li>
                    <li>Indeed Job Search API</li>
                    <li>Google Places API</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>jQuery</li>
                    <li>Javascript</li>
                    <li>Google Identity Platform (Sign Up / Login)</li>
                    <li>PassportJS</li>
                    <li>Heroku</li>
                    <li>Travis CI</li>
                </ul>
                <hr />
                <h3>Check Out Our Creators' Other Projects:</h3>
                <ul>
                    <li><a style={{ color: "black" }} href="https://github.com/cf512" target="_blank" rel="noopener noreferrer">Connor Finnigan <i className="fab fa-github"></i></a></li>
                    <li><a style={{ color: "black" }} href="https://github.com/echao2012" target="_blank" rel="noopener noreferrer">Eric Chao <i className="fab fa-github"></i></a></li>
                    <li><a style={{ color: "black" }} href="https://github.com/BraveOstrich" target="_blank" rel="noopener noreferrer">Steve White <i className="fab fa-github"></i></a></li>
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
        </div>
            );
        }
        
export default AboutComponent;