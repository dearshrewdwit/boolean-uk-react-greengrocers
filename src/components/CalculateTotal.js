export const CalculateTotal = ({ cartItems }) => {
  let total = 0
  cartItems.forEach(cartItem => {
    total += cartItem.price * cartItem.quantity
  })
  return total.toFixed(2)
}
