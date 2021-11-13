import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const PlaceOrderForm = ({car}) => {
    const { user } = useAuth();
    const phoneRef = useRef();
    const addressRef = useRef();

    // Place a new order --------------------------------------------------
    const handleOrder = (event) => {
        event.preventDefault();
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const newOrder = {
            phone,
            address,
            userId: user.uid,
            userEmail: user.email,
            carId: car._id,
            status: 'pending'
        };
        // POST new order API
        fetch('https://motoric.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Order placed successfully!');
                    event.target.reset();
                } else {
                    alert('Something went wrong please try again');
                }
            });
    };
    return (
        <Container>
            <p>
                <span className="fw-bold">User Name:</span> {user.displayName}
            </p>
            <p>
                <span className="fw-bold">User Email:</span> {user.email}
            </p>
            <Form onSubmit={handleOrder}>
                <Form.Group className="mb-3" controlId="phoneNumbeer">
                    <Form.Control
                        type="text"
                        placeholder="Your phone number"
                        ref={phoneRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="shippingAddress">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Your shipping address"
                        ref={addressRef}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </Form>
        </Container>
    );
};

export default PlaceOrderForm;
