import React from 'react';
import { Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handlerSearch = this.handlerSearch.bind(this);
        this.handleChooseChange = this.handleChooseChange.bind(this);
        this.state = {
            order: "descricao"
        }
    }

    handlerSearch(produtos) {
        this.props.onSearch(produtos);
    }

    handleChooseChange(event) {
        this.setState({
            order: event.target.value
        })
    }

    render() {
        return (
            <Navbar
                className="mt-2 mb-2"
                sticky="top"
                expand="lg"
                variant="light"
                bg="light">

                <SearchBar
                    route="/produtos"
                    onSearch={this.handlerSearch}
                    order={this.state.order}
                />

                <Form.Group
                    className="m-1"
                >
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Ordenar Por</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            as="select"
                            size="lg"
                            value={this.state.order}
                            onChange={this.handleChooseChange}
                        >
                            <option value="id">Código</option>
                            <option value="descricao">Descrição</option>
                        </Form.Control>
                    </InputGroup>
                </Form.Group>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-nowrap">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link" disabled>Produtos Favoritos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}