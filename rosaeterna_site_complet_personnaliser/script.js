
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const list = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');
    list.innerHTML = '';
    let sum = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price} € <button onclick="removeFromCart(${index})" class="remove">✖</button>`;
        list.appendChild(li);
        sum += item.price;
    });
    total.textContent = sum.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".cart-toggle");
    const cartContent = document.querySelector(".cart-content");
    toggleBtn.addEventListener("click", () => {
        cartContent.classList.toggle("visible");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("order-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("order-form").style.display = "none";
        document.getElementById("paypal-section").style.display = "block";
    });
});
