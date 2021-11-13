import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <section className="dashboard-home my-5">
            <h2>
                Welcome{' '}
                <span className="fw-bold">{`${user.displayName}(${user.email})`}</span>
            </h2>
            <p className='lead'>Now you can explore the Dashboard</p>
        </section>
    );
};

export default DashboardHome;
