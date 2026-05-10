// Data Eskul
const eskulData = [
    { 
        nama: "Osis", 
        kategori: "Kepemimpinan & Kedisiplinan",
        deskripsi: "Organisasi siswa yang mengembangkan kepemimpinan, manajemen acara, dan kegiatan sosial. Anggota aktif dalam kegiatan sekolah dan komunitas.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
    },
    { 
        nama: "Pramuka", 
        kategori: "Kepemimpinan & Kedisiplinan",
        deskripsi: "Kegiatan kepramukaan dengan latihan baris-berbaris, survival, dan kepemimpinan. Anggota berkesempatan mengikuti jambore nasional dan internasional.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "Pasilimka", 
        kategori: "Kedisiplinan",
        deskripsi: "Latihan baris-berbaris, kepemimpinan, dan kedisiplinan untuk upacara bendera. Anggota berkesempatan menjadi pengibar bendera di tingkat kota.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "MultiMedia", 
        kategori: "Teknologi & Kreativitas",
        deskripsi: "Belajar desain grafis, video editing, dan fotografi. Anggota aktif dalam dokumentasi acara sekolah dan lomba kreatifitas digital.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "PMR", 
        kategori: "Kesehatan & Sosial",
        deskripsi: "Kegiatan kesehatan dan sosial dengan pelatihan pertolongan pertama, donor darah, dan kegiatan sosial. Anggota berkesempatan mengikuti pelatihan tingkat nasional.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "Pencinta Alam", 
        kategori: "Petualangan & Sosial",
        deskripsi: "Kegiatan outdoor seperti hiking, camping, dan pelestarian lingkungan. Anggota aktif dalam kegiatan konservasi dan lomba kepramukaan.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "Rohani Islam", 
        kategori: "Rohani & Sosial",
        deskripsi: "Kegiatan keagamaan dengan kajian, pengajian, dan kegiatan sosial. Anggota aktif dalam kegiatan keagamaan dan lomba keislaman.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "Rohani Kristen", 
        kategori: "Rohani & Sosial",
        deskripsi: "Kegiatan keagamaan dengan kajian, pengajian, dan kegiatan sosial. Anggota aktif dalam kegiatan keagamaan dan lomba kekristenan.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    },
    { 
        nama: "Musik", 
        kategori: "Kreativitas & Seni",
        deskripsi: "Kegiatan musikal dengan latihan vokal, instrumen, dan performance. Anggota aktif dalam acara sekolah dan lomba kreatifitas musikal.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: "🏆 " 
    }
];

// DOM Elements
let eskulTerpilihIndex = null;
let currentEskulIndex = null;

// Render Eskul Cards
function renderEskul() {
    const container = document.getElementById('eskul-list');
    if (!container) return;
    
    container.innerHTML = '';
    eskulData.forEach((eskul, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${eskul.image}" alt="${eskul.nama}" class="card-image" loading="lazy">
            <div class="card-body">
                <h3>${eskul.nama}</h3>
                <p>${eskul.deskripsi.substring(0, 100)}...</p>
                <div class="card-tags">
                    <span class="card-tag">${eskul.kategori}</span>
                    <span class="card-tag">${eskul.jadwal.split('|')[0]}</span>
                </div>
            </div>
        `;
        card.onclick = () => tampilkanDetail(index);
        container.appendChild(card);
    });
}

// Tampilkan Modal Detail
function tampilkanDetail(index) {
    const eskul = eskulData[index];
    eskulTerpilihIndex = index;
    currentEskulIndex = index;

    const modalImage = document.getElementById('modal-image');
    const modalNama = document.getElementById('modal-nama');
    const modalDeskripsi = document.getElementById('modal-deskripsi');
    const modalJadwal = document.getElementById('modal-jadwal');
    const modalPembina = document.getElementById('modal-pembina');
    const modalPrestasi = document.getElementById('modal-prestasi');
    const modalCategory = document.getElementById('modal-category');

    if (modalImage) modalImage.src = eskul.image;
    if (modalNama) modalNama.textContent = eskul.nama;
    if (modalDeskripsi) modalDeskripsi.textContent = eskul.deskripsi;
    if (modalJadwal) modalJadwal.textContent = eskul.jadwal;
    if (modalPembina) modalPembina.textContent = eskul.pembina;
    if (modalPrestasi) modalPrestasi.textContent = eskul.prestasi;
    if (modalCategory) modalCategory.textContent = eskul.kategori;

    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Tutup Modal
function tutupModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Daftar dari Modal
function daftarDariModal() {
    if (currentEskulIndex !== null) {
        const eskul = eskulData[currentEskulIndex];
        const selectUtama = document.getElementById('eskul_utama');
        if (selectUtama) {
            selectUtama.value = eskul.nama;
        }
        tutupModal();
        
        const formSection = document.getElementById('pendaftaran');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Isi Dropdown Eskul
function isiDropdown() {
    const utama = document.getElementById('eskul_utama');
    const cadangan = document.getElementById('eskul_cadangan');
    
    if (!utama || !cadangan) return;
    
    // Clear existing options except first
    while (utama.options.length > 1) utama.remove(1);
    while (cadangan.options.length > 1) cadangan.remove(1);
    
    eskulData.forEach(eskul => {
        const optUtama = document.createElement('option');
        optUtama.value = eskul.nama;
        optUtama.textContent = eskul.nama;
        utama.appendChild(optUtama);
        
        const optCadangan = document.createElement('option');
        optCadangan.value = eskul.nama;
        optCadangan.textContent = eskul.nama;
        cadangan.appendChild(optCadangan);
    });
}

// Validasi Form
function validateForm(data) {
    const errors = [];
    
    if (!data.nama || data.nama.trim().length < 3) {
        errors.push('Nama lengkap minimal 3 karakter');
    }
    
    if (!data.nis || data.nis.trim().length < 5) {
        errors.push('NIS/NISN tidak valid');
    }
    
    if (!data.kelas || data.kelas.trim().length < 2) {
        errors.push('Kelas dan jurusan tidak valid');
    }
    
    const waRegex = /^08[0-9]{8,12}$/;
    if (!data.wa || !waRegex.test(data.wa.replace(/\s/g, ''))) {
        errors.push('Nomor WhatsApp tidak valid (mulai dengan 08xx)');
    }
    
    if (!data.eskul_utama) {
        errors.push('Pilih eskul utama');
    }
    
    if (data.eskul_utama === data.eskul_cadangan && data.eskul_cadangan) {
        errors.push('Eskul cadangan harus berbeda dengan eskul utama');
    }
    
    return errors;
}

// Submit Handler
function handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
        nama: document.getElementById('nama')?.value || '',
        nis: document.getElementById('nis')?.value || '',
        kelas: document.getElementById('kelas')?.value || '',
        wa: document.getElementById('wa')?.value || '',
        eskul_utama: document.getElementById('eskul_utama')?.value || '',
        eskul_cadangan: document.getElementById('eskul_cadangan')?.value || '',
        alasan: document.getElementById('alasan')?.value || ''
    };
    
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        alert('❌ ' + errors.join('\n'));
        return;
    }
    
    // Simpan ke localStorage (opsional)
    const pendaftaranList = JSON.parse(localStorage.getItem('pendaftaran_eskul') || '[]');
    pendaftaranList.push({
        ...formData,
        tanggal: new Date().toISOString()
    });
    localStorage.setItem('pendaftaran_eskul', JSON.stringify(pendaftaranList));
    
    // Tampilkan success message
    const successMsg = document.getElementById('successMsg');
    const form = document.getElementById('daftarForm');
    
    if (successMsg && form) {
        form.style.display = 'none';
        successMsg.style.display = 'block';
        
        // Reset form setelah beberapa detik
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMsg.style.display = 'none';
            
            // Scroll ke atas form
            form.scrollIntoView({ behavior: 'smooth' });
        }, 5000);
    }
    
    // Optional: Kirim ke server via fetch
    console.log('Pendaftaran berhasil:', formData);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        tutupModal();
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        tutupModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderEskul();
    isiDropdown();
    initMobileMenu();
    
    const form = document.getElementById('daftarForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
// ================= AUTH =================
function signup(){
    const user = prompt("Buat Username:");
    const pass = prompt("Buat Password:");

    if(!user || !pass){
        alert("❌ Tidak boleh kosong!");
        return;
    }

    localStorage.setItem("user_"+user, pass);
    alert("✅ Signup berhasil!");
}

function login(){
    const user = prompt("Username:");
    const pass = prompt("Password:");

    const saved = localStorage.getItem("user_"+user);

    if(pass === saved){
        localStorage.setItem("user", user);
        alert("✅ Login berhasil!");
    } else {
        alert("❌ Login gagal!");
    }
}

// ================= ADMIN =================
const ADMIN_PASSWORD = "admin123";

function adminPanel(){
    const pass = prompt("Masukkan password admin:");

    if(pass !== ADMIN_PASSWORD){
        alert("❌ Password salah!");
        return;
    }

    let pilihan = prompt(
`ADMIN MENU:
1. Tambah Eskul
2. Edit Eskul
3. Hapus Eskul`
    );

    if(pilihan == "1") tambahEskul();
    if(pilihan == "2") editEskul();
    if(pilihan == "3") hapusEskul();
}

function tambahEskul(){
    const nama = prompt("Nama Eskul:");
    const kategori = prompt("Kategori:");
    const deskripsi = prompt("Deskripsi:");
    const jadwal = prompt("Jadwal:");

    eskulData.push({
        nama, kategori, deskripsi,
        image: "",
        jadwal,
        pembina: "",
        prestasi: ""
    });

    renderEskul();
    isiDropdown();

    alert("✅ Eskul ditambahkan!");
}

function editEskul(){
    let list = eskulData.map((e,i)=> `${i}. ${e.nama}`).join("\n");
    let index = prompt("Pilih index:\n" + list);

    if(!eskulData[index]) return;

    eskulData[index].nama = prompt("Nama baru:", eskulData[index].nama);
    eskulData[index].deskripsi = prompt("Deskripsi:", eskulData[index].deskripsi);
    eskulData[index].jadwal = prompt("Jadwal:", eskulData[index].jadwal);

    renderEskul();
    isiDropdown();

    alert("✏️ Eskul berhasil diedit!");
}

function hapusEskul(){
    let list = eskulData.map((e,i)=> `${i}. ${e.nama}`).join("\n");
    let index = prompt("Hapus index:\n" + list);

    if(!eskulData[index]) return;

    eskulData.splice(index,1);

    renderEskul();
    isiDropdown();

    alert("🗑️ Eskul dihapus!");
}


// ================= DATA ESKUL =================
const eskulData = [
    { nama: "Osis", kategori: "Kepemimpinan", deskripsi: "Organisasi siswa", image:"", jadwal:"", pembina:"" },
    { nama: "Pramuka", kategori: "Kedisiplinan", deskripsi: "Kegiatan pramuka", image:"", jadwal:"", pembina:"" }
];

// ================= RENDER =================
let eskulTerpilihIndex = null;
let currentEskulIndex = null;

function renderEskul() {
    const container = document.getElementById('eskul-list');
    if (!container) return;
    
    container.innerHTML = '';
    eskulData.forEach((eskul, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-body">
                <h3>${eskul.nama}</h3>
                <p>${eskul.deskripsi}</p>
                <small>${eskul.jadwal}</small>
            </div>
        `;
        card.onclick = () => tampilkanDetail(index);
        container.appendChild(card);
    });
}

// ================= MODAL =================
function tampilkanDetail(index) {
    const eskul = eskulData[index];
    currentEskulIndex = index;

    document.getElementById('modal-nama').textContent = eskul.nama;
    document.getElementById('modal-deskripsi').textContent = eskul.deskripsi;

    document.getElementById('modal').style.display = 'flex';
}

function tutupModal() {
    document.getElementById('modal').style.display = 'none';
}

// ================= DROPDOWN =================
function isiDropdown() {
    const utama = document.getElementById('eskul_utama');
    const cadangan = document.getElementById('eskul_cadangan');

    if (!utama || !cadangan) return;

    while (utama.options.length > 1) utama.remove(1);
    while (cadangan.options.length > 1) cadangan.remove(1);

    eskulData.forEach(eskul => {
        utama.innerHTML += `<option>${eskul.nama}</option>`;
        cadangan.innerHTML += `<option>${eskul.nama}</option>`;
    });
}

// ================= FORM =================
function handleSubmit(e) {
    e.preventDefault();

    // 🔒 WAJIB LOGIN
    const user = localStorage.getItem("user");
    if (!user) {
        alert("❌ Harus login dulu!");
        return;
    }

    alert("✅ Pendaftaran berhasil!");
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    renderEskul();
    isiDropdown();

    document.getElementById('daftarForm')
        ?.addEventListener('submit', handleSubmit);
});
// ================= AUTH =================
function signup(){
    const user = prompt("Buat Username:");
    const pass = prompt("Buat Password:");

    if(!user || !pass){
        alert("❌ Tidak boleh kosong!");
        return;
    }

    localStorage.setItem("user_"+user, pass);
    alert("✅ Signup berhasil!");
}

