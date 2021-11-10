import {
    faCar,
    faCarAlt,
    faGasPump,
    faRoad,
    faShoppingBag,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = () => {
    return (
        <Card className="shadow h-100">
            <Card.Img
                height="232"
                variant="top"
                src="https://picsum.photos/id/661/356/212?blur"
            />
            <Card.Body>
                <Card.Title className="fw-bold">Awesome Class Model</Card.Title>
                <div className="course-price">
                    <span className="text-success fw-bold h2">$1222</span>
                </div>
                <Card.Text className="lead text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae, rem!
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center bg-white border-top-0 mb-3'>
                <div className="car-info d-flex justify-content-between text-danger mb-3">
                    <div className="condition">
                        <FontAwesomeIcon icon={faCarAlt} />
                        <span className="text-muted"> New</span>
                    </div>
                    <div className="max-speed">
                        <FontAwesomeIcon icon={faTachometerAlt} />
                        <span className="text-muted"> 300KM/h</span>
                    </div>
                    <div className="car-oil">
                        <FontAwesomeIcon icon={faGasPump} />
                        <span className="text-muted"> Petrol</span>
                    </div>
                    <div className="power-reserve">
                        <FontAwesomeIcon icon={faRoad} />
                        <span className="text-muted"> 260MI</span>
                    </div>
                </div>
                <ButtonGroup>
                    <Link className="btn btn-primary rounded-0" to="">
                        Buy Now
                    </Link>
                    <Button className="rounded-0" variant="dark">
                        <FontAwesomeIcon className="" icon={faShoppingBag} />
                    </Button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    );
};

export default Car;
