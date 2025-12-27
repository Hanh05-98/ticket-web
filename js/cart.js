let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    let total = 0;
    cartBody.innerHTML = "";

    cart.forEach((item, i) => {
        const sum = item.price * item.qty;
        total += sum;

        cartBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <input type="number" value="${item.qty}" min="1"
                     onchange="updateQty(${i}, this.value)">
                </td>
                <td>${sum}</td>
                <td><button onclick="removeItem(${i})">X</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}

function updateQty(i, qty) {
    cart[i].qty = qty;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert("Thanh toán thành công (giả lập)");
    localStorage.removeItem("cart");
    location.reload();
}
