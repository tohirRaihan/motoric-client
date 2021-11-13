import React from 'react';
import Cars from '../../Shared/Cars/Cars/Cars';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const ExploreCars = () => {
    return (
        <>
            <Navigation />
            <section className="buy-cars my-5">
                <h1 className="text-center mb-4">Buy Your Dream Car</h1>
                <Cars isHome={false} />
            </section>
            <Footer />
        </>
    );
};

export default ExploreCars;
