import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import CarDetails from '../CarDetails/CarDetails';
import PlaceOrderForm from '../PlaceOrderForm/PlaceOrderForm';

const PurchaseCar = () => {
    const [car, setCar] = useState({});
    const { carId } = useParams();

    // GET car by id API
    useEffect(() => {
        fetch(`https://motoric.herokuapp.com/cars/${carId}`)
            .then((res) => res.json())
            .then((data) => setCar(data));
    }, [carId]);

    return (
        <>
            <Navigation />
            <section className="car-details my-5">
                <CarDetails car={car} />
            </section>

            <section className="place-order">
                <PlaceOrderForm car={car} />
            </section>
        </>
    );
};

export default PurchaseCar;
