import React, { Component } from 'react'
import FirstStep from './FirstStep';
import SecondeStep from "./SecondeStep";
import ThirdStep from './ThirdStep';
import Success from './Success';
import FourthStep from './FourthStep';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
 class RegistrationForm extends Component {
    state={
        step:1,
        token:'',
        cin:'',
        cne:'',
        email:'',
        firstName_Fr:'',
        lastName_Fr:'',
        firstName_Ar:'',
        lastName_Ar:'',
        date_Naissance:'',
        lieu_Naissance:'',
        nationalite:'',
        telephone:'',
        address:'',
        nom_Prenom_Pere:'',
        profession_Pere:'',
        nom_Prenom_mere:'',
        profession_mere:'',
        adresse_parent:'',
        filiere:'',
        annee_Filiere:'',
        type_Bac:'',
        annee_Bac:'',
        lycee:'',
        mention:'',
        delegue:'',
        academie:'',
        diplome_precedant:'',
        etablissement_precedant:'',
        ville_precedant:''

    };
    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });
    }
    signedIn=()=>{
        return (this.state.token==='')?true:false;
    }
    
    //Fields CHange
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});
      
    }
    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        });
    }
    handleGoogleAuth=(input,value)=>{
        this.setState({[input]:value});
        console.log(input);
        console.log(value);
        
    }
    render() {
        const {step}=this.state;
        const {cin,cne,email,password}=this.state;
        const values_step1={cin,cne,email,password};
        const {firstName_Fr, lastName_Fr,firstName_Ar,nationalite, telephone,address, lastName_Ar,date_Naissance,lieu_Naissance}=this.state;
        const values_step2={firstName_Fr, lastName_Fr,firstName_Ar,nationalite, telephone,address, lastName_Ar,date_Naissance,lieu_Naissance};
        const {nom_Prenom_Pere,profession_Pere,nom_Prenom_mere,profession_mere,adresse_parent}=this.state;
        const values_step3={nom_Prenom_Pere,profession_Pere,nom_Prenom_mere,profession_mere,adresse_parent};

 
        switch (step) {
            case 1:
            return(
                <MuiThemeProvider>
                <FirstStep nextStep={this.nextStep} signedIn={this.signedIn} handleGoogleAuth={this.handleGoogleAuth} handleChange={this.handleChange} values={values_step1}></FirstStep>
                </MuiThemeProvider>

            )
            case 2:
                return(
                    <MuiThemeProvider>
                    <SecondeStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step2}></SecondeStep>
                    </MuiThemeProvider>
                );
            case 3:
                return(
                    <MuiThemeProvider>
                    <ThirdStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step3}></ThirdStep>
                    </MuiThemeProvider>
                );
            case 4:
                return(
                    <MuiThemeProvider>
                    <FourthStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step3}></FourthStep>
                    </MuiThemeProvider>
                );
            case 5:
                return(
                    <MuiThemeProvider>
                   <Success></Success>
                   </MuiThemeProvider>
                );
            
            
        }
  
    }
}
export default RegistrationForm ;