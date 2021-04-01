import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Content(props) {
    return (
        <div className='bear'>
            <Container className="" fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8}>
                    {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content
