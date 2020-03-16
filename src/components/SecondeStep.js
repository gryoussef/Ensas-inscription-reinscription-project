import React, { Component } from 'react';
import MuiThemeProvider, { theme } from "material-ui/styles/MuiThemeProvider";
import TextField, {  } from "material-ui/TextField";
import NativeSelect from '@material-ui/core/NativeSelect';
import { RaisedButton } from 'material-ui';
 class SecondeStep extends Component {
     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     back=e=>{
        e.preventDefault();
        this.props.prevStep();
     }
     
     
    render() {
        const {values} = this.props;
        return (
           
                <React.Fragment>
                  <h3> Etape 2 sur 4 :information personnel</h3>
                   <div style={divS}>
                    <TextField style={styles} floatingLabelFixed="Nom" floatingLabelText="Nom" defaultValue={values.lastName_Fr} onChange={this.props.handleChange('lastName_Fr')}></TextField>
                    <TextField style={styles} floatingLabelFixed="Prenom" floatingLabelText="Prenom" defaultValue={values.firstName_Fr} onChange={this.props.handleChange('firstName_Fr')}></TextField><br></br>
                    
                    <TextField style={styles} floatingLabelFixed=" الاسم العاىلي" floatingLabelText="الاسم العاىلي" defaultValue={values.lastName_Ar} onChange={this.props.handleChange('lastName_Ar')}></TextField>

                    <TextField style={styles} floatingLabelFixed="الاسم الشخصي" floatingLabelText="الاسم الشخصي" defaultValue={values.firstName_Ar} onChange={this.props.handleChange('firstName_Ar')}></TextField><br></br>
                   
                    <TextField type="date" style={styles} floatingLabelFixed="Date Naissance" floatingLabelText="Date Naissance" defaultValue={values.date_Naissance} onChange={this.props.handleChange('date_Naissance')}></TextField>

                    <TextField style={styles}  floatingLabelFixed="Lieu Naissance" floatingLabelText="Lieu Naissance" defaultValue={values.lieu_Naissance}></TextField>
                    
                    <br></br>
                    <NativeSelect style={styles}>
                         <option value="">Nationalite</option>
                        <option value="">Marocain</option>
                        <option value="">Etrange</option>
                    </NativeSelect>

                    <TextField style={styles} floatingLabelFixed="Telephone" placeholder="+212" floatingLabelText="Telephone"></TextField><br></br>

                    <TextField style={styles} floatingLabelFixed="Adresse" floatingLabelText="Adresse" ></TextField><br></br>
                    </div>
                    


                    <br></br>
                    <RaisedButton  label="Back"  onClick={this.back} ></RaisedButton>
                    <RaisedButton label="Continue"  onClick={this.continue}></RaisedButton>
                   
                </React.Fragment>
         
        )
    }
}
const styles={
    marginLeft:'50px',
    width:'250px',
   
}
const divS={
    padding:'auto',
    margin:'30px'
}

export default SecondeStep;