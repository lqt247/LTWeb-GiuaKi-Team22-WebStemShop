document.addEventListener("DOMContentLoaded", () => {

    // -------------------------
    // MENU SWITCH PAGE
    // -------------------------
    const menuItems = document.querySelectorAll(".admin-menu__item");
    const pages = document.querySelectorAll(".admin-page");
    const pageTitle = document.getElementById("pageTitle");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const pageName = item.getAttribute("data-page");
            pages.forEach(p => p.classList.remove("admin-page--active"));
            document.getElementById(pageName).classList.add("admin-page--active");

            pageTitle.innerText = item.innerText.trim();
        });
    });

    // -------------------------
    // AVATAR DROPDOWN
    // -------------------------
    const avatar = document.querySelector(".admin-avatar");
    const dropdown = document.querySelector(".admin-dropdown");

    avatar.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

    // -------------------------
    // POPUP BÀI VIẾT
    // -------------------------
    const postForm = document.getElementById("postForm");
    document.getElementById("openPostForm").onclick = () => postForm.style.display = "flex";
    document.getElementById("closePostForm").onclick = () => postForm.style.display = "none";

    // -------------------------
    // TAG INPUT
    // -------------------------
    let tags = [];
    const tagInput = document.getElementById("tagInput");
    const tagList = document.getElementById("tagList");

    tagInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && this.value.trim() !== "") {
            e.preventDefault();
            const text = this.value.trim();
            if (!tags.includes(text)) tags.push(text);
            renderTags();
            this.value = "";
        }
    });

    window.removeTag = function (text) {
        tags = tags.filter(t => t !== text);
        renderTags();
    };

    function renderTags() {
        tagList.innerHTML = tags
            .map(t => `<span class="chip">${t} <i onclick="removeTag('${t}')">x</i></span>`)
            .join("");
    }

    // -------------------------
    // IMAGE PREVIEW
    // -------------------------
    document.getElementById("postImage").addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                const img = document.getElementById("previewImage");
                img.src = e.target.result;
                img.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // -------------------------
    // SAVE POST (demo)
    // -------------------------
    document.getElementById("savePost").onclick = function () {
        const title = document.getElementById("postTitle").value;
        const date = document.getElementById("postDate").value;

        const row = `
            <tr>
                <td>NEW</td>
                <td><img src="../../assets/images/blog/b1.jpg"></td>
                <td>${title}</td>
                <td>${tags.map(t => `<span class='tag'>${t}</span>`).join(" ")}</td>
                <td>${date}</td>
                <td>
                    <button class="btn-small edit">Sửa</button>
                    <button class="btn-small delete">Xoá</button>
                </td>
            </tr>
        `;

        document.getElementById("postsTable").innerHTML += row;
        postForm.style.display = "none";
        tags = [];
        renderTags();
        document.getElementById("postTitle").value = "";
        document.getElementById("postDate").value = "";
        document.getElementById("postImage").value = "";
        document.getElementById("previewImage").style.display = "none";
        alert("Đã lưu bài viết (demo)");
    };

    // -------------------------
    // SEARCH FILTER
    // -------------------------
    function addSearchFilter(inputId, tableId) {
        const input = document.getElementById(inputId);
        const table = document.getElementById(tableId);

        input.addEventListener('keyup', function () {
            const filter = this.value.toLowerCase();
            Array.from(table.rows).forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }

    addSearchFilter('searchProduct', 'productsTable');
    addSearchFilter('searchOrder', 'ordersTable');
    addSearchFilter('searchUser', 'usersTable');
    addSearchFilter('searchPost', 'postsTable');
});
