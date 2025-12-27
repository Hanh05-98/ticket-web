function register() {
    if (!username.value || !password.value) {
        message.innerText = "Không được để trống";
        return;
    }
    localStorage.setItem(username.value, password.value);
    message.innerText = "Đăng ký thành công!";
}

function login() {
    const p = localStorage.getItem(username.value);
    if (p !== password.value) {
        message.innerText = "Sai thông tin, hãy nhập lại";
        return;
    }
    localStorage.setItem("user", username.value);
    location.href = "home.html";
}

function checkLogin() {
    const u = localStorage.getItem("user");
    if (!u) location.href = "login.html";
    document.getElementById("user").innerText = u;
}

function logout() {
    localStorage.removeItem("user");
    location.href = "login.html";
}
