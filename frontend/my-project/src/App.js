import React , {Component} from 'react';


import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';
import Home from './components/Home';



class App extends Component {

 
   
  render() {//display Data from API to HTML 
   
 

      return(
    
       <Router>
    <div>
     
    <ul>
    <li>  <Link to="/">Home</Link> </li>
    <li>  <Link to="/list">Books Lists</Link> </li>
    <li>  <Link to="/login">Login</Link> </li>
    <li>  <Link to="/register">Register</Link> </li>
    </ul>
    <Route  exact path="/" component={Home}/>
    <Route   path="/list" component={List}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/register" component={Register}/>    

    </div>

       </Router>
      
      
  );
      }
    }

export default App;
