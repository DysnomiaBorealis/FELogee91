import React, { useState } from 'react';
import './Registrasi.css';

function Registrasi() {
    // State to manage active tab and form data
    const [activeTab, setActiveTab] = useState('data');
    const [formData, setFormData] = useState({
        companyName: '',
        companyResponsible: '',
        bankName: '',
        kcpLocation: '',
        accountNumber: '',
        accountOwner: '',
        city: '',
        district: '',
        subdistrict: '',
        postalCode: '',
        npwpFile: '',
        siupFile: '',
        ktpFile: '',
        deedFile: '',
        domicileFile: '',
    });

    // Function to handle tab switching
    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="registrasi-container">
            <aside className="sidebar">
                <img src="/images/logo.png" alt="Logo" className="register-logo" />
                <nav className="nav-menu">
                    <ul>
                        <li className="nav-item"><a href="/">Beranda</a></li>
                        <li className="nav-item active"><a href="/registrasi">Registrasi</a></li>
                        <li className="nav-item"><a href="/akun">Akun</a></li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <header className="header">
                    <h1>Registrasi Perusahaan</h1>
                </header>

                {/* Tab Navigation */}
                <div className="progress-bar">
                    <span 
                        className={`step ${activeTab === 'data' ? 'active' : ''}`} 
                        onClick={() => handleTabSwitch('data')}
                    >
                        Data
                    </span>
                    <span 
                        className={`step ${activeTab === 'dokumen' ? 'active' : ''}`} 
                        onClick={() => handleTabSwitch('dokumen')}
                    >
                        Dokumen
                    </span>
                    <span 
                        className={`step ${activeTab === 'review' ? 'active' : ''}`} 
                        onClick={() => handleTabSwitch('review')}
                    >
                        Review
                    </span>
                </div>

                {/* Conditionally render "Data" content */}
                {activeTab === 'data' && (
                    <form className="form-container">
                        <section className="form-section">
                            <h2>Informasi Perusahaan</h2>
                            <div className="input-group">
                                <label>Nama Perusahaan</label>
                                <input 
                                    type="text" 
                                    name="companyName" 
                                    value={formData.companyName} 
                                    onChange={handleChange} 
                                    placeholder="Nama Perusahaan" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Penanggung Jawab Perusahaan</label>
                                <input 
                                    type="text" 
                                    name="companyResponsible" 
                                    value={formData.companyResponsible} 
                                    onChange={handleChange} 
                                    placeholder="Penanggung Jawab Perusahaan" 
                                />
                            </div>
                        </section>

                        <section className="form-section">
                            <h2>Informasi Bank</h2>
                            <div className="input-group">
                                <label>Nama Bank</label>
                                <input 
                                    type="text" 
                                    name="bankName" 
                                    value={formData.bankName} 
                                    onChange={handleChange} 
                                    placeholder="Nama Bank" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Lokasi KCP</label>
                                <input 
                                    type="text" 
                                    name="kcpLocation" 
                                    value={formData.kcpLocation} 
                                    onChange={handleChange} 
                                    placeholder="Lokasi KCP" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Nomor Rekening</label>
                                <input 
                                    type="text" 
                                    name="accountNumber" 
                                    value={formData.accountNumber} 
                                    onChange={handleChange} 
                                    placeholder="Nomor Rekening" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Nama Pemilik Rekening</label>
                                <input 
                                    type="text" 
                                    name="accountOwner" 
                                    value={formData.accountOwner} 
                                    onChange={handleChange} 
                                    placeholder="Nama Pemilik Rekening" 
                                />
                            </div>
                        </section>

                        <section className="form-section">
                            <h2>Registrasi Perusahaan</h2>
                            <div className="input-group">
                                <label>Kota/Kabupaten</label>
                                <input 
                                    type="text" 
                                    name="city" 
                                    value={formData.city} 
                                    onChange={handleChange} 
                                    placeholder="Kota/Kabupaten" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Kecamatan</label>
                                <input 
                                    type="text" 
                                    name="district" 
                                    value={formData.district} 
                                    onChange={handleChange} 
                                    placeholder="Kecamatan" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Kelurahan/Desa</label>
                                <input 
                                    type="text" 
                                    name="subdistrict" 
                                    value={formData.subdistrict} 
                                    onChange={handleChange} 
                                    placeholder="Kelurahan/Desa" 
                                />
                            </div>
                            <div className="input-group">
                                <label>Kode Pos</label>
                                <input 
                                    type="text" 
                                    name="postalCode" 
                                    value={formData.postalCode} 
                                    onChange={handleChange} 
                                    placeholder="Kode Pos" 
                                />
                            </div>
                        </section>

                        <button className="submit-button" onClick={() => handleTabSwitch('dokumen')}>Selanjutnya</button>
                    </form>
                )}

                {/* Conditionally render "Dokumen" content */}
                {activeTab === 'dokumen' && (
                    <div className="form-container">
                        <section className="form-section">
                            <h2>Dokumen Perusahaan</h2>
                            <div className="upload-grid">
                                <div className="upload-box">
                                    <label>NPWP</label>
                                    <div className="upload-area">
                                        <span className="upload-icon">+</span>
                                        <p>Unggah</p>
                                    </div>
                                </div>

                                <div className="upload-box">
                                    <label>SIUP</label>
                                    <div className="upload-area">
                                        <span className="upload-icon">+</span>
                                        <p>Unggah</p>
                                    </div>
                                </div>

                                <div className="upload-box">
                                    <label>KTP Direktur</label>
                                    <div className="upload-area">
                                        <span className="upload-icon">+</span>
                                        <p>Unggah</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="form-section">
                            <h2>Dokumen Lainnya</h2>
                            <div className="upload-grid">
                                <div className="upload-box">
                                    <label>Akta Pendirian Perusahaan</label>
                                    <div className="upload-area">
                                        <span className="upload-icon">+</span>
                                        <p>Unggah</p>
                                    </div>
                                </div>

                                <div className="upload-box">
                                    <label>Surat Domisili Perusahaan</label>
                                    <div className="upload-area">
                                        <span className="upload-icon">+</span>
                                        <p>Unggah</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <button className="submit-button" onClick={() => handleTabSwitch('review')}>Selanjutnya</button>
                    </div>
                )}

                {/* Conditionally render "Review" content */}
                {activeTab === 'review' && (
                <div className="review-container">
                    <h2 className="review-title">Review Data Pendaftaran</h2>

                    {/* Informasi Perusahaan */}
                    <section className="review-section">
                        <h3 className="section-title">Informasi Perusahaan</h3>
                        <div className="review-item">
                            <span className="item-label">Nama Perusahaan:</span>
                            <span className="item-value">{formData.companyName}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Penanggung Jawab:</span>
                            <span className="item-value">{formData.companyResponsible}</span>
                        </div>
                    </section>

                    {/* Informasi Bank */}
                    <section className="review-section">
                        <h3 className="section-title">Informasi Bank</h3>
                        <div className="review-item">
                            <span className="item-label">Nama Bank:</span>
                            <span className="item-value">{formData.bankName}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Lokasi KCP:</span>
                            <span className="item-value">{formData.kcpLocation}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Nomor Rekening:</span>
                            <span className="item-value">{formData.accountNumber}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Nama Pemilik Rekening:</span>
                            <span className="item-value">{formData.accountOwner}</span>
                        </div>
                    </section>

                    {/* Registrasi Perusahaan */}
                    <section className="review-section">
                        <h3 className="section-title">Registrasi Perusahaan</h3>
                        <div className="review-item">
                            <span className="item-label">Kota/Kabupaten:</span>
                            <span className="item-value">{formData.city}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Kecamatan:</span>
                            <span className="item-value">{formData.district}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Kelurahan/Desa:</span>
                            <span className="item-value">{formData.subdistrict}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Kode Pos:</span>
                            <span className="item-value">{formData.postalCode}</span>
                        </div>
                    </section>

                    {/* Dokumen Perusahaan */}
                    <section className="review-section">
                        <h3 className="section-title">Dokumen Perusahaan</h3>
                        <div className="review-item">
                            <span className="item-label">NPWP:</span>
                            <span className="item-value">{formData.npwpFile || 'Belum diunggah'}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">SIUP:</span>
                            <span className="item-value">{formData.siupFile || 'Belum diunggah'}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">KTP Direktur:</span>
                            <span className="item-value">{formData.ktpFile || 'Belum diunggah'}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Akta Pendirian Perusahaan:</span>
                            <span className="item-value">{formData.deedFile || 'Belum diunggah'}</span>
                        </div>
                        <div className="review-item">
                            <span className="item-label">Surat Domisili:</span>
                            <span className="item-value">{formData.domicileFile || 'Belum diunggah'}</span>
                        </div>
                    </section>

                    <div className="button-group">
                        <button className="btn-back">Kembali</button>
                        <button className="btn-submit">Daftar</button>
                    </div>
                </div>
                )}
            </main>
        </div>
    );
}

export default Registrasi;
