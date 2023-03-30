function NhanVien () {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.luongCoBan = 0;
    this.chucVu = '';
    this.gioLam = 0;
    this.loaiNhanVien = '';
    this.tongLuong = function () {
        var heSoLuong = 0;
        var tongLuong = 0;
        if (chucVu === "Sếp") {
            heSoLuong = 3;
          } else if (chucVu === "Trưởng phòng") {
            heSoLuong = 2;
          } else if (chucVu === "Nhân viên") {
            heSoLuong = 1;
          } else {
            heSoLuong = 0;
          }
           tongLuong = heSoLuong * this.luongCoBan;
          return tongLuong;
        }


}