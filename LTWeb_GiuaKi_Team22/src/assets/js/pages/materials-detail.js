
// LẤY THÔNG TIN BÀI HIỆN TẠI
// Lấy ID của bài từ URL ?id=p3
const urlParams = new URLSearchParams(window.location.search);
const currentId = urlParams.get("id");

// Nếu không có id → lấy mặc định p1
const currentMaterialId = currentId || "p1";



// DỮ LIỆU TỪ TRANG materials.html


const materialData = [
    { id: "p1", title: "Chế Độ Deep Sleep trên ESCP32 và Wake Up Sources", category: "arduino", img: "../../assets/images/workshop/materials/p1.png" },
    { id: "p2", title: "Hướng Dẫn Sử dụng nhiều màn hình I2C với Yolo UNO", category: "module", img: "https://ohstem.vn/wp-content/uploads/2024/02/huong-dan-lap-trinh-nhieu-man-hinh-i2c-voi-yolo-uno-ohstem-avt.png" },
    { id: "p3", title: "Làm robot tránh vật cản", category: "xbot", img: "https://ohstem.vn/wp-content/uploads/2021/09/Robot-ne-vat-can.jpg" },
    { id: "p4", title: "ESP32 Giao Tiếp I2C Sử Dụng Arduino IDE", category: "arduino", img: "https://ohstem.vn/wp-content/uploads/2021/02/B46.png" },
    { id: "p5", title: "Lập trình LED đổi màu", category: "xbot", img: "https://ohstem.vn/wp-content/uploads/2021/09/lap-trinh-LED-doi-mau.jpg" },
    { id: "p6", title: "Đàn piano điện", category: "yolobit", img: "https://ohstem.vn/wp-content/uploads/2023/10/piano-dien-1.jpg" },
    { id: "p7", title: "Lập trình Encoder để điều khiển quạt với Yolo:Bit", category: "module", img: "https://ohstem.vn/wp-content/uploads/2022/11/lap-trinh-encoder-de-dieu-khien-quat.jpg" },
    { id: "p8", title: "Bạn sống ở đâu?", category: "rio", img: "https://ohstem.vn/wp-content/uploads/2024/10/ban-song-o-dau-5.png" },
    { id: "p9", title: "Rio đi tìm thú lạc", category: "rio", img: "https://ohstem.vn/wp-content/uploads/2024/10/Rio-di-tim-thu-lac-6.png" }
];



// LẤY CATEGORY CỦA BÀI HIỆN TẠI


const currentMaterial = materialData.find(m => m.id === currentMaterialId);

if (!currentMaterial) {
    console.error("Không tìm thấy bài hiện tại!");
}

const currentCategory = currentMaterial.category;



// RENDER BÀI VIẾT LIÊN QUAN


const relatedList = document.getElementById("relatedList");

// const relatedItems = materialData
//     .filter(m => m.category === currentCategory && m.id !== currentMaterialId)
//     .slice(0, 3); // Giới hạn 3 bài

const relatedItems = materialData
    .filter(m => m.id !== currentMaterialId)  // lấy tất cả bài khác
    .slice(0, 3); 

relatedList.innerHTML = relatedItems.map(item => `
    <a class="related-item" href="materials-detail.html?id=${item.id}">
        <img src="${item.img}">
        <div>
            <h4>${item.title}</h4>
            <span><i class="fa-regular fa-eye"></i> ${getViews(item.id)}</span>
        </div>
    </a>
`).join("");




// HÀM LẤY VIEW TỪ LOCALSTORAGE

function getViews(id) {
    const savedViews = JSON.parse(localStorage.getItem("materialViews"));
    if (savedViews && savedViews[id]) {
        return savedViews[id];
    }
    return 0;
}
