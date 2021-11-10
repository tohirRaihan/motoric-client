import React from 'react';
import Cars from '../../Shared/Cars/Cars/Cars';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <section className="buy-cars my-5">
                <h1 className='text-center'>Buy Your Dream Car</h1>
                <Cars />
            </section>
        </>
    );
};

export default Home;
