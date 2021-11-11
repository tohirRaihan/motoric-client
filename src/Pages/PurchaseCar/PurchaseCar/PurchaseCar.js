import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import CarDetails from '../CarDetails/CarDetails';

const PurchaseCar = () => {
    return (
        <>
            <Navigation />
            <section className="car-details my-5">
                <CarDetails />
            </section>
        </>
    );
};

export default PurchaseCar;
