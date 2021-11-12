import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { faBiking, faCarAlt, faTools } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <Container className='text-white text-center'>
            <Row>
                <Col md={4} className='bg-danger p-5'>
                    <FontAwesomeIcon className='h1 mb-4' icon={faCarAlt} />
                    <h3 className='fw-bold h4 mb-3'>Buy and Sale Vehiclese</h3>
                    <p className='fw-light'>
                        We buy and sale barand new car and also used car of any
                        brand
                    </p>
                </Col>
                <Col md={4} className='bg-primary p-5'>
                    <FontAwesomeIcon className='h1 mb-4' icon={faBiking} />
                    <h3 className='fw-bold h4 mb-3'>Test Driving</h3>
                    <p className='fw-light'>
                        You can order a test drive for 5 hours before actually buy the car
                    </p>
                </Col>
                <Col md={4} className='bg-dark p-5'>
                    <FontAwesomeIcon className='h1 mb-4' icon={faTools} />
                    <h3 className='fw-bold h4 mb-3'>Vehicles Servicing</h3>
                    <p className='fw-light'>
                        We give after sale servicing and in total we give five servicing
                    </p>
                </Col>

            </Row>
        </Container>
    );
};

export default Features;
