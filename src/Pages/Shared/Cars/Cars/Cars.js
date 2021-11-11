import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://motoric.herokuapp.com/cars')
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <Spinner
                className="d-block mx-auto mt-5"
                animation="border"
                varient="primary"
            />
        );
    }
    return (
        <Container>
            <Row className="g-4">
                {cars.map((car) => (
                    <Col key={car._id} xs={12} sm={6} md={4}>
                        <Car car={car} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Cars;
