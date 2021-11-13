import React from 'react';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel/ReviewCarousel';

const Reviews = () => {
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return <ReviewCarousel slides={slides} />;
};

export default Reviews;
