import React from 'react';
import './App.css';
import Nav from './nav';
import Contacts from './Contact';
import About from './About';
import Projects from './Projects';
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';

import Api from './Api';

function App() {
  return (
    <Router>

    
    <div className="App">
     <Nav/>
     <Switch>
     <Route path="/" exact component={Home}></Route>
     <Route path="/about" component={About}></Route>
     <Route path="/contact" component={Contacts}></Route>
     <Route path="/projects" component={Projects}></Route>
     </Switch>
     <div className="maintext">
     <h1>
       Tim Silén
     </h1>
     <h3>
     Front End Developer / DJ / Producer 
     </h3>
     </div>
     <Api />
    </div>
    </Router>
    
  );
}
const Home = ()=>(
  <div>

  </div>
);



export default App;
