import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import _ from 'lodash'
 
function randomSubject(){
  const dataArr = [data];
  var randomSubjectValue =  _.sample(dataArr)
  // const rand = dataArr[Math.floor(Math.random() * dataArr.length)];
  console.log(randomSubjectValue);
  // this.state = {rand : rand};
}

// function EmailAdd(){
//   var emailAddress;
//   this.state = {emailAddress : emailAddress }
// }

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.setState =({randomSubjectValue : 'test'});

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Change the Subject</h1>
        </header>
        <p className="App-intro">
          An app to send and share random subjects with your friends
        </p>
        <form>
          <input type="submit" value="Randomise Subject" onClick={randomSubject} />
          <h2>Subject Selected: {this.state.randomSubjectValue}</h2>
        </form>
  <div>
       <form>
          <label>
          <h2>
           Send and Share Subject
          </h2>
            <input type="text" name="share" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Send" />
        </form>
    </div>
      </div>
    );
  }
}
export default App;
