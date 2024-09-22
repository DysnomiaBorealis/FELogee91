import React from "react";  
import { useNavigate } from "react-router-dom";  // Import useNavigate
import './Home.css';  

function Home() {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleRegisterClick = () => {
        navigate("/register");  // Navigate to the register page when the button is clicked
    };

    return (
        <div className="home">  
            <header className="home-header">
                <h1>Selamat Datang di Logee</h1>
                <p>Mengubah Pengalaman Logistik Anda</p>
            </header>

            <section className="home-intro">
                <h2>Apa itu Logee?</h2>
                <p>
                    Logee adalah solusi logistik digital terkini yang dirancang untuk menghubungkan bisnis 
                    dengan semua pemain dalam ekosistem logistik. Platform kami membantu perusahaan 
                    mengoptimalkan manajemen rantai pasokan mereka dan menyederhanakan operasi untuk efisiensi maksimal.
                </p>
            </section>
            
            <section className="home-fitur">
                <div className="fitur-kartu">
                    <img src="https://via.placeholder.com/150" alt="Fitur 1" />
                    <h3>Integrasi Tanpa Hambatan</h3>
                    <p>
                        Logee terintegrasi secara mulus dengan sistem Anda yang sudah ada, memungkinkan Anda untuk 
                        mengelola pesanan, melacak pengiriman, dan menangani logistik di satu tempat.
                    </p>
                </div>
                <div className="fitur-kartu">
                    <img src="https://via.placeholder.com/150" alt="Fitur 2" />
                    <h3>Wawasan Waktu Nyata</h3>
                    <p>
                        Dapatkan visibilitas waktu nyata terhadap proses logistik Anda dengan laporan terperinci 
                        dan analitik, memastikan keputusan yang lebih cerdas berbasis data.
                    </p>
                </div>
                <div className="fitur-kartu">
                    <img src="https://via.placeholder.com/150" alt="Fitur 3" />
                    <h3>Ekosistem Kolaboratif</h3>
                    <p>
                        Logee menghubungkan semua pemain logistik—dari produsen dan distributor hingga penyedia 
                        logistik pihak ketiga—menciptakan ekosistem yang bekerja secara harmonis.
                    </p>
                </div>
            </section>

            <section className="home-cta">
                <h2>Mulai dengan Logee</h2>
                <p>
                    Siap untuk meningkatkan operasi bisnis Anda? Bergabunglah dengan ekosistem Logee hari ini 
                    dan revolusi cara Anda mengelola logistik.
                </p>
                <button className="home-btn" onClick={handleRegisterClick}>Daftar Sekarang</button> {/* Button with onClick */}
            </section>
        </div>
    );
}

export default Home;
