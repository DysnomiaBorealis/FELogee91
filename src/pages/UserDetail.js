import React from "react";
import { useParams } from 'react-router-dom';
import { usersData } from "../data/usersData";
import './UserDetail.css';  // Import CSS file for styling

function UserDetail() {
    const { id } = useParams();
    const user = usersData.find((user) => user.id === parseInt(id));

    return (
        <div className="user-detail-container">
            <div className="user-card">
                <h1 className="user-id">User ID: {id}</h1>
                <div className="user-info">
                    <p><strong>Nama:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Address:</strong> {user.address.street}, {user.address.zipcode}, {user.address.city}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>From Company:</strong> {user.company.name}</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
