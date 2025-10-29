// -------------------------------------------------------------------------
// 1. Data Produk (untuk mempermudah pengelolaan)
// -------------------------------------------------------------------------

const productData = [
    { id: 'lavender', name: 'Lavender Dream', price: 89000 },
    { id: 'sandalwood', name: 'Sandalwood Calm', price: 95000 },
    { id: 'citrus', name: 'Citrus Refresh', price: 85000 }
];

// -------------------------------------------------------------------------
// 2. Fungsi Tombol WhatsApp
// -------------------------------------------------------------------------

/**
 * Membuka link WhatsApp dengan pesan yang sudah dienkode.
 * @param {string} defaultMessage - Pesan default jika tidak ada detail produk.
 * @param {string | null} productId - ID produk (misal: 'lavender', 'sandalwood').
 */
function openWhatsApp(defaultMessage, productId = null) {
    const phoneNumber = '6282252515391'; // Ganti dengan nomor WhatsApp Anda

    let message = defaultMessage;

    if (productId) {
        // Cari data produk berdasarkan ID
        const product = productData.find(p => p.id === productId);
        
        if (product) {
            const formattedPrice = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(product.price);
            
            message = `Halo ecoxyztem, saya tertarik untuk memesan produk ${product.name} (${formattedPrice}). Mohon info proses pemesanan lebih lanjut.`;
        }
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}


// -------------------------------------------------------------------------
// 3. Efek Navbar Saat Digulir
// -------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNav');
    const scrollThreshold = 100; // Jarak gulir sebelum navbar berubah

    function toggleNavbarClass() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Panggil saat load pertama kali
    toggleNavbarClass();

    // Panggil saat event scroll
    window.addEventListener('scroll', toggleNavbarClass);
});
