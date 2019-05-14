import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
// import TwitterLogin from 'react-twitter-auth';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import GitHubLogin from 'react-github-login';
import config from "../../config.json";
import "./style.css";

class LoginBtns extends Component {

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

    // twitterResponse = (response) => {
    //     const token = response.headers.get('x-auth-token');
    //     response.json().then(user => {
    //         if (token) {
    //             this.setState({ isAuthenticated: true, user, token });
    //         }
    //     });
    // };

    facebookResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/api/auth/facebook', options).then(r => {
            console.log(r);
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({ isAuthenticated: true, user, token })
                }
            });
        })
    };

    googleResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/api/auth/google', options).then(r => {
            console.log(process.env);
            console.log(r);
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({ isAuthenticated: true, user, token })
                }
            });
        })
    };

    // githubResponse = (response) => {
    //     const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    //     const options = {
    //         method: 'POST',
    //         body: tokenBlob,
    //         mode: 'cors',
    //         cache: 'default'
    //     };
    //     fetch('http://localhost:3000/api/v1/auth/github', options).then(r => {
    //         const token = r.headers.get('x-auth-token');
    //         r.json().then(user => {
    //             if (token) {
    //                 this.setState({ isAuthenticated: true, user, token })
    //             }
    //         });
    //     })
    // };


    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div className="container">
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <br />
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div className="container">
                    <div className="col text-center">
                        <div className="row">
                            {/* <TwitterLogin loginUrl="http://localhost:3000/api/v1/auth/twitter"
                        onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                        requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse" /> */}
                            <GoogleLogin
                                clientId={config.GOOGLE_CLIENTID}
                                render={renderProps => (
                                    <button className="btn btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google"></i>  Signup / Login with Google    </button>
                                )}
                                buttonText="Login"
                                onSuccess={this.googleResponse}
                                onFailure={this.googleResponse} />
                        </div>
                        <br />
                        <div className="row">
                            <FacebookLogin
                                appId={config.FACEBOOK_APP_ID}
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={this.facebookResponse}
                                render={renderProps => (
                                    <button className="btn btn-primary" onClick={renderProps.onClick}><i className="fab fa-facebook-square"></i>  Signup / Login with Facebook</button>)} />
                        </div>
                        {/* <GitHubLogin
                        clientId={config.GITHUB_CLIENTID}
                        buttonText="Login"
                        onSuccess={this.githubResponse}
                        onFailure={this.githubResponse} /> */}
                    </div>
                </div>
            );

        return (
            // <div className="App">
            <div>
                {content}
            </div>
        );
    }
}

export default LoginBtns;