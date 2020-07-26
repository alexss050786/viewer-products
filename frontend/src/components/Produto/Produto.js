import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProdutoItem from './ProdutoItem';

export default class Produto extends React.Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    {
                        this.props.value.map((produto, index) => {
                            return (
                                <Col
                                    md="4"
                                    key={produto.id}
                                >
                                    <ProdutoItem produto={produto} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}