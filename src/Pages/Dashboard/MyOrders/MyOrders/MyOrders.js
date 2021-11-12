import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    let count = 1;

    // GET orders API
    useEffect(() => {
        fetch(`https://motoric.herokuapp.com/orders/${user.uid}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <section className="my-orders my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    All Of My Orders
                </h1>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Car Model</th>
                            <th>Car Price</th>
                            <th>Phone No.</th>
                            <th>Shipping Address</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <MyOrder
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

export default MyOrders;
