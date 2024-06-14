document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartItems = document.getElementById('cart-items');
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    cartButton.addEventListener('click', () => {
        cartItems.classList.toggle('hidden');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            const product = cart.find(item => item.name === productName);
            if (product) {
                product.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.name}</span> - $${item.price} x ${item.quantity}`;
            cartList.appendChild(li);
            total += item.price * item.quantity;
        });
        cartCount.textContent = cart.length;
        cartTotal.textContent = total.toFixed(2);
    }
});
