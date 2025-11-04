// Hàm tải và chèn file HTML vào 1 phần tử
async function loadComponent(id, filePath) {
    const container = document.getElementById(id);
    if (container) {
        try {
            const response = await fetch(filePath);
            const html = await response.text();
            container.innerHTML = html;

            // Nếu là header thì sau khi load xong, mới gán class active
            if (id === "header") {
                highlightActiveLink();
            }
        } catch (error) {
            console.error("Không thể tải file:", filePath, error);
        }
    }
}

// 🧭 Thêm đoạn này — Tự động tính basePath phù hợp (tránh lỗi 404)
function getBasePath() {
    const path = window.location.pathname.split("/src/")[1];
    if (!path) return "./"; // đang ở index.html
    const depth = path.split("/").length - 1; // đếm số cấp sau /src/
    return "../".repeat(depth);
}

// Gọi hàm khi trang load xong
document.addEventListener("DOMContentLoaded", () => {
    const basePath = getBasePath(); // dùng basePath động
    loadComponent("header", `${basePath}components/header.html`);
    loadComponent("footer", `${basePath}components/footer.html`);
});

// ✅ Hàm đánh dấu link đang active
function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav__list a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href.includes(currentPath)) {
            link.classList.add("active");
        }
    });
}
