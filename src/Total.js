function Total(props) {
    // This is pretty obvious
  const total = () => {
    let totalPrice = 0.0
    for (const item of props.cart) {
      totalPrice += item.price * item.quantity
    }
    return totalPrice.toFixed(2)
  }
    
    return <span className="total-number">£{total()}</span>
}

export default Total