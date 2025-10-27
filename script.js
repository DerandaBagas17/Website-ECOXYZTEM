// Konfigurasi Nomor WhatsApp Anda
const WHATSAPP_NUMBER = "6282252515391"; // Ganti dengan Nomor WA Anda (tanpa tanda +)

/**
 * Fungsi untuk membuka link WhatsApp dengan pesan otomatis.
 * @param {string} message - Pesan yang akan otomatis terisi di WA (harus di-encode).
 */
function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
}

// Tambahkan logika JavaScript lainnya di sini jika diperlukan (misalnya: animasi scroll, validasi form)

// Contoh: JavaScript untuk navbar berubah warna saat scroll (opsional)
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNav');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
});