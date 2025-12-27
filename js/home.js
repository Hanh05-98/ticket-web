let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(btn, name, price) {
    const qty = btn.previousElementSibling.value;
    cart.push({ name, price, qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ");
}
