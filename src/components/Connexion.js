import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export default class Connexion extends Component {
    render() {
        return (
            <div className="register-photo">
            <div className="form-container">
                <div className="image-holder"></div>
                
                <form method="post">
                    <h2 className="text-center"><strong>Se connecter</strong></h2>
                    <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email"></input>
                    </div>
                    <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                    <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox"></input>I agree to the license terms.</label></div>
                    </div>
                    <br></br>
                    <GoogleLogin
                     clientId="455721042123-9trboheb9utib5npgb42eruv5h7qt2cf.apps.googleusercontent.com"
                     buttonText="Connect with google"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     signedIn={true}
                     cookiePolicy={'single_host_origin'}
                     />
                    <div className="form-group"><button className="btn btn-primary btn-block bg-primary" type="submit">Sign In</button>
                    </div>
                    <a className="already" href="#">You already have an account? Login here.</a>
                </form>
            </div>
            </div>
        
        )
    }
}
