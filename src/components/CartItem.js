function CartItem ({cartItem, handleMinus, handlePlus}){
    return (
        <li key={cartItem.id}>
                    <img
                      class="cart--item-icon"
                      src={"/assets/icons/" + cartItem.id + ".svg"}
                      alt={cartItem.name}
                    />
                    <p>{cartItem.name}</p>
                    <button onClick={()=> handleMinus(cartItem) } class="quantity-btn remove-btn center">-</button>
                    <span class="quantity-text center">{cartItem.quantity}</span>
                    <button onClick={()=> handlePlus(cartItem) } class="quantity-btn add-btn center">+</button>
                  </li>
    )
}
export default CartItem