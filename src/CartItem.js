// export default function CartItem(props) {
//   const{item, decreaseItem, removeFromCart, addItem} = props
//   return (
//     <li key={item.id}>
//       <img
//         class="cart--item-icon"
//         src={`assets/icons/${item.id}.svg`}
//         alt={`${item.name}`}
//       />
//       <p>{item.name}</p>
//       <button 
//       onClick={() => {
//         console.log('clicked -', item.name)
//         decreaseItem(item)
//         removeFromCart(item)
//       }}
//       class="quantity-btn remove-btn center">-</button>
//       <span class="quantity-text center">{item.quantity}</span>
//       <button class="quantity-btn add-btn center"
//       onClick={() => {
//         addItem(item)
//       }}>+</button>
//     </li>
//   )
// }
