import React, { useContext, useState } from "react";
import './Login.css';
import UserContext from "../context/UserContext";  

function Login() {
    const { changeUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        changeUser({ email, name: "Test User" });
        console.log("User logged in");
    };

    return (
        <div className="login-container">
            <div className="login-form-section">
                <div className="login-header">
                    <img src="/images/logo.png" alt="Logo" className="login-logo" />
                    <h1 className="login-title">Masuk</h1>
                    <p className="login-subtitle">
                        Masuk ke akun Anda dengan menggunakan Email/No. Handphone/Username yang sudah terdaftar.
                    </p>
                </div>
                <form className="login-form">
                    <label htmlFor="email">Email/No. Handphone/Username</label>
                    <input 
                        id="email" 
                        type="text" 
                        placeholder="Contoh: johndoe@gmail.com" 
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Kata Sandi</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Masukan kata sandi Anda" 
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="login-options">
                        <div>
                            <input id="remember" type="checkbox" />
                            <label htmlFor="remember">Ingat Saya</label>
                        </div>
                        <a href="/forgot-password" className="forgot-password">Lupa kata sandi?</a>
                    </div>

                    <button type="button" className="login-button" onClick={handleLogin}>Masuk</button>
                </form>

                <p className="login-footer">
                    Belum punya akun? <a href="/register">Daftar</a>
                </p>
            </div>
            <div className="login-image-section">
                <img src="/images/login.jpg" alt="Logo" className="login-image" />        
            </div>
        </div>
    );
}

export default Login;
