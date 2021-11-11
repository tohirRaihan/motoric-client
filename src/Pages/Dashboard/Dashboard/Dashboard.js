import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div id='dashboard'>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
                    Motoric
                </a>
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
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="/">
                            Sign out
                        </a>
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
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink
                                        to="/dashboard"
                                        activeClassName="active"
                                        className="nav-link"
                                    >
                                        <span data-feather="home"></span>
                                        Dashboard
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <h1>Dashboard</h1>
                        <h1>Dashboard</h1>
                        <h1>Dashboard</h1>
                        <h1>Dashboard</h1>
                        <h1>Dashboard</h1>
                        <h1>Dashboard</h1>
                        <h1>Dashboard</h1>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
