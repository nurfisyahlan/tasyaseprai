// Navbar
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient fixed-top">
          <div className="container">            
              <a className="navbar-brand fw-bold" href="#">tasyaseprai</a>
              <div className="d-flex gap-4">
                  <a className="nav-link d-inline text-white" href="#produk">Produk</a>
                  <a className="nav-link d-inline text-white" href="#gallery">Gallery</a>
                  <a className="nav-link d-inline text-white" href="#testimoni">Testimoni</a>
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
            <button className="btn btn-light text-primary fw-bold mt-3" href="kontak">Pesan Sekarang</button>            
        </div>
        </section>
    );
}

// Produk Section
function Produk() {
  const products = [
    { 
      id: 1, 
      name: "Seprai Motif Bunga", 
      price: "Rp 250.000", 
      img: "assets/img/sepraimotifbunga.jpg",
      images: [
        "assets/img/sepraimotifbunga.jpg",        
        "assets/img/bunga01.jpg",        
        "assets/img/bunga02.jpg",        
      ],
      description: "Seprai dengan motif bunga elegan, bahan lembut dan adem."
    },
    { 
      id: 2, 
      name: "Motif Minimalis", 
      price: "Rp 350.000", 
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584132905271-28c98316c4a3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Seprai motif minimalis dengan desain modern, cocok untuk kamar kekinian."
    },
    { 
      id: 3, 
      name: "Seprai Motif Polos", 
      price: "Rp 300.000", 
      img: "assets/img/sepraipolos.jpg",
      images: [
        "assets/img/sepraipolos.jpg",
        "https://images.unsplash.com/photo-1595526114035-56eacaeb963e?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Set sprei polos dengan pilihan dan kombinasi warna yang bervariasi dan menenangkan."
    },
    { 
      id: 4, 
      name: "Seprai Anak-Anak", 
      price: "Rp 300.000", 
      img: "assets/img/sepraianak.jpg",
      images: [
        "assets/img/sepraianak.jpg",
        "https://images.unsplash.com/photo-1595526114035-56eacaeb963e?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Seprai yang motifnya lucu dan cocok untuk anak anda"
    },
    { 
      id: 5, 
      name: "Sprei Double 2in1", 
      price: "Rp 300.000", 
      img: "assets/img/seprai2in1.jpg",
      images: [
        "assets/img/seprai2in1.jpg",
        "https://images.unsplash.com/photo-1595526114035-56eacaeb963e?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Satu set seprai yang terdiri dari 2 pasang, seprai atas dan bawah"
    }
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
                {/* Tombol untuk buka modal */}
                <button 
                  className="btn btn-primary" 
                  data-bs-toggle="modal" 
                  data-bs-target={`#produkModal${p.id}`}
                >
                  Cek Katalog
                </button>
              </div>
            </div>

            {/* Modal Produk */}
            <div className="modal fade" id={`produkModal${p.id}`} tabIndex="-1">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  
                  {/* Header */}
                  <div className="modal-header">
                    <h5 className="modal-title">{p.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  {/* Body */}
                  <div className="modal-body">
                    {/* Carousel */}
                    <div id={`carousel${p.id}`} className="carousel slide">
                      <div className="carousel-inner">
                        {p.images.map((img, index) => (
                          <div 
                            className={`carousel-item ${index === 0 ? "active" : ""}`} 
                            key={index}
                          >
                            <img src={img} className="d-block w-100 rounded" alt={`${p.name} ${index}`} />
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${p.id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#carousel${p.id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                      </button>
                    </div>

                    {/* Detail Produk */}
                    <div className="mt-3 text-center">
                      <h5 className="fw-bold">{p.price}</h5>
                      <p>{p.description}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="modal-footer">
                    <button className="btn btn-success">Pesan via WhatsApp</button>
                  </div>

                </div>
              </div>
            </div>
            {/* End Modal */}

          </div>
        ))}
      </div>
    </section>
  );
}


// Gallery Section
function Gallery() {
const images = [
    "assets/img/sepraimotifbunga.jpg",
    "assets/img/sepraipolos.jpg",
    "assets/img/seprai2in1.jpg"
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
    <section className="testimoni my-5" id="testimoni">
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
    <footer className="text-center py-4">
      <p>&copy; 2025 Tasya Seprai | All Rights Reserved</p>

      {/* Sosial Media */}
      <div className="social-icons mt-2">
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
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

function Hero() {
  const scrollToKontak = () => {
    const kontakSection = document.getElementById("kontak");
    if (kontakSection) {
      kontakSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero text-center">
      <div>
        <h1>Kenyamanan Tidur Anda Prioritas Kami 🛏️</h1>
        <p>Seprai & Bed Cover premium dengan kualitas terbaik dan harga terjangkau</p>
        <button onClick={scrollToKontak} className="btn btn-light text-primary fw-bold mt-3">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
}
