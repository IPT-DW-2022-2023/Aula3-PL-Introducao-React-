import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <li class="list-group-item">{this.props.item.valor}
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-warning ms-5" onClick={() => this.handleEdit()}>Edit</button>
        <button type="submit" class="btn btn-danger ms-5" onClick={() => this.props.handleDeleteItem()}>Remover</button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-success ms-5" onClick={() => this.props.handleStatus()}>{this.props.item.status===0?"Concluir":"Desmarcar"}</button>
      </li>
    );
  }
}

export default Item;