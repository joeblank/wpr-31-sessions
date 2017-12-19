import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/FlatButton';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionData: {},
      name: ''
    }
    this.name = this.name.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  name(e) {
    this.setState({
      name: e.target.value
    })
  }

  submitName() {
    axios.put('/add_name/' + this.state.name)
    .then(res => {
      this.setState({
        sessionData: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <p>Name:</p>
        <TextField 
          onChange={this.name}
          hintText='What is your name?'/>
          <Button onClick={this.submitName}>Submit</Button>
          <br /><hr /><br /><br /><br /><br />
          <p>{JSON.stringify(this.state.sessionData)}</p>
      </div>
    );
  }
}

export default App;
