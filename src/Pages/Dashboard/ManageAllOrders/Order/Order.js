import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Order = ({ order, count }) => {
    const { _id, userEmail, carId, phone, address, status } = order;
    const [car, setCar] = useState({});
    const [productStatus, setProductStatus] = useState(status);

    // GET car by id API
    useEffect(() => {
        fetch(
            `https://motoric.herokuapp.com/cars/${carId}`
        )
            .then((res) => res.json())
            .then((data) => setCar(data));
    }, [carId]);

    // UPDATE order status
    const handleApproval = (event) => {
        fetch(`https://motoric.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert('Product shipped successfully');
                    event.target
                        .closest('tr')
                        .querySelector('.product-status').innerText =
                        'shipped';
                    setProductStatus('shipped');
                }
            });
    };

    // DELETE order API
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
                    console.log(data);
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
            <td>{userEmail}</td>
            <td>{car?.model}</td>
            <td>${car?.price}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td className="product-status">{status}</td>
            <td>
                <ButtonGroup size="sm">
                    {productStatus === 'pending' ? (
                        <Button onClick={handleApproval} variant="success">
                            Shipped
                        </Button>
                    ) : (
                        ''
                    )}

                    <Button
                        onClick={(e) => {
                            handleDeleteOrder(e, _id);
                        }}
                        variant="danger"
                    >
                        X
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
};

export default Order;
