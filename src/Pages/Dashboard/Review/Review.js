import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Rating from 'react-rating';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [rating, setRating] = useState(0);
    const { user } = useAuth();
    const designationRef = useRef();
    const reviewRef = useRef();

    const handleReview = (event) => {
        event.preventDefault();
        const newReview = {
            designation: designationRef.current.value,
            review: reviewRef.current.value,
            rating: rating,
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email
        };

        // Create New Review API
        fetch('https://motoric.herokuapp.com/reviews', {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Review added successfully!');
                    event.target.reset();
                    setRating(0);
                } else {
                    alert('Something went wrong please try again');
                }
            });
    };

    return (
        <section className="customer-review my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    Give Review
                </h1>

                <Form onSubmit={handleReview}>
                    <Form.Group className="mb-3" controlId="phoneNumbeer">
                        <label className="me-2">Rating: </label>
                        <Rating
                            className="text-warning"
                            initialRating={rating}
                            onChange={(rate) => setRating(rate)}
                            emptySymbol={<FontAwesomeIcon icon={farStar} />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} />}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Your designation"
                            ref={designationRef}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Give your review here . . ."
                            ref={reviewRef}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    );
};

export default Review;
