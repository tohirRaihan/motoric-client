import {
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
import './Car.css';

const Car = ({car}) => {
    const {_id, condition, description, image, maxSpeed, maxTravelDistance, model, fuelType, price} = car;
    return (
        <Card className="shadow h-100">
            <Card.Img
                height="200"
                variant="top"
                src={image}
            />
            <Card.Body>
                <div className="price-tag text-end">
                    <p class="car-price fw-normal">${price} р.</p>
                </div>
                <Card.Title className="fw-bold">{model}</Card.Title>
                <Card.Text className="text-muted fw-light">
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center bg-white border-top-0 mb-3'>
                <div className="car-info d-flex justify-content-between text-danger mb-3">
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
                        <span className="text-muted"> {maxTravelDistance}MI</span>
                    </div>
                </div>
                <ButtonGroup>
                    <Link className="btn btn-primary rounded-0" to={`/purchase/${_id}`}>
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
