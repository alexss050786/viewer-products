import React from 'react';
import { Container, Form, Image, Button } from 'react-bootstrap';

import api from '../../services/api';

import camera from '../../assets/camera.svg'

export default class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            img: null,
            id: '',
            descricao: '',
            preview: null
        }
    }

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.img !== prevState.img) {
            this.setState({
                preview: this.state.img ? URL.createObjectURL(this.state.img) : null
            })
        }
    }

    handleImgChange(event) {
        this.setState({
            img: event.target.files[0]
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();

        data.append('imgSrc', this.state.img)
        data.append('id', this.state.id)
        data.append('descricao', this.state.descricao)

        const response = await api.post('/produto/cadastrar', data)

        console.log(response.data)
    }

    render() {
        return (
            <Container className="d-flex flex-fill justify-content-center align-items-center vh-100">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Label
                            className="d-flex justify-content-center align-items-center border-dark"
                            style={{
                                height: "200px",
                                width: "300px",
                                border: "1px dashed",
                                backgroundImage: `url(${this.state.preview})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer"
                            }}
                        >
                            <Form.Control
                                className="d-none"
                                type="file"
                                onChange={this.handleImgChange}
                            />
                            <Image
                                src={camera}
                                alt="Selecione uma Imagem"
                                style={{
                                    display: this.state.img ? "none" : ""
                                }}
                            />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Código"
                            value={this.state.id}
                            onChange={e => { this.setState({ id: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Descrição"
                            value={this.state.descricao}
                            onChange={e => { this.setState({ descricao: e.target.value }) }}
                        />
                    </Form.Group>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Container>
        );
    }
}