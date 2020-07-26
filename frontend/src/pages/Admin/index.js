import React from 'react';
import { Container } from 'react-bootstrap';

import ProdutoCadastro from '../../components/Produto/Cadastro';

export default class Admin extends React.Component {

    render() {
        return (
            <Container>
                <ProdutoCadastro />
            </Container>
        )
    }
}