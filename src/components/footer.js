import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className="dog">
            <Container>
                <Row className="justify-content-between p-3 footer">
                    <Col className="p-0" md={3} sm={12}>
                        Nick Damario
                        </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site created by Nick Damario
                        </Col>
                </Row>
            </Container>

        </footer>
        
    )
}

export default Footer
