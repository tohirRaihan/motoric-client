import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = ({ order, count }) => {
    const { _id, carId, phone, address, status } = order;
    const [car, setCar] = useState({});

    // GET car by id API
    useEffect(() => {
        fetch(
            `https://motoric.herokuapp.com/cars/${carId}`
        )
            .then((res) => res.json())
            .then((data) => setCar(data));
    }, [carId]);

    // DELETE order by id API
    const handleDeleteOrder = (event, id) => {
        const confirmDelete = window.confirm(
            'Do you realy want to delete this order?'
        );
        if (confirmDelete) {
            fetch(`https://motoric.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully!');
                        event.target.closest('tr').style.display = 'none';
                    }
                });
        }
    };

    return (
        <tr>
            <td>{count}</td>
            <td>{car?.model}</td>
            <td>${car?.price}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{status}</td>
            <td>
                <Button
                    onClick={(e) => {
                        handleDeleteOrder(e, _id);
                    }}
                    variant="danger"
                    size="sm"
                >
                    X
                </Button>
            </td>
        </tr>
    );
};

export default MyOrder;
