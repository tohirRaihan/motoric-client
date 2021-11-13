import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://motoric.herokuapp.com/reviews/`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <Carousel variant="dark" className="test-carousel">
            {reviews.map((review) => (
                <Carousel.Item>
                    <Container className="pb-5">
                        <Row className="justify-content-center text-center">
                            <Col md={6}>
                                <figure className="text-center">
                                    <FontAwesomeIcon
                                        className="review-quote-icon text-muted h1"
                                        icon={faQuoteRight}
                                    />
                                    <blockquote className="blockquote">
                                        <p>{review.review}</p>

                                        <Rating
                                            className="text-warning"
                                            initialRating={review.rating}
                                            readonly
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    icon={farStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                />
                                            }
                                        />
                                    </blockquote>

                                    <figcaption className="blockquote-footer">
                                        {review.userName}{' '}
                                        <cite title="Source Title">
                                            ({review.designation})
                                        </cite>
                                    </figcaption>
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Reviews;
