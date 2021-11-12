import React from 'react';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddNewCar from '../AddNewCar/AddNewCar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageCars from '../ManageCars/ManageCars/ManageCars';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import './Dashboard.css';

const Dashboard = () => {
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div id="dashboard">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link
                    to="/"
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
                                            to={`${url}/add-a-new-car`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Add A New Car
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
                                            to={`${url}/manage-cars`}
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            <span data-feather="home"></span>
                                            Manage Cars
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
                            <PrivateRoute exact path={path}>
                                dashboard
                            </PrivateRoute>

                            <PrivateRoute path={`${path}/pay`}>
                                <Pay />
                            </PrivateRoute>

                            <PrivateRoute path={`${path}/myorders`}>
                                <MyOrders />
                            </PrivateRoute>

                            <AdminRoute path={`${path}/manage-all-orders`}>
                                <ManageAllOrders />
                            </AdminRoute>

                            <AdminRoute path={`${path}/add-a-new-car`}>
                                <AddNewCar />
                            </AdminRoute>

                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </AdminRoute>

                            <AdminRoute path={`${path}/manage-cars`}>
                                <ManageCars />
                            </AdminRoute>
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
