import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import _ from 'lodash'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
 
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
    value: '',
    subjectTransform: ''
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
    e.preventDefault();
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
        <i className="fa fa-meh-o fa-5x App-logo" aria-hidden="true"></i>
          <h1 className="App-title">Change the Subject</h1>
        </header>
        <p className="App-intro">
        Send and share random subjects with your friends
        </p>
        <form>
          <input type="submit" value="PUSH THE BUTTON" onClick={this.returnRandomSubject} />
          <h2>Your Subject is</h2>
          <h1 className="App-subject">{this.state.subjectTransform}</h1>
        </form>
  <div>
  <h2>Share Subject</h2>
  <i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i>
          <i className="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
          <i className="fa fa-vk fa-4x" aria-hidden="true"></i>
          <i className="fa fa-telegram fa-4x" aria-hidden="true"></i>
       <form>
          <label>Share via Email</label>
            <input type="text" name="share" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" onClick={this.handleSubmit} value="Send" />
        </form>
    </div>

     <div>
       <form>
          <label>
          <h2>
           Submit your own subject for our list
          </h2>
            <input type="text" name="addSubject" value={this.state.addSubject} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
      </div>
    );
  }
}
export default App;
