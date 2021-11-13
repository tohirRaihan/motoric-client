import React, { useEffect } from 'react';
import { useState } from 'react';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel/ReviewCarousel';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    // GET orders API
    useEffect(() => {
        fetch(`https://motoric.herokuapp.com/reviews/`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    console.log(reviews);

    return <ReviewCarousel reviews={reviews} />;
};

export default Reviews;
