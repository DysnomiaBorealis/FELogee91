import React, { useContext } from "react";
import './Register.css';  
import UserContext from "../context/UserContext";  

function Register() {
    const { changeUser } = useContext(UserContext);

    const handleRegister = () => {
        changeUser({ email: "test@example.com", name: "Test User" });
        console.log("User registered");
    };

    return (
        <div className="register-container">
            <div className="register-form-section">
                <div className="register-header">
                    <img src="/images/logo.png" alt="Logo" className="register-logo" />
                    <h1 className="register-title">Daftar</h1>
                    <p className="register-subtitle">Daftar dan buat akun untuk temukan layanan sesuai kebutuhan Anda</p>
                </div>
                <form className="register-form">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input id="name" type="text" placeholder="Contoh: John Doe" className="register-input" />

                    <div className="register-radio-group">
                        <label>Sebutkan</label>
                        <div>
                            <input id="bapak" type="radio" name="gender" value="Bapak" />
                            <label htmlFor="bapak">Bapak</label>
                        </div>
                        <div>
                            <input id="ibu" type="radio" name="gender" value="Ibu" />
                            <label htmlFor="ibu">Ibu</label>
                        </div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Contoh: johndoe@gmail.com" className="register-input" />

                    <label htmlFor="password">Kata Sandi</label>
                    <input id="password" type="password" placeholder="Masukan Kata Sandi Anda" className="register-input" />

                    <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                    <input id="confirm-password" type="password" placeholder="Masukan ulang kata sandi Anda" className="register-input" />

                    <button type="button" className="register-button" onClick={handleRegister}>Daftar</button>
                </form>

                <p className="register-footer">Sudah punya akun? <a href="/login">Masuk</a></p>
            </div>
            <div className="register-image-section">
                <img src="/images/register.jpg" alt="Register" className="register-image" />
            </div>
        </div>
    );
}

export default Register;
