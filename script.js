/**
 * Data Array of Object 10 Destinasi Wisata Indonesia Pilihan
 */
const destinasiWisata = [
    {
        id: 1,
        nama: "Raja Ampat",
        kategori: "Bahari",
        lokasi: "Papua Barat",
        harga: "Rp 5.000.000 / paket",
        gambar: "raja ampat asli.jpeg",
        deskripsi: "Raja Ampat adalah surga bawah laut terindah di dunia yang terletak di semenanjung Bird's Head, Papua Barat. Tempat ini terkenal dengan keanekaragaman hayati laut yang luar biasa dan gugusan pulau karang yang menakjubkan."
    },
    {
        id: 2,
        nama: "Candi Borobudur",
        kategori: "Budaya",
        lokasi: "Magelang, Jawa Tengah",
        harga: "Rp 50.000 / tiket",
        gambar: "candi borobudur.jpeg",
        deskripsi: "Candi Borobudur adalah candi Buddha terbesar di dunia yang dibangun pada abad ke-8 oleh dinasti Syailendra. Situs warisan dunia UNESCO ini memamerkan arsitektur relief batu yang megah dan penuh nilai sejarah."
    },
    {
        id: 3,
        nama: "Gunung Bromo",
        kategori: "Pegunungan",
        lokasi: "Probolinggo, Jawa Timur",
        harga: "Rp 35.000 / tiket",
        gambar: "gunung bromo asli.jpg",
        deskripsi: "Gunung Bromo adalah gunung berapi aktif yang sangat terkenal di Indonesia. Daya tarik utamanya adalah pemandangan matahari terbit (sunrise) yang spektakuler dari penanjakan serta hamparan lautan pasir yang luas."
    },
    {
        id: 4,
        nama: "Labuan Bajo & Komodo",
        kategori: "Bahari",
        lokasi: "Nusa Tenggara Timur",
        harga: "Rp 3.500.000 / paket",
        gambar: "labuan bajo.jpeg",
        deskripsi: "Labuan Bajo merupakan gerbang utama menuju Taman Nasional Komodo, habitat asli hewan purba Komodo yang dilindungi. Menawarkan keindahan pulau-pulau eksotis seperti Padar dan Pink Beach."
    },
    {
        id: 5,
        nama: "Danau Toba",
        kategori: "Alam",
        lokasi: "Sumatera Utara",
        harga: "Rp 25.000 / tiket",
        gambar: "danau toba asli.jpeg",
        deskripsi: "Danau Toba adalah danau vulkanik terbesar di Asia Tenggara dengan Pulau Samosir yang terletak di tengah-tengahnya. Kawasan ini dikelilingi oleh pegunungan hijau yang sejuk dan panorama alam yang memukau."
    },
    {
        id: 6,
        nama: "Kawasan Malioboro",
        kategori: "Budaya",
        lokasi: "Yogyakarta",
        harga: "Gratis",
        gambar: "malioboro.jpeg",
        deskripsi: "Jalan Malioboro adalah pusat perbelanjaan dan wisata jalan kaki paling ikonik di kota Yogyakarta. Tempat ini dipenuhi penjual suvenir khas, kuliner malam angkringan, serta seniman jalanan."
    },
    
    {
        id: 7,
        nama: "Kawah Ijen",
        kategori: "Pegunungan",
        lokasi: "Banyuwangi, Jawa Timur",
        harga: "Rp 20.000 / tiket",
        gambar: "kawah.jpeg",
        deskripsi: "Kawah Ijen terkenal dengan fenomena alam langka api biru (blue fire) di dalam kawah asam raksasa serta aktivitas penambangan belerang tradisional yang ikonik di pegunungan."
    },
    {
        id: 8,
        nama: "Nusa Penida",
        kategori: "Bahari",
        lokasi: "Bali",
        harga: "Rp 30.000 / tiket",
        gambar: "nusa penida.jpeg",
        deskripsi: "Nusa Penida adalah pulau di sebelah tenggara pulau Bali yang dipisahkan oleh Selat Badung. Menawarkan spot tebing curam yang menakjubkan seperti Kelingking Beach dan Angel's Billabong."
    },
    {
        id: 9,
        nama: "Lembah Harau",
        kategori: "Alam",
        lokasi: "Payakumbuh, Sumatera Barat",
        harga: "Rp 15.000 / tiket",
        gambar: "lembah harau.jpeg",
        deskripsi: "Lembah Harau adalah jurang bertebing granit curam dengan bentuk yang unik dan spektakuler, dikelilingi oleh cagar alam dan air terjun yang jernih di Sumatera Barat."
    }
];

/**
 * Fungsi untuk merender dan menampilkan kartu destinasi ke dalam DOM
 * @param {Array} data - Array object destinasi wisata
 */
