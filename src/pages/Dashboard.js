import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <img src="/images/logo.png" alt="Logo" className="register-logo" />
                <nav className="nav-menu">
                    <ul>
                        <li className="nav-item"><Link to="/">Beranda</Link></li>
                        <li className="nav-item"><Link to="/registrasi">Registrasi</Link></li>
                        <li className="nav-item"><Link to="/login">Akun</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header className="header">
                    <div className="profile">
                        <span>Team 91 Digistar</span>
                    </div>
                </header>
                <section className="dashboard-cards">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
