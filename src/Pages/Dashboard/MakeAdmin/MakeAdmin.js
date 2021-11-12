import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup,
    Row
} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { admin } = useAuth();

    const handleOnBlur = (event) => {
        setEmail(event.target.value);
    };

    const handleMakeAdmin = (event) => {
        event.preventDefault();
        const user = { email };
        if (admin) {
            fetch('https://motoric.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        // setSuccess(true);
                        alert(
                            `"${email}" has beed added as an admin successfully!`
                        );
                        event.target.reset();
                    } else if (data.matchedCount) {
                        alert(
                            `User with email "${email}" is already an admin!`
                        );
                    } else if (!data.matchedCount) {
                        alert(`There is no user with email "${email}"`);
                    }
                })
                .catch((error) => alert('Please edit your email'));
        } else {
            alert('You do not have permission to do this action');
        }
    };
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Make A User Admin</h1>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleMakeAdmin}>
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faEnvelopeSquare} />
                            </InputGroup.Text>
                            <FormControl
                                onBlur={handleOnBlur}
                                size="lg"
                                placeholder="Enter email address"
                            />
                            <Button
                                className="input-group-text"
                                variant="primary"
                                type="submit"
                            >
                                Make Admin
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;
