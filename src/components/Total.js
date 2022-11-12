export default function Total({cartItems}) {

    const totalPrice = () => {
        let totalPrice = 0
      
        for (let item of cartItems) {
          totalPrice += item.price * item.quantity
        }
      
        const currencyFormatter = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        });
      
        return currencyFormatter.format(totalPrice)
      }

    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">{totalPrice()}</span>
            </div>
        </div>
    )
}