function login(){
    const user = prompt("Username:");
    const pass = prompt("Password:");

    const saved = localStorage.getItem("user_"+user);

    if(pass === saved){
        localStorage.setItem("user", user);
        alert("✅ Login berhasil!");
    } else {
        alert("❌ Login gagal!");
    }
}

// ================= ADMIN =================
const ADMIN_PASSWORD = "admin123";

function adminPanel(){
    const pass = prompt("Masukkan password admin:");

    if(pass !== ADMIN_PASSWORD){
        alert("❌ Password salah!");
        return;
    }

    let pilihan = prompt(
`ADMIN MENU:
1. Tambah Eskul
2. Edit Eskul
3. Hapus Eskul`
    );

    if(pilihan == "1") tambahEskul();
    if(pilihan == "2") editEskul();
    if(pilihan == "3") hapusEskul();
}

function tambahEskul(){
    const nama = prompt("Nama Eskul:");
    const kategori = prompt("Kategori:");
    const deskripsi = prompt("Deskripsi:");
    const jadwal = prompt("Jadwal:");

    eskulData.push({
        nama,
        kategori,
        deskripsi,
        image: "",
        jadwal,
        pembina: "",
        prestasi: ""
    });

    renderEskul();
    isiDropdown();
    alert("✅ Eskul ditambahkan!");
}

