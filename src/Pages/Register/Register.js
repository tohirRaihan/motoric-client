import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const [error, setError] = useState('');
    const { signUpUsingEmailPassword, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleFormInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    };

    const signUp = (event) => {
        event.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            setError('Password did not match');
        } else {
            signUpUsingEmailPassword(
                registerData.name,
                registerData.email,
                registerData.password,
                location,
                history
            );
            setError('');
        }
    };

    return (
        <div className="container pt-sm-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <div className="card shadow-lg">
                        <div className="border-top border-3 border-primary rounded-top "></div>
                        <FontAwesomeIcon
                            className="text-primary my-3 mx-auto display-1"
                            icon={faUserCircle}
                        />

                        <div className="card-body px-5">
                            {error || authError ? (
                                <p className="text-danger">{error || authError}</p>
                            ) : (
                                ''
                            )}
                            <form onSubmit={signUp}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        onBlur={handleFormInputChange}
                                        className="form-control py-2"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        onBlur={handleFormInputChange}
                                        className="form-control py-2"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleFormInputChange}
                                        className="form-control py-2"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        onBlur={handleFormInputChange}
                                        className="form-control py-2"
                                        placeholder="Confirm password"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block col-5 mx-auto my-3"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <Link to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
