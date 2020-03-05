import React from 'react';
import ReactDOM from 'react-dom';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      Email:'',
      password:'',

    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
        <div className="loginform">
      <form>
      <h1>Log in</h1>
      <p>Enter your Email:</p>
      <input
        type='text'
        name='Email'
        onChange={this.myChangeHandler}
      />
      <input
        type='text'
        name='passwprd'
        onChange={this.myChangeHandler}
      />
     

<input
        type='submit'
      />
      </form>
      </div>
    );
  }
}

export default Login;

