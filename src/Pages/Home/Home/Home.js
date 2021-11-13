import React from 'react';
import Cars from '../../Shared/Cars/Cars/Cars';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <section className="features my-5">
                <Features />
            </section>

            <section className="buy-cars my-5">
                <h1 className="text-center mb-4">Buy Your Dream Car</h1>
                <Cars isHome={true} />
            </section>

            <section className="customer-reviews my-5">
                <h1 className="text-center mb-4">Customer Reviews</h1>
                <Reviews />
            </section>
            <Footer />
        </>
    );
};

export default Home;
