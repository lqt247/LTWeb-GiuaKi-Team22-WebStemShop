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

// -------------------------CHỨC NĂNG LỌC TỔNG HỢP (5 BỘ LỌC)-------------------

// 1. LẤY TẤT CẢ ELEMENT CẦN THIẾT
// 'products' đã được định nghĩa ở phần tìm kiếm (search)
const productPriceElems = document.querySelectorAll('.product-price');
const productBrandElems = document.querySelectorAll('.brand'); 

const checkboxPrice = document.querySelectorAll('.checkbox-price');
const checkboxAge = document.querySelectorAll('.checkbox-age');
const checkboxSex = document.querySelectorAll('.checkbox-sex');
const checkboxBrand = document.querySelectorAll('.checkbox-brand');
const checkboxCategory = document.querySelectorAll('.checkbox-category'); // <-- MỚI


// 2. HÀM LỌC TỔNG (QUAN TRỌNG NHẤT)
function applyFilters() {
    
    // --- Lấy giá trị đang lọc (GIÁ) ---
    let selectedPrice = null;
    checkboxPrice.forEach(cb => {
        if (cb.checked) {
            selectedPrice = cb.value;
        }
    });

    // --- Lấy giá trị đang lọc (TUỔI) ---
    let selectedAge = null;
    checkboxAge.forEach(cb => {
        if (cb.checked) {
            selectedAge = cb.value;
        }
    });

    // --- Lấy giá trị đang lọc (GIỚI TÍNH) ---
    let selectedSex = null;
    checkboxSex.forEach(cb => {
        if (cb.checked) {
            selectedSex = cb.value;
        }
    });

    // --- Lấy danh sách đang lọc (THƯƠNG HIỆU) - (Cho phép chọn nhiều) ---
    const selectedBrands = [];
    checkboxBrand.forEach(cb => {
        if (cb.checked) {
            selectedBrands.push(cb.value.toLowerCase());
        }
    });

    // --- Lấy danh sách đang lọc (DANH MỤC) - (Cho phép chọn nhiều) --- (MỚI)
    const selectedCategories = [];
    checkboxCategory.forEach(cb => {
        if (cb.checked) {
            selectedCategories.push(cb.value.toLowerCase());
        }
    });


    // --- Duyệt qua từng sản phẩm để quyết định ẨN/HIỆN ---
    products.forEach((product, index) => {
        
        // === 1. KIỂM TRA GIÁ ===
        let priceText = productPriceElems[index].textContent.replace(/[^\d]/g, "");
        const price = parseInt(priceText);
        
        let priceMatch = false; 
        if (selectedPrice === null) priceMatch = true; 
        else if (selectedPrice === "duoi200" && price < 200000) priceMatch = true;
        else if (selectedPrice === "200-1tr" && price >= 200000 && price <= 1000000) priceMatch = true;
        else if (selectedPrice === "1tr-2tr" && price > 1000000 && price <= 2000000) priceMatch = true;
        else if (selectedPrice === "2tr-4tr" && price > 2000000 && price <= 4000000) priceMatch = true;
        else if (selectedPrice === "tren4tr" && price > 4000000) priceMatch = true;

        // === 2. KIỂM TRA TUỔI ===
        const productAge = product.dataset.age;
        let ageMatch = false; 
        if (selectedAge === null) ageMatch = true; 
        else if (selectedAge === productAge) ageMatch = true;

        // === 3. KIỂM TRA GIỚI TÍNH ===
        const productSex = product.dataset.sex;
        let sexMatch = false;
        if (selectedSex === null) sexMatch = true;
        else if (selectedSex === productSex) sexMatch = true;
        else if (productSex === "unisex") sexMatch = true;

        // === 4. KIỂM TRA THƯƠNG HIỆU ===
        const productBrand = productBrandElems[index].textContent.toLowerCase();
        let brandMatch = false;
        if (selectedBrands.length === 0) brandMatch = true;
        else if (selectedBrands.includes(productBrand)) brandMatch = true;
        
        // === 5. KIỂM TRA DANH MỤC === (MỚI)
        // Lấy data-category (nếu không có thì trả về chuỗi rỗng)
        const productCategory = product.dataset.category ? product.dataset.category.toLowerCase() : '';
        let categoryMatch = false;
        if (selectedCategories.length === 0) categoryMatch = true; // Không chọn -> Luôn khớp
        else if (selectedCategories.includes(productCategory)) categoryMatch = true; // Khớp 1 trong các mục đã chọn


        // === QUYẾT ĐỊNH CUỐI CÙNG ===
        // Chỉ HIỆN khi khớp TẤT CẢ 5 ĐIỀU KIỆN
        if (priceMatch && ageMatch && sexMatch && brandMatch && categoryMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// 3. GÁN SỰ KIỆN CHO CÁC BỘ LỌC (SINGLE-CHOICE)
// (Chỉ cho phép chọn 1 checkbox mỗi nhóm)

// Gán sự kiện cho Checkbox GIÁ
checkboxPrice.forEach(cb => {
    cb.addEventListener('change', (e) => {
        checkboxPrice.forEach(other => {
            if (other !== e.target) other.checked = false;
        });
        applyFilters(); 
    });
});

// Gán sự kiện cho Checkbox TUỔI
checkboxAge.forEach(cb => {
    cb.addEventListener('change', (e) => {
        checkboxAge.forEach(other => {
            if (other !== e.target) other.checked = false;
        });
        applyFilters(); 
    });
});

// Gán sự kiện cho Checkbox GIỚI TÍNH
checkboxSex.forEach(cb => {
    cb.addEventListener('change', (e) => {
        checkboxSex.forEach(other => {
            if (other !== e.target) other.checked = false;
        });
        applyFilters(); 
    });
});


// 4. GÁN SỰ KIỆN CHO BỘ LỌC (MULTI-CHOICE)
// (Cho phép chọn nhiều)

// Gán sự kiện cho BỘ LỌC THƯƠNG HIỆU
checkboxBrand.forEach(cb => {
    cb.addEventListener('change', () => {
        applyFilters(); 
    });
});

// Gán sự kiện cho BỘ LỌC DANH MỤC (MỚI)
checkboxCategory.forEach(cb => {
    cb.addEventListener('change', () => {
        applyFilters(); 
    });
});

// -------------back to top-----------------
const backToTopBtn = document.querySelector('.back-to-top');

//lắng nghe sựu kiện cuộn chuột và gọi function để xử lý sự kiện đó
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if(document.documentElement.scrollTop > 300){
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});