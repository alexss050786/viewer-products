import React from 'react';
import { Modal, Button, Figure, Card } from 'react-bootstrap';

export default class ProdutoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            isOpen: false
        }
    }

    handleOpenModal() {
        this.setState({
            isOpen: true
        })
    }

    handleCloseModal() {
        this.setState({
            isOpen: false
        })
    }

    render() {
        const img = `http://localhost:3333/files/${this.props.produto.imgSrc}`;
        return (
            <>
                <Card
                    className="mb-4"
                    onClick={this.handleOpenModal}
                    style={{
                        cursor: "pointer"
                    }}
                >
                    <Card.Img src={img} alt={this.props.produto.imgSrc} />
                    <Card.Footer>
                        <Card.Title>{this.props.produto.id}</Card.Title>
                        <Card.Text>{this.props.produto.descricao}</Card.Text>
                    </Card.Footer>
                </Card>
                <Modal
                    show={this.state.isOpen}
                    onHide={this.handleCloseModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="modal-90w"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <strong>{this.props.produto.id}</strong> - <span>{this.props.produto.descricao}</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Figure>
                            <Figure.Image src={img} />
                        </Figure>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModal}>Fechar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}