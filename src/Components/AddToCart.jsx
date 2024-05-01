export default function AddToCart({ setCartProds, cartProds, product}) {

    function handleAddToCart() {
        const inCart = cartProds.find(p => p.id === product.id);

        if (inCart) {
        inCart.qty++;
        setCartProds([...cartProds]);
        } else {
        const addProduct = { ...product, qty: 1 };
        setCartProds([...cartProds, addProduct]);
        }
    }

    return (
        <button style={{ marginTop: '10px' }}
            onClick={() => handleAddToCart(product)} >
            Add to Cart</button>
    )
}