function editEskul(){
    let list = eskulData.map((e,i)=> `${i}. ${e.nama}`).join("\n");
    let index = prompt("Pilih index:\n" + list);

    if(!eskulData[index]) return;

    eskulData[index].nama = prompt("Nama:", eskulData[index].nama);
    eskulData[index].deskripsi = prompt("Deskripsi:", eskulData[index].deskripsi);
    eskulData[index].jadwal = prompt("Jadwal:", eskulData[index].jadwal);

    renderEskul();
    isiDropdown();
    alert("✏️ Berhasil diedit!");
}

function hapusEskul(){
    let list = eskulData.map((e,i)=> `${i}. ${e.nama}`).join("\n");
    let index = prompt("Hapus index:\n" + list);

    if(!eskulData[index]) return;

    eskulData.splice(index,1);

    renderEskul();
    isiDropdown();
    alert("🗑️ Berhasil dihapus!");
}


// ================= DATA ESKUL =================
const eskulData = [
    { 
        nama: "Osis", 
        kategori: "Kepemimpinan & Kedisiplinan",
        deskripsi: "Organisasi siswa yang mengembangkan kepemimpinan.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: ""
    },
    { 
        nama: "Pramuka", 
        kategori: "Kepemimpinan & Kedisiplinan",
        deskripsi: "Kegiatan kepramukaan.", 
        image: "", 
        jadwal: "", 
        pembina: "", 
        prestasi: ""
    }
];

