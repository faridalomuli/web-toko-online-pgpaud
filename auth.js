document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // cegah reload halaman

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Data admin contoh (bisa diganti nanti sesuai server)
  const adminUser = "admin";
  const adminPass = "12345";

  // Fungsi login validasi
  function loginAdmin(username, password) {
    if (username === adminUser && password === adminPass) {
      localStorage.setItem("isAdminLoggedIn", "true");
      alert("Login berhasil!");
      window.location.href = "admin.html";
    } else {
      alert("Username atau password salah.");
    }
  }

  // Panggil fungsi login
  loginAdmin(username, password);
});
