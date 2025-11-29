let cart = [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function() {
        const item = this.parentElement;
        const name = item.dataset.name;
        const price = Number(item.dataset.price);

        cart.push({name, price});
        alert("Додано в корзину: " + name);
    });
});

const cartBtn = document.getElementById("cart-btn");
const modal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartList = document.getElementById("cart-list");
const totalText = document.getElementById("total");

cartBtn.onclick = () => {
    modal.style.display = "block";
    showCart();
};

closeCart.onclick = () => modal.style.display = "none";

function showCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price} грн`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalText.textContent = "Разом: " + total + " грн";
}

document.getElementById("clear-cart").onclick = () => {
    cart = [];
    showCart();
};
