// Navbar
function Navbar() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container">
        <a className="navbar-brand fw-bold" href="#">tasyaseprai</a>
        <div className="d-flex gap-4">
            <a className="nav-link d-inline text-white" href="#produk">Produk</a>
            <a className="nav-link d-inline text-white" href="#gallery">Gallery</a>
            <a className="nav-link d-inline text-white" href="#kontak">Kontak</a>
        </div>
    </div>
    </nav>
);
}

// Hero Section
function Hero() {
return (
    <section className="hero text-center">
    <div>
        <h1>Kenyamanan Tidur Anda Prioritas Kami 🛏️</h1>
        <p>Seprai & Bed Cover premium dengan kualitas terbaik dan harga terjangkau</p>
        <button className="btn btn-light text-primary fw-bold mt-3">Pesan Sekarang</button>
    </div>
    </section>
);
}

// Produk Section
function Produk() {
const products = [
    { id: 1, name: "Seprai Motif Bunga", price: "Rp 250.000", img: "assets/img/sepraimotifbunga.jpg" },
    { id: 2, name: "Bed Cover Minimalis", price: "Rp 350.000", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Set Sprei Polos", price: "Rp 300.000", img: "assets/img/sepraipolos.jpg" },
    { id: 4, name: "Seprai Anak-Anak", price: "Rp 300.000", img: "assets/img/sepraianak.jpg" },
    { id: 5, name: "Sprei Double 2in1", price: "Rp 300.000", img: "assets/img/seprai2in1.jpg" }
];

return (
    <section id="produk" className="container my-5">
    <h2 className="text-center fw-bold mb-4">Produk Unggulan ✨</h2>
    <div className="row g-4 justify-content-center">
        {products.map((p) => (
        <div className="col-md-4" key={p.id}>
            <div className="card shadow-sm product-card">
            <img src={p.img} className="card-img-top" alt={p.name} />
            <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.price}</p>
                <button className="btn btn-primary">Cek Katalog</button>
            </div>
            </div>
        </div>
        ))}
    </div>
    </section>
);
}

// Gallery Section
function Gallery() {
const images = [
    "https://images.unsplash.com/photo-1600488994436-8a35f8d1e3c2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585559605151-9d23844e6bc1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598300053650-9d905e6f2741?auto=format&fit=crop&w=800&q=80"
];

return (
    <section id="gallery" className="container my-5">
    <h2 className="text-center fw-bold mb-4">Gallery 📸</h2>
    <div className="row g-3 gallery">
        {images.map((src, i) => (
        <div className="col-md-4" key={i}>
            <img src={src} className="img-fluid shadow" alt={"Gallery " + i}
            data-bs-toggle="modal" data-bs-target={"#imgModal"+i} />
            
            {/* Modal */}
            <div className="modal fade" id={"imgModal" + i} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    
                    {/* Header */}
                    <div className="modal-header">
                        <h5 className="modal-title">Judul Gambar {i}</h5>
                        <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        ></button>
                    </div>

                    {/* Body */}
                    <div className="modal-body text-center">
                        <img src={src} className="img-fluid rounded mb-3" alt="popup" />
                        <p className="text-muted mb-1">
                        <small>Diperbarui: 19 Agustus 2025</small>
                        </p>
                        <p>
                        Keterangan gambar ini, bisa berisi detail singkat tentang produk atau informasi
                        tambahan lain yang relevan.
                        </p>
                    </div>                            

                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
    </section>
);
}

// Testimoni Section
function Testimoni() {
return (
    <section className="testimoni my-5">
    <div className="container">
        <h2 className="text-center fw-bold mb-4">Apa Kata Pelanggan ❤️</h2>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active text-center">
            <p className="fs-5">"Seprai lembut banget, tidur jadi nyenyak. Terima kasih!"</p>
            <small>- Siti, Pekanbaru</small>
            </div>
            <div className="carousel-item text-center">
            <p className="fs-5">"Bed covernya adem, motifnya elegan banget."</p>
            <small>- Rina, Jakarta</small>
            </div>
            <div className="carousel-item text-center">
            <p className="fs-5">"Harga sesuai kualitas, pelayanan ramah."</p>
            <small>- Andi, Bandung</small>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
        </div>
    </div>
    </section>
);
}

// Kontak Section
function Kontak() {
return (
    <section id="kontak" className="container my-5">
    <h2 className="text-center fw-bold mb-4">Kontak & Alamat 📍</h2>
    <div className="row">
        <div className="col-md-6">
        <h5>Alamat Toko</h5>
        <p>Jl. Melati No. 123, Pekanbaru, Riau</p>
        <p><strong>Telp:</strong> 0812-3456-7890</p>
        <p><strong>Email:</strong> tasyaseprai@example.com</p>
        </div>
        <div className="col-md-6">
        <h5>Kirim Pesan</h5>
        <form>
            <input type="text" className="form-control mb-2" placeholder="Nama Anda" required />
            <input type="email" className="form-control mb-2" placeholder="Email Anda" required />
            <textarea className="form-control mb-2" rows="3" placeholder="Pesan Anda"></textarea>
            <button className="btn btn-primary w-100">Kirim</button>
        </form>
        </div>
    </div>
    </section>
);
}

// Footer
function Footer() {
return (
    <footer>
    <p>&copy; 2025 Tasya Seprai | All Rights Reserved</p>
    </footer>
);
}

// Main App
function App() {
    return (
        <React.Fragment>
        <Navbar />
        <Hero />
        <Produk />
        <Gallery />
        <Testimoni />
        <Kontak />
        <Footer />
        </React.Fragment>
    );
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);