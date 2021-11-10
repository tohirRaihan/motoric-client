import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, logInUsingEmailPassword, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    // const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    // const redirectUri = location.state?.from || '/home';

    // login using google
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    };

    const handleFormInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('submit');
        logInUsingEmailPassword(loginData.email, loginData.password, location, history)
    }
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
                            <form onSubmit={handleLogin}>
                                {authError ? (
                                    <p className="text-danger">{authError}</p>
                                ) : (
                                    ''
                                )}
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleFormInputChange}
                                        className="form-control py-2"
                                        placeholder="Your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleFormInputChange}
                                        className="form-control py-2"
                                        placeholder="Password"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block col-5 mx-auto my-3"
                                >
                                    Login
                                </button>
                                <p className="text-center">-OR-</p>
                                <div className="social-login">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn d-block btn-danger w-100"
                                        type="button"
                                    >
                                        <FontAwesomeIcon
                                            className="me-2"
                                            icon={faGooglePlus}
                                        />
                                        <span>Sign in using Google+</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <Link to="/register">Don't have an account yet?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
