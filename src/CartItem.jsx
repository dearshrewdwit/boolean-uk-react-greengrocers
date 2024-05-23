export default function CartItem({ item, addToCart, removeItem }) {
return (
<li>
<img className='cart--item-icon' src={`./assets/icons/${item.id}.svg`}alt={item.name}/>
<p>{item.name}</p>
<button onClick={() => removeItem(item)} className='quantity-btn remove-btn center'>-</button>
<span className='quantity-text center'>{item.quantity}</span>
<button onClick={() => addToCart(item)} className='quantity-btn add-btn center'>+</button>
</li>
)
}