import React from "react";
import { usersData } from '../data/usersData';
import { Link } from 'react-router-dom';
import './Users.css';

function Users() {
    return (
        <div className="users">
            <header className="users-header">
                <h1>Welcome to the User Page!</h1>
                <p>Here you can find a list of all users and access their detailed information.</p>
            </header>
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/user/${user.id}`} className="detail-link">Detail</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
