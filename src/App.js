import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Connexion  from "./components/Connexion";
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';
import RegistrationForm  from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
     
      <Route exact path="/inscription" render={()=>(
             <div className="StepForm">
           
               <RegistrationForm></RegistrationForm>
           </div>
        
        )}></Route>
      <Route path="/" component={Connexion}></Route>
      <Route path="/connexion" component={Connexion}></Route>
    </Switch>

    </Router>

    
    </div>

    
  );
}


export default App;
