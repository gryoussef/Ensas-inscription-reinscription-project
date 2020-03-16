import React, { Component } from 'react';
import TextField, {  } from "material-ui/TextField";
import NativeSelect from '@material-ui/core/NativeSelect';
import { RaisedButton } from 'material-ui';
import InputLabel from '@material-ui/core/InputLabel';
export default class FourthStep extends Component {
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
                  
                  <h3> Etape 4 sur 4 :information scolaires/universitaires</h3>
                  <div style={divS}>
                 
                  <NativeSelect style={stylesS} defaultValue={values.Filiere} onChange={this.props.handleChange('filiere')}>
                        <option value="">Selectioner votre filiere</option>
                   </NativeSelect>

                   <NativeSelect style={styles} defaultValue={values.annee_Filiere} onChange={this.props.handleChange('annee_Filiere')}>
                        <option value="">Selectionez Votre Niveau</option>
                   </NativeSelect>
                   <br></br>
                   <NativeSelect style={styles} defaultValue={values.type_Bac} onChange={this.props.handleChange('type_Bac')}>
                        <option value="">Selectionez type de votre Bac</option>
                   </NativeSelect>
               
                
                   <NativeSelect style={styles}   defaultValue={values.annee_Bac} onChange={this.props.handleChange('annee_Bac')}>
                   <option value="">Selectionez l'annee de votre Bac</option>
                   </NativeSelect>
                   <NativeSelect style={styles}   defaultValue={values.mention} onChange={this.props.handleChange('mention')}>
                   <option value="">Selectionez votre mention du Bac</option>
                   </NativeSelect>
                    <br></br>
                   
                   <TextField style={styles} floatingLabelFixed="Lycée" placeholder="Nom de votre Lycée" floatingLabelText="Lycée" ></TextField>

                   <TextField style={styles} floatingLabelFixed="Délegation" placeholder="" floatingLabelText="Délegation"></TextField>
                   
                   <TextField style={styles} floatingLabelFixed="Académie" placeholder="" floatingLabelText="Académie"></TextField>

                   
                   </div>
                   


                   <br></br>
                   <RaisedButton  label="Back"  onClick={this.back} ></RaisedButton>
                   <RaisedButton label="Continue"  onClick={this.continue}></RaisedButton>
                  
               </React.Fragment>
        
       )
   }
}
const stylesPar={
    width:'350px'
}
const styles={
   marginLeft:'50px',
   marginBottom:'15px',
   width:'250px',
  
}
const stylesS={
    marginLeft:'50px',
    marginBottom:'15px',
    width:'400px',
   
 }
const divS={
   padding:'auto',
   margin:'50px'
}

