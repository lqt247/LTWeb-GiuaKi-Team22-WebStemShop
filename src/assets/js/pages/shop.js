//import { listProduct } from "./data.js";


// -------------------------kiểu xem (view type) ----------------------
const type1 = document.getElementById('head__type1');
const type2 = document.getElementById('head__type2');
const type3 = document.getElementById('head__type3');

const bodyCard = document.querySelector('.list-product__body__card');

const classType1 = 'list-product__body__card';
const classType2 = 'list-product__body__card__type2';
const classType3 = 'list-product__body__card__type3';

type1.addEventListener('click', () => {
    type1.style.backgroundColor = '#FF6C80';
    type2.style.backgroundColor = '#E9E8E7';
    type3.style.backgroundColor = '#E9E8E7';

    if (bodyCard.className === classType2) {
        bodyCard.classList.replace(classType2, classType1)
    } else if (bodyCard.className === classType3) {
        bodyCard.classList.replace(classType3, classType1)
    }
});
type2.addEventListener('click', () => {
    type2.style.backgroundColor = '#FF6C80';
    type1.style.backgroundColor = '#E9E8E7';
    type3.style.backgroundColor = '#E9E8E7';

    if (bodyCard.className === classType1) {
        bodyCard.classList.replace(classType1, classType2)
    } else if (bodyCard.className === classType3) {
        bodyCard.classList.replace(classType3, classType2)
    }
});
type3.addEventListener('click', () => {
    type3.style.backgroundColor = '#FF6C80';
    type1.style.backgroundColor = '#E9E8E7';
    type2.style.backgroundColor = '#E9E8E7';

    if (bodyCard.className === classType1) {
        bodyCard.classList.replace(classType1, classType3)
    } else if (bodyCard.className === classType2) {
        bodyCard.classList.replace(classType2, classType3)
    }
});

//--------------------Catalog----------------------
const iconPlusDoChoiLapRap = document.getElementById('iconPlusDoChoiLapRap');
const listCatalog = document.getElementById('listDoChoiLapRap');
//show
iconPlusDoChoiLapRap.addEventListener('click', () => {
    if (iconPlusDoChoiLapRap.className === 'fa-plus') {
        iconPlusDoChoiLapRap.classList.replace('fa-plus', 'fa-minus')
        listCatalog.style.display = 'block';
    }

})

// ------------------chuyển trang productdetail----------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. TÌM TẤT CẢ CÁC THẺ SẢN PHẨM
    const productCards = document.querySelectorAll('.list-product__body__card__container');

    // 2. DUYỆT QUA TỪNG THẺ VÀ GẮN SỰ KIỆN CLICK
    productCards.forEach(card => {
        card.addEventListener('click', function () {
            // Lấy đường dẫn từ thuộc tính data-url mà bạn đã viết trong HTML
            const url = this.getAttribute('data-url');

            // Nếu có đường dẫn thì chuyển trang
            if (url) {
                window.location.href = url;
            } else {
                // Thông báo nếu sản phẩm chưa có trang demo (tùy chọn)
                alert("Sản phẩm này đang cập nhật nội dung!");
            }
        });
    });
});


// ------------chức năng tìm kiếm sp-------------
//lấy ra tất cả các sp
const products = document.querySelectorAll('.list-product__body__card__container')
//lấy ra tên của tất cả các sp
const productName = document.querySelectorAll('.name-product');
//element input
const searchInput = document.getElementById('search-product');

searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase(); //lấy ra dữ liệu nhập trog input
    productName.forEach((nameElement, index) => {
        const name = nameElement.textContent.toLowerCase(); // Lấy tên sp

        if (name.includes(keyword)) {
            products[index].style.display = "block"; // Hiện sp phù hợp
        } else {
            products[index].style.display = "none";  // Ẩn sp không khớp
        }
    });
})

// -------------------------chức năng lọc sp-------------------

// -----lọc theo giá------
//lấy ra giá tất cả các sp
const productPrice = document.querySelectorAll('.product-price');
//lấy ra tất cả các input checkbox
const checkboxPrice = document.querySelectorAll('.checkbox-price');
//duyệt qua từng checkbox và add event cho từng thằng
checkboxPrice.forEach(cb => {
    cb.addEventListener('change', (e) => {
        // Bỏ check các checkbox khác
        checkboxPrice.forEach(other => {
            if (other !== e.target) {
                other.checked = false;
            }
        });
        // Lấy giá trị checkbox được chọn
        const selectedValue = e.target.checked ? e.target.value : null;

        // Duyệt qua từng sản phẩm
        products.forEach((product, index) => {
            // Lấy text trong .product-price
            let priceText = productPrice[index].textContent;

            // Làm sạch chuỗi: xóa dấu . , đ , khoảng trắng
            priceText = priceText.replace(/[^\d]/g, "");

            // Chuyển sang số
            const price = parseInt(priceText);

            let inRange = false; // cờ kiểm tra sản phẩm có nằm trong khoảng ko

            if (selectedValue === "duoi200" && price < 200000) inRange = true;
            else if (selectedValue === "200-1tr" && price >= 200000 && price <= 1000000) inRange = true;
            else if (selectedValue === "1tr-2tr" && price > 1000000 && price <= 2000000) inRange = true;
            else if (selectedValue === "2tr-4tr" && price > 2000000 && price <= 4000000) inRange = true;
            else if (selectedValue === "tren4tr" && price > 4000000) inRange = true;

            // Ẩn/hiện sản phẩm
            if (selectedValue === null || inRange) {
                product.style.display = "block"; // hiện
            } else {
                product.style.display = "none";  // ẩn
            }
        });

    })
})

