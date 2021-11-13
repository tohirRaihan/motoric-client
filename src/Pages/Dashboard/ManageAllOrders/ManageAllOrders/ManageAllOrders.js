import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let count = 1;

    // GET orders API
    useEffect(() => {
        fetch('https://motoric.herokuapp.com/orders/')
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="manage-all-orders my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    Manage All Orders
                </h1>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Email</th>
                            <th>Car Model</th>
                            <th>Car Price</th>
                            <th>Phone No.</th>
                            <th>Shipping Address</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <Spinner
                                className="d-block mx-auto mt-5"
                                animation="border"
                                varient="primary"
                            />
                        ) : (
                            orders.map((order) => (
                                <Order
                                    key={order._id}
                                    order={order}
                                    count={count++}
                                />
                            ))
                        )}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ManageAllOrders;
