import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let age = Math.floor(Math.random()*100);
    return (
      <>
        <h4>Olá {this.props.person.nome} que tem {this.props.person.idade} anos</h4>
        <button type="submit" class="btn btn-success ms-5" onClick={() => this.props.mudarIdade(age)}>Idade++</button>
      </>
    );
  }
}

export default Hello;