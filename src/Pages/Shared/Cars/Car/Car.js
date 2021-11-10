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

const Car = ({car}) => {
    const {_id, condition, description, image, maxSpeed, maxTravelDistance, model, oilType, price} = car;
    return (
        <Card className="shadow h-100">
            <Card.Img
                height="232"
                variant="top"
                src={image}
            />
            <Card.Body>
                <Card.Title className="fw-bold">{model}</Card.Title>
                <div className="course-price">
                    <span className="text-success fw-bold h2">${price}</span>
                </div>
                <Card.Text className="lead text-muted">
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
                        <span className="text-muted"> {oilType}</span>
                    </div>
                    <div className="power-reserve">
                        <FontAwesomeIcon icon={faRoad} />
                        <span className="text-muted"> {maxTravelDistance}MI</span>
                    </div>
                </div>
                <ButtonGroup>
                    <Link className="btn btn-primary rounded-0" to={`/placeorder/${_id}`}>
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
