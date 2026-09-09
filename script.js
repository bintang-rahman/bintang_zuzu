// ===============================
// TEMA DARK / LIGHT
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeToggle.textContent = "🌙";
        } else {
            themeToggle.textContent = "☀️";
        }
    });
}


// ===============================
// ACCORDION / BUKA TUTUP MATERI
// ===============================

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        // Tutup semua accordion lainnya
        document.querySelectorAll(".accordion-content").forEach((item) => {
            if (item !== content) {
                item.style.maxHeight = null;
            }
        });

        // Buka/tutup accordion yang dipilih
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


// ===============================
// TOMBOL KEMBALI KE ATAS
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ===============================
// ANIMASI SAAT SCROLL
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// ===============================
// CONTOH VARIABLE JAVASCRIPT
// ===============================

// Variable menggunakan let
let nama = "Bintang Muhammad Rahman";
let kelas = "X PPLG 1";
let umur = 16;

// Variable menggunakan const
const sekolah = "SMK";

// Menampilkan data ke console
console.log("Nama:", nama);
console.log("Kelas:", kelas);
console.log("Umur:", umur);
console.log("Sekolah:", sekolah);


// ===============================
// DATA PRODUK SEDERHANA
// ===============================

const namaProduk = "Laptop Gaming";
const kategoriProduk = "Elektronik";
const hargaProduk = 8500000;
let stokProduk = 10;
const merekProduk = "ASUS";
let statusProduk = "Tersedia";

console.log("Nama Produk:", namaProduk);
console.log("Kategori:", kategoriProduk);
console.log("Harga:", hargaProduk);
console.log("Stok:", stokProduk);
console.log("Merek:", merekProduk);
console.log("Status:", statusProduk);


// ===============================
// CONTOH PERUBAHAN NILAI LET
// ===============================

let nilai = 80;

console.log("Nilai awal:", nilai);

nilai = 90;

console.log("Nilai setelah diubah:", nilai);


// ===============================
// INFORMASI SISWA
// ===============================

let namaSiswa = "Bintang Muhammad Rahman";
let kelasSiswa = "X PPLG 1";
let jurusan = "Pengembangan Perangkat Lunak dan Gim";
let kota = "Bandung";
let hobi = "Bermain game";
let citaCita = "Programmer";

console.log("=== DATA SISWA ===");
console.log("Nama:", namaSiswa);
console.log("Kelas:", kelasSiswa);
console.log("Jurusan:", jurusan);
console.log("Kota:", kota);
console.log("Hobi:", hobi);
console.log("Cita-cita:", citaCita);