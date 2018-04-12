import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import _ from 'lodash'
 
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
    value: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnRandomSubject = this.returnRandomSubject.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("Email change Clicked");
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log("Email Form Updated");
  }

  returnRandomSubject(e){
    var rawData = data;
    var randSubject =  _.sample(rawData);
    console.log("random subject selected - ", randSubject);
   
     this.setState(
      {subjectTransform : randSubject}
     );
  };

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
          <input type="submit" value="Randomise Subject" onClick={this.returnRandomSubject} />
          <h2>Subject Selected:</h2>
          <h1>{this.state.subjectTransform}</h1>
        </form>
  <div>
       <form>
          <label>
          <h2>
           Send and Share Subject
          </h2>
            <input type="text" name="share" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" onClick={this.handleSubmit} value="Send" />
        </form>
    </div>
      </div>
    );
  }
}
export default App;
