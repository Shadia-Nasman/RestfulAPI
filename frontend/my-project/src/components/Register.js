import React from 'react';
import ReactDOM from 'react-dom';



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname:'',
      age: null,
      Email:'',
      adress:'',

    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
        <div className="registerform">
      <form>
      <h1>Hello {this.state.fname} {this.state.lname}</h1>
      <p>First name:</p>
      <input
        type='text'
        name='fname'
        onChange={this.myChangeHandler}
      />
       <p> Last name:</p>
      <input
        type='text'
        name='lname'
        onChange={this.myChangeHandler}
      />
        <p> Age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
        <p> Email:</p>
      <input
        type='text'
        name='Email'
        onChange={this.myChangeHandler}
      />
        <p> Adress:</p>
      <input
        type='text'
        name='adress'
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

export default Register;

