# Instruksi

1. Buatlah fitur-fitur Front End untuk sebuah aplikasi E-Commerce. Aplikasi ini total memiliki modul yang akan dijabarkan pada slide-slide berikutnya.
2. Gunakan intuisi kamu dalam mengembangkan fitur-fiturnya. Misal : jika kamu sudah login, maka kamu tidak bisa akses halaman login
3. Pelajari dan implementasi fitur-fitur dari API yang diberikan dengan sebaik-baiknya agar aplikasi E-Commerce yang dihasilkan dapat semakin baik dan maksimal

# Tools yang digunakan

1. NextJS (Framework ReactJS) with typescript
2. Bootstrap & React Bootstrap
3. Bootstrap Icons
4. SASS
5. swiper
6. swr

# API Data diambil dari

API - https://fakestoreapi.com/

UI Framework Bebas. Design yang dicontohkan hanyalah sebagai ilustrasi. Silakan berkreasi

# Ketentuan

1. HOME PAGE
   Pada halaman ini, terdapat listing product yang bisa didapat dari Fake Store API. Ketika akses halaman
   pertama kali, ambil data product nya dari API, lalu simpan semua product nya ke dalam redux.
   Selanjutnya, tinggal mengambil dari redux. Tambahkan informasi quantity untuk setiap product, default 20 per
   item.

Jika belum Login : klik Tombol Add To Cart akan redirect ke halaman Login
Jika sudah Login :

- Tombol Add To Cart akan otomatis menambah Cart dengan barang yang dipilih
- Jika kita tekan tombol Add To Cart lebih dari 1 kali pada 1 item, quantity barang di cart akan ikut bertambah

2. LOGIN PAGE

- Pada halaman ini, terdapat form login yang menerima email dan
  password sebagai input
- Pelajari dan implementasikan API Endpoint dari Fake Store untuk Login. Sebagai catatan, kita hanya bisa login memakai salah satu dari data user di https://fakestoreapi.com/users . Oleh karena itu, untuk keperluan demo aplikasi, silakan berikan info default login yang bisa dipakai dari daftar users tadi
- Manfaatkan localStorage untuk menyimpan token. Token ini sebagai “kunci” untuk mengakses setiap halaman yang hanya bisa diakses oleh user yang telah login

3. DETAIL PRODUCT PAGE
   Pada halaman ini, tampilkan detail product yang bisa didapat dari Fake Store API. Harap diperhatikan, tidak semua detail pada design tersedia pada API, silakan disesuaikan
   Jika belum Login : klik Tombol Add To Cart akan redirect ke halaman Login
   Jika sudah Login : klik tombol Add To Cart akan menambah item ke cart beserta quantity yang dimasukkan

4. CART PAGE + CHECKOUT / PEMBAYARAN

- Halaman ini hanya bisa diakses jika sudah login dari link Cart
- Jika belum melakukan pembelanjaan apapun, halaman ini berisi tulisan “Anda belum memilih item”
- Jika ada 1 atau beberapa item yang quantity nya lebih besar daripada sisa stok, tampilkan tulisan seperti di samping atau silakan berkreasi dengan design yang lebih baik
- Quantity dapat dirubah. Jika terjadi perubahan quantity, langsung lakukan cek kepada stok item. Jika quantity melebihi stok lakukan perubahan design seperti pada point di atas
- Ketika tombol Checkout di klik, kurangi stok setiap item sesuai dengan quantity yang kita masukkan
- Untuk item yang quantity nya tidak terpenuhi, tidak dilakukan pengurangan stok
- Setelah checkout, redirect ke halaman home

5. ADMIN PAGE - STOK UPDATE

- Sediakan suatu sistematika login lokal tanpa akses ke Fake Store API khusus untuk admin, dengan email admin@bukapedia.com dan password admin123
- Setelah login, perhatikan menu navigation akan menjadi link-link untuk Rekap Penjualan dan Logout. Link Home akan membawa kita ke halaman Products ini
- Fasilitas di halaman ini hanyalah listing product dan update stock saja. Isi angka stok kemudian klik Update untuk melakukan update stok pada item yang bersangkutan

6. ADMIN PAGE - REKAP PENJUALAN

- Halaman ini hanya berisi rekap penjualan saja
- Semua item yang telah terjual sesuai dengan quantity nya akan dihitung totalnya dan dijumlahkan sebagai angka
  pendapatan total
