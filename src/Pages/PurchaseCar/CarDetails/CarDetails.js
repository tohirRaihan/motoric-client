import {
    faCarAlt,
    faGasPump,
    faRoad,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarDetails = ({ car }) => {
    const {
        image,
        model,
        description,
        price,
        condition,
        maxSpeed,
        fuelType,
        maxTravelDistance
    } = car;
    return (
        <Container>
            <Link to="/home" className="btn btn-sm btn-dark mb-3">
                Go Back Home
            </Link>
            <Row className='align-items-center'>
                <Col xs={12} md={6}>
                    <Image src={image} fluid />
                </Col>
                <Col xs={12} md={6}>
                    <h1>{model}</h1>
                    <p className="text-muted">{description}</p>
                    <p className="h1 fw-bold text-info">${price}</p>
                    <div className="car-info d-flex justify-content-between text-danger h3 mt-5">
                        <div className="condition">
                            <FontAwesomeIcon icon={faCarAlt} />
                            <span className="text-muted"> {condition}</span>
                        </div>
                        <div className="max-speed">
                            <FontAwesomeIcon icon={faTachometerAlt} />
                            <span className="text-muted"> {maxSpeed}KM/h</span>
                        </div>
                        <div className="car-oil">
                            <FontAwesomeIcon icon={faGasPump} />
                            <span className="text-muted"> {fuelType}</span>
                        </div>
                        <div className="power-reserve">
                            <FontAwesomeIcon icon={faRoad} />
                            <span className="text-muted">
                                {' '}
                                {maxTravelDistance}MI
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CarDetails;
