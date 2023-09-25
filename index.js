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
  
    console.log({
      diem3,
      diem2,
      diem1,
      diemChuan,
      diemKhuVuc,
      diemDoiTuong,
      tongDiem,
    });
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
  
  