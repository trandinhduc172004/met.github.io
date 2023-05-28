
// js phan quang cao
let btnTat = document.querySelector(".btnTat")
let banner = document.querySelector(".banner")

btnTat.addEventListener("click", function () {
    banner.setAttribute("style", "display: none")
})

setTimeout(function () {
    banner.setAttribute("style", "display: block")
}, 5000)

// js ket thuc phan quang cao

//js phan san pham chi tiet
let btn_open = document.querySelectorAll(".buy-button");
let btn_close = document.querySelectorAll(".btn-close");
let modal_container = document.querySelectorAll(".modal-container");
for (let i = 0; i < btn_open.length; i++) {
    btn_open[i].addEventListener('click', () => {
        modal_container[i].classList.add('show');
    });
    btn_close[i].addEventListener('click', () => {
        modal_container[i].classList.remove('show');
    });
}
                                                        // ben trong
function cong() {
    var valueInput = document.querySelector(".quantityIn").value;
    valueInput++;
    document.querySelector(".quantityIn").value = valueInput;
}
function tru() {
    var valueInput = document.querySelector(".quantityIn").value;
    if (valueInput <= 1) {
        valueInput =1;
        alert('Số Lượng Sản Phẩm Không Được Đưới 1')
    } else {
        valueInput--;
    }
    document.querySelector(".quantityIn").value = valueInput;
}
                                                //kt ben trong

//ket thuc js phan san pham chi tiet
// nut mua hang
function muahang(){
   alert('Đã Mua Hàng Thành Công')
}
//kt luc mua hang
