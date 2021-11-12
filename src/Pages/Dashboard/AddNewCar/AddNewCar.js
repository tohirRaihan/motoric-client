import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddNewCar = () => {
    const [carData, setCarData] = useState({});

    const handleFormInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newCarData = { ...carData };
        newCarData[field] = value;
        setCarData(newCarData);
    };

    const handleNewCar = (event) => {
        event.preventDefault();

        // POST new car API
        fetch('https://motoric.herokuapp.com/cars', {
            method: 'POST',
            body: JSON.stringify(carData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Create new car successfully!');
                    event.target.reset();
                } else {
                    alert('Something went wrong please try again');
                }
            });
    };

    return (
        <section className="add-new-car my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    Add A New Car
                </h1>

                <Form onSubmit={handleNewCar}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="model"
                            onChange={handleFormInputChange}
                            placeholder="Name of the car model"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="price"
                            onBlur={handleFormInputChange}
                            placeholder="Car price"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="condition"
                            onBlur={handleFormInputChange}
                            placeholder="Car condition(new, used, recondition)"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="maxSpeed"
                            onBlur={handleFormInputChange}
                            placeholder="Maximum speed"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="fuelType"
                            onBlur={handleFormInputChange}
                            placeholder="Fuel type"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="maxTravelDistance"
                            onBlur={handleFormInputChange}
                            placeholder="Max travel distance with full fuel"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="image"
                            onBlur={handleFormInputChange}
                            placeholder="Image url link"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            as="textarea"
                            name="description"
                            onBlur={handleFormInputChange}
                            rows={5}
                            placeholder="Short description"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add New Car
                    </Button>
                </Form>
            </Container>
        </section>
    );
};

export default AddNewCar;
