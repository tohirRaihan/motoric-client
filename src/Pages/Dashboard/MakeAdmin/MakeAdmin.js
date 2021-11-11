import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    Button,
    Col,
    Container,
    FormControl,
    InputGroup,
    Row
} from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-center mb-4'>Make A User Admin</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelopeSquare} />
                        </InputGroup.Text>
                        <FormControl
                            size="lg"
                            placeholder="Enter email address"
                        />
                        <Button className="input-group-text" variant="primary">
                            Make Admin
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;
