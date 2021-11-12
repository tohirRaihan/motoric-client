import {
    faCar,
    faCarAlt,
    faGasPump,
    faRoad,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner text-light">
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col xs={12} md={6}>
                        <h1 className="fw-bold display-5">STEEDA LEAF SV</h1>
                        <p className="lead">
                            DISCOVER THE INSTANT ACCELERATION, INCREDIBLE RANGE
                            AND NIMBLE HANDLING OF THE ALL-ELECTRIC STEEDA LEAF
                        </p>
                        <ButtonGroup>
                            <Link
                                className="btn btn-primary rounded-0"
                                to=''
                            >
                                ORDER TEST DRIVE
                            </Link>
                            <Button className="rounded-0" variant="dark">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCar}
                                />
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col xs={12}>
                        <div className="car-info d-none d-md-flex justify-content-between h1">
                            <div className="condition">
                                <FontAwesomeIcon icon={faCarAlt} />
                                <span className=""> New</span>
                                <p className='lead m-0 text-center'>Car Condition</p>
                            </div>
                            <div className="max-speed">
                                <FontAwesomeIcon icon={faTachometerAlt} />
                                <span className=""> 300KM/h</span>
                                <p className='lead m-0 text-center'>Maximum Speed</p>
                            </div>
                            <div className="car-oil">
                                <FontAwesomeIcon icon={faGasPump} />
                                <span className=""> Petrol</span>
                                <p className='lead m-0 text-center'>Fuel Type</p>
                            </div>
                            <div className="power-reserve">
                                <FontAwesomeIcon icon={faRoad} />
                                <span className=""> 259MI</span>
                                <p className='lead m-0 text-center'>Power Reserve</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