function tampilkanDestinasi(data) {
    const container = document.getElementById('containerDestinasi');
    let htmlContent = '';

    if (data.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="p-4 bg-white rounded-4 shadow-sm d-inline-block">
                    <i class="fas fa-search-minus fa-3x text-muted mb-3"></i>
                    <p class="text-muted fs-5 mb-0">Destinasi wisata tidak ditemukan.</p>
                </div>
            </div>
        `;
        return;
    }

    // Perulangan menggunakan forEach untuk membangun elemen HTML kartu
    data.forEach(item => {
        htmlContent += `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="overflow-hidden">
                        <img src="${item.gambar}" class="card-img-top" alt="${item.nama}">
                    </div>
                    <div class="card-body d-flex flex-column p-4">
                        <div class="mb-2 d-flex justify-content-between align-items-center">
                            <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill fw-semibold">${item.kategori}</span>
                            <small class="text-muted"><i class="fas fa-map-marker-alt text-danger me-1"></i>${item.lokasi}</small>
                        </div>
                        <h4 class="card-title fw-bold text-dark mt-1">${item.nama}</h4>
                        <p class="card-text text-muted small flex-grow-1">${item.deskripsi.substring(0, 85)}...</p>
                        <button class="btn btn-outline-primary btn-sm mt-3 w-100 py-2 rounded-pill fw-semibold btn-detail" data-id="${item.id}">
                            <i class="fas fa-info-circle me-1"></i> Lihat Detail
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;

    // Memasang event listener ke tombol detail yang baru di-render
    pasangEventTombolDetail();
}

/**
 * Fungsi untuk membuka modal detail destinasi[cite: 3]
 * @param {Number} id - ID destinasi
 */
function bukaModalDetail(id) {
    const destinasi = destinasiWisata.find(item => item.id === parseInt(id));
    if (destinasi) {
        document.getElementById('modalJudul').innerText = destinasi.nama;
        document.getElementById('modalGambar').src = destinasi.gambar;
        document.getElementById('modalKategori').innerText = destinasi.kategori;
        document.getElementById('modalLokasi').innerText = destinasi.lokasi;
        document.getElementById('modalHarga').innerText = destinasi.harga;
        document.getElementById('modalDeskripsi').innerText = destinasi.deskripsi;

        // Tampilkan modal menggunakan Bootstrap 5 Modal API
        const modalElement = new bootstrap.Modal(document.getElementById('modalDetail'));
        modalElement.show();
    }
}

/**
 * Fungsi untuk memasang event click pada setiap tombol detail
 */
function pasangEventTombolDetail() {
    const tombolDetailList = document.querySelectorAll('.btn-detail');
    tombolDetailList.forEach(tombol => {
        tombol.addEventListener('click', function() {
            const idDestinasi = this.getAttribute('data-id');
            bukaModalDetail(idDestinasi);
        });
    });
}

// Inisialisasi awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    tampilkanDestinasi(destinasiWisata);
});

/* ==========================================
   EVENT LISTENER 1: PENCARIAN NAMA / LOKASI[cite: 4]
   ========================================== */
document.getElementById('inputPencarian').addEventListener('input', function() {
    const keyword = this.value.toLowerCase().trim();
    
    // Penyaringan data menggunakan percabangan dan filter array
    const hasilPencarian = destinasiWisata.filter(item => {
        return item.nama.toLowerCase().includes(keyword) || 
               item.lokasi.toLowerCase().includes(keyword) ||
               item.kategori.toLowerCase().includes(keyword);
    });

    tampilkanDestinasi(hasilPencarian);
});

/* ==========================================
   EVENT LISTENER 2: FILTER KATEGORI DESTINASI[cite: 4]
   ========================================== */
const tombolFilterList = document.querySelectorAll('.filter-btn');
tombolFilterList.forEach(btn => {
    btn.addEventListener('click', function() {
        // Menghapus kelas active dari semua tombol filter
        tombolFilterList.forEach(b => b.classList.remove('active'));
        // Menambahkan kelas active ke tombol yang sedang diklik
        this.classList.add('active');

        const kategoriPilihan = this.getAttribute('data-kategori');

        if (kategoriPilihan === 'Semua') {
            tampilkanDestinasi(destinasiWisata);
        } else {
            const hasilFilter = destinasiWisata.filter(item => item.kategori === kategoriPilihan);
            tampilkanDestinasi(hasilFilter);
        }
    });
});

/* ==========================================
   EVENT LISTENER 3: VALIDASI FORM & ALERT[cite: 4]
   ========================================== */
document.getElementById('formBukuTamu').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman secara default

    let isValid = true;

    const inputNama = document.getElementById('namaLengkap');
    const inputEmail = document.getElementById('emailTamu');
    const inputPesan = document.getElementById('pesanTamu');
    const alertSukses = document.getElementById('alertSukses');

    // Validasi Nama (minimal 3 karakter)
    if (inputNama.value.trim().length < 3) {
        inputNama.classList.add('is-invalid');
        isValid = false;
    } else {
        inputNama.classList.remove('is-invalid');
        inputNama.classList.add('is-valid');
    }

    // Validasi Email (format dasar email)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail.value.trim())) {
        inputEmail.classList.add('is-invalid');
        isValid = false;
    } else {
        inputEmail.classList.remove('is-invalid');
        inputEmail.classList.add('is-valid');
    }

    // Validasi Pesan (minimal 5 karakter)
    if (inputPesan.value.trim().length < 5) {
        inputPesan.classList.add('is-invalid');
        isValid = false;
    } else {
        inputPesan.classList.remove('is-invalid');
        inputPesan.classList.add('is-valid');
    }

    // Jika seluruh field valid
    if (isValid) {
        alertSukses.classList.remove('d-none');
        this.reset(); // Mereset form
        inputNama.classList.remove('is-valid');
        inputEmail.classList.remove('is-valid');
        inputPesan.classList.remove('is-valid');
    } else {
        alertSukses.classList.add('d-none');
    }
});