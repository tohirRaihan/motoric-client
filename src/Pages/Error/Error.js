import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ErrorImage from '../../images/error.png';
import './Error.css';

const Error = () => {
    return (
        <section className="error-404-section">
            <Container>
                <Row>
                    <Col className="d-flex flex-column">
                        <Image className="mx-auto" src={ErrorImage} />
                        <div className="error-info text-center">
                            <h1 className="hero-title display-4 fw-bold">
                                Page Not Found!
                            </h1>
                            <p className="text-muted lead">
                                Please try searching for some other page.
                            </p>
                            <Link
                                to="/"
                                className="btn btn-primary text-decoration-none"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Error;
