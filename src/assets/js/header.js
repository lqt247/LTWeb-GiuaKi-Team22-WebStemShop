document.addEventListener("DOMContentLoaded", () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const headerLogin = document.querySelector(".header__user-login");
    const headerLogged = document.querySelector(".header__user-logged");

    if (userInfo) {
        headerLogin && (headerLogin.style.display = "none");
        headerLogged && (headerLogged.style.display = "flex");

        const nameText = document.querySelector(".user-short-name");
        if (nameText) nameText.textContent = userInfo.name;
    } else {
        headerLogin && (headerLogin.style.display = "flex");
        headerLogged && (headerLogged.style.display = "none");
    }
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("userInfo");
        window.location.href = "/src/pages/user/sign-in.html";
    });
}
