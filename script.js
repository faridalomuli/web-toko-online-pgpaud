const produkList = [
  { id: 1, nama: "Kaos Polos Hitam", harga: 50000, gambar: "img/kaos1.jpg" },
  { id: 2, nama: "Kaos Putih Lengan Panjang", harga: 60000, gambar: "img/kaos2.jpg" }
];

function renderProduk() {
  const container = document.getElementById('produk-list');
  if (!container) return;

  produkList.forEach((produk) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${produk.gambar}" width="100"><br>
      <strong>${produk.nama}</strong><br>
      Rp ${produk.harga}<br>
      <button onclick="tambahKeKeranjang(${produk.id})">Tambah ke Keranjang</button>
    `;
    container.appendChild(div);
  });
}

function tambahKeKeranjang(id) {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.push(produkList.find(p => p.id === id));
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert("Produk ditambahkan ke keranjang!");
}

function tampilkanKeranjang() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const div = document.getElementById("keranjang");
  if (!div) return;

  if (keranjang.length === 0) {
    div.innerHTML = "<p>Keranjang kosong</p>";
    return;
  }

  keranjang.forEach((item) => {
    const el = document.createElement('div');
    el.innerHTML = `
      <strong>${item.nama}</strong> - Rp ${item.harga}
    `;
    div.appendChild(el);
  });
}

// Jalankan fungsi jika di halaman yang sesuai
renderProduk();
tampilkanKeranjang();
