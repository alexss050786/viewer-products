import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../components/Header/Header';
import Produto from '../../components/Produto/Produto';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            produtos: [],
        }
    }

    handleSearch(produtos) {
        this.setState({
            produtos
        })
    }

    render() {
        return (
            <Container>
                <Header
                    onSearch={this.handleSearch}
                />
                <Produto
                    value={this.state.produtos}
                />
            </Container>
        )
    }
}