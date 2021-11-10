import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Car from '../Car/Car';

const Cars = () => {
    return (
        <Container>
            <Row className='g-4'>
                <Col xs={12} sm={6} md={4}>
                    <Car />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Car />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Car />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Car />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Car />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Car />
                </Col>
            </Row>
        </Container>
    );
};

export default Cars;
