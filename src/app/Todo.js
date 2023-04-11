import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

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
    let item = { valor: this.state.valorInput, status: 0 };
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
    this.setState({ showModal: true, indexOfItem: index, valorInputItem: this.state.listaItems[index].valor });
  }

  handleEditItemInput(evt) {
    let valor = evt.target.value;
    this.setState({ valorInputItem: valor })
  }

  handleClose(save) {
    if (save) {
      let listaAux = this.state.listaItems;
      listaAux[this.state.indexOfItem].valor = this.state.valorInputItem;
      this.setState({ showModal: false, listaItems: listaAux });
    } else {
      this.setState({ showModal: false });
    }
  }

  handleStatus(index) {
    let listaAux = this.state.listaItems;
    listaAux[index].status === 0 ? listaAux[index].status = 1 : listaAux[index].status = 0;
    this.setState({ listaItems: listaAux });
  }

  render() {
    let finishedItems = this.state.listaItems.map((it, index) => {
      if (it.status === 1) {
        return <li class="list-group-item">{it.valor}
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-warning ms-5" onClick={() => this.handleEdit(index)}>Edit</button>
          <button type="submit" class="btn btn-danger ms-5" onClick={() => this.handleDeleteItem(index)}>Remover</button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-success ms-5" onClick={() => this.handleStatus(index)}>Desconcluir</button>
        </li>
      }
    });

    let unfinishedItems = this.state.listaItems.map((it, index) => {
      if (it.status === 0) {
        return <li class="list-group-item">{it.valor}
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-warning ms-5" onClick={() => this.handleEdit(index)}>Edit</button>
          <button type="submit" class="btn btn-danger ms-5" onClick={() => this.handleDeleteItem(index)}>Remover</button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" class="btn btn-success ms-5" onClick={() => this.handleStatus(index)}>Concluída</button>
        </li>
      }
    });

    return (
      <div>
        <div class="mb-3 row">
          <div class="col-md-6 col-xs-12">
            <label for="exampleInputEmail1" class="form-label">Insere uma tarefa</label>
            <input value={this.state.valorInput} onChange={(evt) => this.handleInputChange(evt)} class="form-control" />
            <button type="submit" class="btn btn-primary mt-2" onClick={() => this.handleAddItem()}>Submit</button>
          </div>

        </div>
        <div class="row">
          <div class="col-md-6 col-xs-12">

            <Accordion defaultActiveKey={['0', '1']}  alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Tarefas por Fazer</Accordion.Header>
                <Accordion.Body>
                  <ul class="list-group">
                    {unfinishedItems}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Tarefas concluídas</Accordion.Header>
                <Accordion.Body>
                  <ul class="list-group">
                    {finishedItems}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <Modal show={this.state.showModal} onHide={() => this.handleClose(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!
            <input value={this.state.valorInputItem} onChange={(evt) => {
              this.handleEditItemInput(evt)
            }} class="form-control" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.handleClose(true)}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => this.handleClose(false)}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Todo;