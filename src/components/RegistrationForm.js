import React, { Component } from 'react'
import FirstStep from './FirstStep';
import SecondeStep from "./SecondeStep";
import ThirdStep from './ThirdStep';
import Success from './Success';
import FourthStep from './FourthStep';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Steps, Button, message } from 'antd';
import TestStep from './TestSep'
const Step = Steps.Step;
 class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        current:0,
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
      }
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

    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
      render() {
        const { current } = this.state;
        const {cin,cne,email,password}=this.state;
        const values_step1={cin,cne,email,password};
        const {firstName_Fr, lastName_Fr,firstName_Ar,nationalite, telephone,address, lastName_Ar,date_Naissance,lieu_Naissance}=this.state;
        const values_step2={firstName_Fr, lastName_Fr,firstName_Ar,nationalite, telephone,address, lastName_Ar,date_Naissance,lieu_Naissance};
        const {nom_Prenom_Pere,profession_Pere,nom_Prenom_mere,profession_mere,adresse_parent}=this.state;
        const values_step3={nom_Prenom_Pere,profession_Pere,nom_Prenom_mere,profession_mere,adresse_parent};

        const steps = [{
          title: 'First',
          content:<MuiThemeProvider>
          <FirstStep nextStep={this.nextStep} signedIn={this.signedIn} handleGoogleAuth={this.handleGoogleAuth} handleChange={this.handleChange} values={values_step1}></FirstStep>
          </MuiThemeProvider>,
        }, {
          title: 'Second',
          content: <MuiThemeProvider>
          <SecondeStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step2}></SecondeStep>
          </MuiThemeProvider>,
        }, {
          title: 'Last',
          content:  <MuiThemeProvider>
          <ThirdStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step3}></ThirdStep>
          </MuiThemeProvider>,
        },
        {
          title: 'Last',
          content:  <MuiThemeProvider>
          <FourthStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step3}></FourthStep>
          </MuiThemeProvider>,
        },
        {
          title: 'Last',
          content: <MuiThemeProvider>
          <Success></Success>
          </MuiThemeProvider>,
        }];


        return (
         
         <div className="form" style={ formStyle}>
            <Steps current={current} >
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>

            <div className="steps-content"> {
            steps[this.state.current].content
            }</div>
            <div className="steps-action">
            {
                this.state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }

              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }

              
            </div>
          </div>
        );
      }
  
}

export default RegistrationForm ;
const formStyle={
marginLeft:'300px',
width:'65%'
}
