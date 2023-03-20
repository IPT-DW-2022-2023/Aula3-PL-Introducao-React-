import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaItems: [],
      valorInput: '',
      showModal: false,
      indexOfItem: 0,
      valorInputItem: ''
    }
  }

  handleInputChange(evt) {
    this.setState({ valorInput: evt.target.value });
  }

  handleAddItem() {
    let item = { valor: this.state.valorInput };
    let listaAux = this.state.listaItems;
    listaAux.push(item);

    this.setState({ listaItems: listaAux, valorInput: '' });
  }

  handleDeleteItem(index) {
    let lista = this.state.listaItems;
    lista.splice(index, 1);
    this.setState({ listaItems: lista });
  }

  handleEdit(index) {
    this.setState({ showModal: true, indexOfItem: index, valorInputItem: this.state.listaItems[index].valor});
  }

  handleEditItemInput(evt){
    let valor = evt.target.value;
    let listaAux = this.state.listaItems;
    listaAux[this.state.indexOfItem].valor = valor;

    this.setState({listaItems: listaAux, valorInputItem: valor})
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    let items = this.state.listaItems.map((it, index) => {
      return <li class="list-group-item">{it.valor}
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-warning ms-5" onClick={() => this.handleEdit(index)}>Edit</button>
        <button type="submit" class="btn btn-danger ms-5" onClick={() => this.handleDeleteItem(index)}>Remover</button>
      </li>
    });

    return (
      <div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Insere uma tarefa</label>
          <input value={this.state.valorInput} onChange={(evt) => this.handleInputChange(evt)} class="form-control" />
          <button type="submit" class="btn btn-primary" onClick={() => this.handleAddItem()}>Submit</button>
        </div>
        <ul class="list-group">
          {items}
        </ul>
        <Modal show={this.state.showModal} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!
            <input value={this.state.valorInputItem} onChange={(evt) => {
              this.handleEditItemInput(evt)
            }} class="form-control" />
            </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={() => this.handleClose()}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Todo;