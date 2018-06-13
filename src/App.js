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

    deleteCharHandler = (index) => {
        let text = this.state.inputText.split('');
        text.splice(index, 1);
        let updatedText = text.join('');
        this.setState({inputText: updatedText});
    }


  render() {
        const CharList = this.state.inputText.split('').map((smb, index) =>{
            return <Char
                symbol={smb}
                key={index}
                remove={() => this.deleteCharHandler(index)}></Char>
        });

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputChangeHandler(event)} value={this.state.inputText}/>
          <p>{this.state.inputText}</p>
          <Validation lenght={this.state.inputText.length}></Validation>
          {CharList}
      </div>
    );
  }
}

export default App;
