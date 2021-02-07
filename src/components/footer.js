import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function footer() {
    return (
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Nick Damario
                        </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Nick Damario
                        </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default footer
