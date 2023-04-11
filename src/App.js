import React from 'react';
import './App.css';
import Todo from './app/Todo';
import Hello from './app/Hello';

class App extends React.Component {
  state = {
    pessoa: {
      nome: "João",
      idade: 24
    }
  }

  handle2() {
    let person = this.state.pessoa;
    person.idade++;

    this.setState({ pessoa: person });
  }

  render() {
    return (
      <div className="custom-page container">
        <div>
          <Hello person={this.state.pessoa} mudarIdade={()=>this.handle2()} />
        </div>
      </div>
    );
  }
}

export default App;
