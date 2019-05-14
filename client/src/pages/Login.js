import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import GitHubLogin from 'react-github-login';
import config from '../config.json';

class Login extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    onFailure = (error) => {
        alert(error);
    }

    twitterResponse = (response) => {
        const token = response.headers.get('x-auth-token');
        response.json().then(user => {
            if (token) {
                this.setState({isAuthenticated: true, user, token});
            }
        });
    };
    
    facebookResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/api/v1/auth/facebook', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
    };
    
    googleResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/api/v1/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
    };
        githubResponse = (e) => { };

    
    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    <TwitterLogin loginUrl="http://localhost:3000/api/v1/auth/twitter"
                        onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                        requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse" />
                    <FacebookLogin
                        appId={config.FACEBOOK_APP_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId = {config.GOOGLE_CLIENTID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse} />
                    <GitHubLogin
                        clientId= {config.GITHUB_CLIENTID}
                        buttonText="Login"
                        onSuccess={this.githubResponse}
                        onFailure={this.githubResponse} />
                </div>
            );

        return (
            <div>
                <Nav />
                <Jumbotron />
                <div className="App">
                    {content}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;