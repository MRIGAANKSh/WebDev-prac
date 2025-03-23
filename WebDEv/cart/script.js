document.addEventListener('DOMContentLoaded', () => {
    const products = [
        
            {id:1,name:'Product 1',price:100},
            {id:2,name:'Product 2',price:200},
            {id:3,name:'Product 3',price:300},
        
    ];
    const cart = [];
    const productList = document.getElementById('Product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const totalPrice = document.getElementById('total-price');
    const checkout = document.getElementById('checkout');

    function renderProducts(){
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
            <h3>${product.name}</h3>
            `
        })

    }

})
