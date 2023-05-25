
const storedCart = (id) => {
    const cart = getCart();
    let quantity = cart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
}

const removeFromDb = id => {
    const shoppingCart = getCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}
const getCart = () => {
    let storedProduct;
    const storeddata = localStorage.getItem('shopping-cart');
    if (storeddata) {
        storedProduct = JSON.parse(storeddata)
    }
    else {
        storedProduct = {};
    }
    return storedProduct
}
const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { storedCart, getCart, deleteCart, removeFromDb }