import React , {Component} from 'react';
import caroselfoto from '../img/caroselfoto.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './List';



class Home extends Component{

    constructor(props) {
        super(props);
        
      }

render(){
    return(
<div>
<img src={caroselfoto}></img>



<Router>
<div>
 
<Link to="/list">All Books Lists you can find here...</Link>
<Route   path="/list" component={List}/>


</div>


   </Router>
   </div>
  

);

}


}

export default Home;