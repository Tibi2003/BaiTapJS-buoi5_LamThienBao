// Bài 1
function ketQuaDuThi() {
    var diem1 = document.getElementById("diem-mon-1").value * 1;
    var diem2 = document.getElementById("diem-mon-2").value * 1;
    var diem3 = document.getElementById("diem-mon-3").value * 1;
    var diemChuan = document.getElementById("diem-chuan").value * 1;
    var diemKhuVuc;
    var diemDoiTuong;
    if (document.getElementById("khu-vuc-uu-tien").value == "A") {
      diemKhuVuc = 2;
    } else if (document.getElementById("khu-vuc-uu-tien").value == "B") {
      diemKhuVuc = 1;
    } else if (document.getElementById("khu-vuc-uu-tien").value == "C") {
      diemKhuVuc = 0.5;
    } else {
      diemKhuVuc = 0;
    }
    if (document.getElementById("doi-tuong-uu-tien").value == "1") {
      diemDoiTuong = 2.5;
    } else if (document.getElementById("doi-tuong-uu-tien").value == "2") {
      diemDoiTuong = 1.5;
    } else if (document.getElementById("doi-tuong-uu-tien").value == "3") {
      diemDoiTuong = 1;
    } else {
      diemDoiTuong = 0;
    }
    var tongDiem = diem3 + diem2 + diem1 + diemDoiTuong + diemKhuVuc;
    if (tongDiem >= diemChuan) {
      document.getElementById(
        "ketquaduthi"
      ).innerText = `Chúc mừng bạn đã trúng tuyển với số điểm là ${tongDiem}`;
    } else {
      document.getElementById(
        "ketquaduthi"
      ).innerText = `Xin chia buồn bạn chỉ đạt ${tongDiem}`;
    }
  }

// Bài 2
function tinhTienDien() {
    var soDien = document.getElementById("so-dien").value * 1;
    var hoTen = document.getElementById("ho-ten").value;
    var tienDien50kwDau = 500;
    var tienDien50Den100kw = 650;
    var tienDien100Den200kw = 850;
    var tienDien200Den350kw = 1100;
    var tienDienCaoNhat = 1300;
    var tienDien;
    if (soDien <= 50) {
      tienDien = soDien * tienDien50kwDau;
    } else if (soDien > 50 && soDien <= 100) {
      tienDien = 50 * tienDien50kwDau + (soDien - 50) * tienDien50Den100kw;
    } else if (soDien > 100 && soDien <= 200) {
      tienDien =
        50 * tienDien50kwDau +
        50 * tienDien50Den100kw +
        (soDien - 100) * tienDien100Den200kw;
    } else if (soDien > 200 && soDien <= 350) {
      tienDien =
        50 * tienDien50kwDau +
        50 * tienDien50Den100kw +
        100 * tienDien100Den200kw +
        (soDien - 200) * tienDien200Den350kw;
    } else {
      tienDien =
        50 * tienDien50kwDau +
        50 * tienDien50Den100kw +
        100 * tienDien100Den200kw +
        150 * tienDien200Den350kw +
        (soDien - 350) * tienDienCaoNhat;
    }
    document.getElementById(
      "sotiendien"
    ).innerText = `Họ tên: ${hoTen}, số tiền điện bạn phải trả là ${tienDien.toLocaleString()} VND`;
  }
  
// Bài 3
function tinhThueThuNhap() {
    var thuNhap = document.getElementById("income").value * 1;
    var person = document.getElementById("person").value * 1;
    var thuNhapChiuThue = thuNhap - 4 - person * 1.6;
    var tienThue;
    if (thuNhapChiuThue <= 60) {
      tienThue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
      tienThue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue > 120 && thuNhapChiuThue < 210) {
      tienThue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
      tienThue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
      tienThue =
        60 * 0.05 +
        60 * 0.1 +
        90 * 0.15 +
        174 * 0.2 +
        (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
      tienThue =
        60 * 0.05 +
        60 * 0.1 +
        90 * 0.15 +
        174 * 0.2 +
        240 * 0.25 +
        (thuNhapChiuThue - 624) * 0.3;
    } else {
      tienThue =
        60 * 0.05 +
        60 * 0.1 +
        90 * 0.15 +
        174 * 0.2 +
        240 * 0.25 +
        336 * 0.3 +
        (thuNhapChiuThue - 960) * 0.35;
    }
    document.getElementById(
      "sotienthue"
    ).innerText = `Số tiền đóng thuế thu nhập cá nhân là ${tienThue.toLocaleString()} triệu đồng`;
  }
  
// Bài 4
var loaiKhachHang;
function batKhachHangDoanhNghiep() {
  loaiKhachHang = document.getElementById("loaikhachhang").value;
  if (loaiKhachHang == "doanhnghiep") {
    document.getElementById(
      "doanhnghiep"
    ).innerHTML = `<label for="" class="form-label">Số kết nối</label>
    <input
      type="text"
      class="form-control"
      name=""
      id="soketnoi"
      aria-describedby="helpId"
      placeholder="Số kết nối"
    />`;
  } else {
    document.getElementById("doanhnghiep").innerHTML = "";
  }
}

var phiXuLyHoaDon, phiDichVuCoBan, phiThue1Kenh, soKenh, soTienCap;
function tinhTienCap() {
  var tenKhachHang = document.getElementById("makhachhang").value;
  loaiKhachHang = document.getElementById("loaikhachhang").value;
  soKenh = document.getElementById("sokenh").value * 1;
  if (loaiKhachHang == "canhan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThue1Kenh = 7.5;
    var phiThueKenh = phiDichVuCoBan + phiXuLyHoaDon + soKenh * phiThue1Kenh;
  } else {
    var soKetNoi = document.getElementById("soketnoi").value * 1;
    if (soKetNoi <= 10) {
      phiXuLyHoaDon = 15;
      phiDichVuCoBan = 75;
      phiThue1Kenh = 50;
      var phiThueKenh = phiDichVuCoBan + phiXuLyHoaDon + soKenh * phiThue1Kenh;
    } else {
      phiXuLyHoaDon = 15;
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
      phiThue1Kenh = 50;
      var phiThueKenh = phiDichVuCoBan + phiXuLyHoaDon + soKenh * phiThue1Kenh;
    }
  }
  console.log(phiThueKenh, loaiKhachHang, tenKhachHang);
  document.getElementById(
    "tiencap"
  ).innerText = `Số tiền cap mà ${tenKhachHang} phải đóng là ${phiThueKenh.toLocaleString()}$`;
}
