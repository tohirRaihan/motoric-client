import React, { useEffect, useState } from 'react';
import { Button, Container, Image, Spinner, Table } from 'react-bootstrap';

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://motoric.herokuapp.com/cars')
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setIsLoading(false);
            });
    }, []);

    // DELETE car by id API
    const handleDeleteCar = (event, id) => {
        const confirmDelete = window.confirm(
            'Do you realy want to delete this car item?'
        );
        if (confirmDelete) {
            fetch(`https://motoric.herokuapp.com/cars/${id}`, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Car deleted successfully!');
                        event.target.closest('tr').style.display = 'none';
                    }
                });
        }
    };

    return (
        <section className="manage-cars my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    All Of The Cars
                </h1>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Car Image</th>
                            <th>Car Model</th>
                            <th>Car Price</th>
                            <th>Condition</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan='6'>
                                    <Spinner
                                        className="d-block mx-auto mt-5"
                                        animation="border"
                                        varient="primary"
                                    />
                                </td>
                            </tr>
                        ) : (
                            cars.map((car, index) => (
                                <tr key={car._id}>
                                    <td>{++index}</td>
                                    <td>
                                        <Image
                                            width="80"
                                            height="50"
                                            src={car.image}
                                        />
                                    </td>
                                    <td>{car.model}</td>
                                    <td>${car.price}</td>
                                    <td>{car.condition}</td>
                                    <td>
                                        <Button
                                            onClick={(e) => {
                                                handleDeleteCar(e, car._id);
                                            }}
                                            variant="danger"
                                            size="sm"
                                        >
                                            X
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ManageCars;
