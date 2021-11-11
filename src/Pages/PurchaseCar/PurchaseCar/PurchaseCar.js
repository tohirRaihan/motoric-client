import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import CarDetails from '../CarDetails/CarDetails';
import PlaceOrderForm from '../PlaceOrderForm/PlaceOrderForm';

const PurchaseCar = () => {
    const [car, setCar] = useState({});

    return (
        <>
            <Navigation />
            <section className="car-details my-5">
                <CarDetails car={car} setCar={setCar} />
            </section>

            <section className="place-order">
                <PlaceOrderForm car={car} />
            </section>
        </>
    );
};

export default PurchaseCar;
