// biến array lưu trữ dữ liệu nhân viên

var arrNhanVien = [];

document.querySelector('#btnThemNV').onclick = function (event) {

// chặn sự kiện reload
event.preventDefault();

var nv = new NhanVien();
nv.taiKhoan = document.querySelector('#tknv').value;
nv.hoTen = document.querySelector('#hoTen').value;
nv.email = document.querySelector('#email').value;
nv.ngayLam = document.querySelector('#datepicker').value;
nv.matKhau = document.querySelector('#password').value;
nv.chucVu = document.querySelector('#chucVu');
nv.luongCoBan = parseInt(document.querySelector('#luongCB').value);
nv.gioLam = parseInt(document.querySelector('#gioLam').value);


var valid = true;
var messError = '';
// kiểm tra rỗng 
valid = kiemTraRong(nv.taiKhoan,'taiKhoan') & kiemTraRong(nv.hoTen,'hoTen') & kiemTraRong(nv.email,'email')  & kiemTraRong(nv.matKhau,'password') & kiemTraRongSo(nv.luongCoBan,'luongCB') & kiemTraRongSo(nv.gioLam,'gioLam');
// kiểm tra chức vụ
valid = kiemTraChucVu('chucvu', 'error-select-chucvu', 'Chức vụ');
// kiểm tra email
valid =  kiemTraEmail(nv.email,'email');
// kiểm tra độ dài tài khoản
valid = kiemTraDoDai(nv.taiKhoan,'taiKhoan',4,6);
// kiểm tra tên nv phải là chữ
valid = kiemTraKyTu(nv.hoTen,'hoTen');
// kiểm tra password 
valid = kiemTraMatKhau(nv.matKhau,'password',4,10,1,1,1);
// kiểm tra ngày làm đúng định dạng mm/dd/yyyy
valid = kiemTraNgayLam(nv.ngayLam,'ngayLam');
// kiểm tra lương cơ bản từ 1tr-20tr
valid = kiemTraGiaTri(nv.luongCoBan,'luongCB',1000000,20000000)
// kiểm tra số giờ làm từ 80-200 giờ 
valid = kiemTraGiaTri(nv.gioLam,'gioLam',80,200);
if(!valid) {
   
    return;
}
}

