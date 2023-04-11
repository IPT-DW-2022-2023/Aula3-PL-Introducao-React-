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

  handle2(idade, nome) {
    let person = this.state.pessoa;
    person.idade = idade;
    person.nome = nome;

    this.setState({ pessoa: person });
  }

  render() {
    let nome = this.state.pessoa.nome + ".";
    return (
      <div className="custom-page container">
        <div>
          <Hello person={this.state.pessoa} mudarIdade={(idade) => this.handle2(idade, nome)} />
        </div>
      </div>
    );
  }
}

export default App;
