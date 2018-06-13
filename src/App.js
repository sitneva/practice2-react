import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state = {
        inputText: ''
    }

    inputChangeHandler = (event) => {
        this.setState({inputText: event.target.value})
    }



  render() {
        const CharList = this.state.inputText.split('');

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputChangeHandler(event)}/>
          <p>{this.state.inputText}</p>
          <Validation lenght={this.state.inputText.length}></Validation>
          <Char symbol="a"></Char>
      </div>
    );
  }
}

export default App;