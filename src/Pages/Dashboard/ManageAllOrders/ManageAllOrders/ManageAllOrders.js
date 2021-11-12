import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import MyOrders from '../../MyOrders/MyOrders/MyOrders';
import Order from '../Order/Order';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    let count = 1;

    // GET orders API
    useEffect(() => {
        fetch('https://motoric.herokuapp.com/orders/')
            .then((res) => res.json())
            .then((data) => setOrders(data));
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
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Phone No.</th>
                            <th>Shipping Address</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <Order
                                key={order._id}
                                order={order}
                                count={count++}
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ManageAllOrders;