// ================= DOM =================
let eskulTerpilihIndex = null;
let currentEskulIndex = null;

// ================= RENDER =================
function renderEskul() {
    const container = document.getElementById('eskul-list');
    if (!container) return;
    
    container.innerHTML = '';
    eskulData.forEach((eskul, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-body">
                <h3>${eskul.nama}</h3>
                <p>${eskul.deskripsi}</p>
                <small>${eskul.jadwal}</small>
            </div>
        `;
        card.onclick = () => tampilkanDetail(index);
        container.appendChild(card);
    });
}

// ================= MODAL =================
function tampilkanDetail(index) {
    const eskul = eskulData[index];
    currentEskulIndex = index;

    document.getElementById('modal-nama').textContent = eskul.nama;
    document.getElementById('modal-deskripsi').textContent = eskul.deskripsi;

    document.getElementById('modal').style.display = 'flex';
}

function tutupModal() {
    document.getElementById('modal').style.display = 'none';
}

// ================= DROPDOWN =================
function isiDropdown() {
    const utama = document.getElementById('eskul_utama');
    const cadangan = document.getElementById('eskul_cadangan');

    if (!utama || !cadangan) return;

    while (utama.options.length > 1) utama.remove(1);
    while (cadangan.options.length > 1) cadangan.remove(1);

    eskulData.forEach(eskul => {
        utama.innerHTML += `<option>${eskul.nama}</option>`;
        cadangan.innerHTML += `<option>${eskul.nama}</option>`;
    });
}

// ================= VALIDASI =================
function validateForm(data) {
    const errors = [];

    if (!data.nama || data.nama.length < 3) errors.push('Nama minimal 3 karakter');
    if (!data.nis || data.nis.length < 5) errors.push('NIS tidak valid');
    if (!data.kelas) errors.push('Kelas wajib diisi');

    return errors;
}

// ================= SUBMIT =================
function handleSubmit(e) {
    e.preventDefault();

    // 🔒 WAJIB LOGIN
    const user = localStorage.getItem("user");
    if (!user) {
        alert("❌ Harus login dulu!");
        return;
    }

    alert("✅ Pendaftaran berhasil!");
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    renderEskul();
    isiDropdown();

    document.getElementById('daftarForm')
        ?.addEventListener('submit', handleSubmit);
});