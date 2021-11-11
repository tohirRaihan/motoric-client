import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CarDetails = ({car, setCar}) => {
    const { carId } = useParams();

    // GET car API
    useEffect(() => {
        fetch(`https://motoric.herokuapp.com/cars/${carId}`)
            .then((res) => res.json())
            .then((data) => setCar(data));
    }, [carId]);
    console.log(car);
    return (
        <Container>
            <Link to="/home" className="btn btn-sm btn-dark mb-3">
                Go Back Home
            </Link>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={car?.image} fluid />
                </Col>
                <Col xs={12} md={6}>
                    <h1>{car?.model}</h1>
                    <p className="text-muted">{car?.description}</p>
                    <p className="h1 fw-bold text-info">${car?.price}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default CarDetails;
