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
  