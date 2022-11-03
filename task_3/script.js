const judul = document.getElementById("judul");
const deskripsi = document.getElementById("deskripsi");
const gambar = document.querySelector("div", "img");
const tombol1 = document.getElementById("tombol1");
const tombol2 = document.getElementById("tombol2");
const tombol3 = document.getElementById("tombol3");

function ubah() {
  judul.innerHTML = "Pengalaman";
  deskripsi.innerHTML = `
    <i><strong>Desainer Grafis</i></strong><br />
      2021-sekarang | Freelancer
      <ul type="disc" style="margin-top:0px;">
        <li>Membuat desain dan ilustrasi melalui desain grafis menggunakan perangkat lunak seni digital</li>
        <li>Menentukan ide dan mengimplementasikan kedalam sebuah ilustrasi berbagai bentuk desain grafis</li>
      </ul>
    <strong><i>Staff Desain Kreatif</i></strong><br />
      2022-sekarang | Himpunan Mahasiswa Informatika ITERA
      <ul type="disc" style="margin-top:0px;">
        <li>Mendesain kebutuhan sosial media instagram HMIF ITERA</li>
        <li>Mendesain bahan campaign seperti poster dan konten lainnya</li>
      </ul>
    <strong><i>Social Media Manager</i></strong><br />
      2021-sekarang | Exploit'20
      <ul type="disc" style="margin-top:0px;">
        <li>Mengawasi interaksi sosial media instagram Exploit'20 dengan pengikut</li>
        <li>Memposting semua konten & dokumentasi kegiatan Exploit'20</li>
      </ul>
    <strong><i> Publikasi Dokumentasi</i></strong><br />
      2022 | Funcoustic HME x HMIF
      <ul type="disc" style="margin-top:0px;">
        <li>Mengabadikan momen kegiatan Funcoustic dengan kamera digital</li>
      </ul>
</div>`;
}

function ubahfoto() {
  gambar.innerHTML =
    '<img src="https://github.com/indraphy/Mini-project/blob/main/potoku1.jpeg?raw=true" alt="Image" height="180" width="130">';
}

function ubahtampilan() {
  var styles = `html{margin: 0;padding: 0;}
  body {
    font-family: bahnschrift;
    background-color: rgb(219, 212, 143);
  }
  .box1{
    background-color: rgb(162, 181, 207);
    margin: 10px 10px 10px 10px;
    border-radius: 25px;
    padding: 30px;
    width: 700px;
    box-shadow: 0 12.5px 20px 1px rgba(0, 0, 0, 0.3);
    
  }
  .box1:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  .button {
    background-color: #3e647e;
    border: none;
    color: white;
    padding: 10px 40px;
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    align-items: center;
    font-size: 16px;
    margin: 20px auto 0;
    cursor: pointer;
    border-radius: 12px;
  }
  .button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  img{
    border-radius : 20px
  }
  `;
  var styleSheet = document.querySelector("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

tombol1.addEventListener("click", ubah);
tombol2.addEventListener("click", ubahfoto);
tombol3.addEventListener("click", ubahtampilan);
