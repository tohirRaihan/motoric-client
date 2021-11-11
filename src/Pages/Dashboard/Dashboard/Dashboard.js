import React from 'react';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import './Dashboard.css';

const Dashboard = () => {
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div id="dashboard">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link
                    to={`${url}`}
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                >
                    Motoric
                </Link>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input
                    className="form-control form-control-dark w-100"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link onClick={logOut} to="" className="nav-link px-3">
                            Sign out
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                    >
                        <div className="position-sticky pt-3">
                            {admin ? (
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}`}
                                            activeClassName="active"
                                            className="nav-link"
                                            exact={true}
                                        >
                                            <span data-feather="home"></span>
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/manage-all-orders`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Manage All Orders
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/add-a-producr`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Add A Product
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/makeAdmin`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Make Admin
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/manage-products`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Manage Products
                                        </NavLink>
                                    </li>

                                </ul>
                            ) : (
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}`}
                                            activeClassName="active"
                                            className="nav-link"
                                            exact={true}
                                        >
                                            <span data-feather="home"></span>
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/pay`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Pay
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/myorders`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            My Orders
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to={`${url}/review`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Review
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Switch>
                            <Route exact path={path}>
                                dashboard
                            </Route>

                            <Route exact path={`${path}/pay`}>
                                <Pay />
                            </Route>

                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </AdminRoute>
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
