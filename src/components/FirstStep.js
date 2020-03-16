import React, { Component } from 'react';
import MuiThemeProvider, { theme } from "material-ui/styles/MuiThemeProvider";
import TextField, {  } from "material-ui/TextField";
import GoogleLogin from 'react-google-login';
import { RaisedButton } from 'material-ui';
import '../App.css';
 class FirstStep extends Component {
     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     
     responseGoogle = (response) => {
         console.log(response);

        this.props.handleGoogleAuth('email',response.profileObj.email);
        this.props.handleGoogleAuth('lastName_Fr',response.profileObj.familyName);
        this.props.handleGoogleAuth('firstName_Fr',response.profileObj.givenName);
        this.props.handleGoogleAuth('token',response.tokenObj.access_token);
       // this.props.handleGoogleAuth('firstName_Fr',response.profileObj.;
      }
    render() {
        const {values} = this.props;
        return (
           <React.Fragment>
                  <h3> Etape 1 sur 4 :information de base</h3>
                    <div style={divS}>
                    <TextField errorText="" style={styles} floatingLabelFixed="CIN" floatingLabelText="CIN" defaultValue={values.cin} onChange={this.props.handleChange('cin')}></TextField>

                    <TextField style={styles} floatingLabelFixed="CNE" floatingLabelText="CNE" defaultValue={values.cne} onChange={this.props.handleChange('cne')}></TextField>
                    <br></br>
                    <TextField style={styles} floatingLabelFixed="Email" floatingLabelText="Email" defaultValue={values.email} onChange={this.props.handleChange('email')}></TextField>

                    <TextField style={styles}  floatingLabelFixed="Email Confirmation" floatingLabelText="Email Confirmation" defaultValue={values.email} ></TextField>

                    <br></br>
              

                         <TextField type="password" style={styles}  floatingLabelFixed="entrer mot de passe" floatingLabelText="entrer mot de passe"  ></TextField>
     
                         <TextField  type="password" style={styles} floatingLabelFixed="Confirmer mot de passe" floatingLabelText="Confirmer mot de passe" ></TextField>
                    </div>
                  
                    <br></br>
                    <GoogleLogin
                     clientId="455721042123-9trboheb9utib5npgb42eruv5h7qt2cf.apps.googleusercontent.com"
                     buttonText="Sinscrire avec Google"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     signedIn={true}
                     cookiePolicy={'single_host_origin'}
                     />
                    <br></br>
 
                    <RaisedButton disabled={true} label="Back"  ></RaisedButton>
                    <RaisedButton  label="Continue" disabled={this.props.signedIn()} onClick={this.continue} ></RaisedButton>
                    </React.Fragment>
         
        )
    }
}
const styles={
    marginLeft:'50px'
}
const divS={
    padding:'auto',
    margin:'30px'
}
export default FirstStep;