// === Hàm tải và chèn file HTML (header/footer) ===
async function loadComponent(id, filePath) {
  const container = document.getElementById(id);
  if (container) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error("Không tìm thấy file: " + filePath);
      const html = await response.text();
      container.innerHTML = html;

      // Sau khi header hoặc footer load xong
      if (id === "header") {
        highlightActiveLink(); // đánh dấu link active
        scrollToHash();        // cuộn đến section có id nếu có hash (#)
      }
    } catch (error) {
      console.error("Không thể tải file:", filePath, error);
    }
  }
}

// === Khi trang load xong ===
document.addEventListener("DOMContentLoaded", () => {
  let basePath = "";

  if (window.location.pathname.includes("/pages/")) {
    basePath = "../../"; // đang ở trong pages => đi ra 2 cấp
  } else {
    basePath = "src/"; // đang ở index.html
  }

  loadComponent("header", `${basePath}components/header.html`);
  loadComponent("footer", `${basePath}components/footer.html`);
});

// === Hàm đánh dấu menu đang active ===
function highlightActiveLink() {
  const currentPath = window.location.pathname;

  // Xóa active cũ
  document.querySelectorAll(".nav__item a").forEach(a => a.classList.remove("active"));

  // Nếu là các trang thuộc nhóm Giới thiệu
  if (
    currentPath.includes("about.html") ||
    currentPath.includes("about_info") ||
    currentPath.includes("faq.html")
  ) {
    document
      .querySelector('.nav__item a[href*="about.html"]')
      ?.classList.add("active");
  }

  // Nhóm khác
  else if (currentPath.includes("shop")) {
    document
      .querySelector('.nav__item a[href*="shop.html"]')
      ?.classList.add("active");
  } else if (currentPath.includes("blog")) {
    document
      .querySelector('.nav__item a[href*="blog.html"]')
      ?.classList.add("active");
  } else if (currentPath.includes("contact")) {
    document
      .querySelector('.nav__item a[href*="contact.html"]')
      ?.classList.add("active");
  }
}
