import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import _ from 'lodash'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,

  
  FacebookIcon,
  TwitterIcon,
  VKIcon,
  TelegramIcon,
} from 'react-share';

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

//render content
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
          <button onClick={this.returnRandomSubject}><h2>CHANGE THE SUBJECT</h2></button>
          <h2>Your Subject is</h2>
          <h1 className="App-subject">{this.state.subjectTransform}</h1>
        </form>
  <div>
  <h2>Share It!</h2>
  <div className="App-header">
  <FacebookShareButton
            url="changethesubject.com"
            quote={this.state.subjectTransform}
            className="Demo__some-network__share-button alignLeft">
            <FacebookIcon
              size={120}
              round />
  </FacebookShareButton>

          <TelegramShareButton
            url="changethesubject.com"
            title={this.state.subjectTransform}
            className="Demo__some-network__share-button alignLeft">
            <TelegramIcon size={120} round />
          </TelegramShareButton>

           <TwitterShareButton
            url="changethesubject.com"
            title={this.state.subjectTransform}
            className="Demo__some-network__share-button alignLeft">
            <TwitterIcon
              size={120}
              round />
          </TwitterShareButton>

           <VKShareButton
            url="changethesubject.com"
            title="Change the Subject"
            description={this.state.subjectTransform}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button alignLeft">
            <VKIcon
              size={120}
              round />
          </VKShareButton>
   </div>     
       {/* <form>
          <label>Share via Email</label>
            <input type="text" name="share" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" onClick={this.handleSubmit} value="Send" />
        </form> */}
    </div>

     <div>
       <form>
          <label>
          <h2>
           Submit your own subject to our list
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
