

function Total(props){
    const calculateTotal = props.cart.reduce((acumulator, item) => acumulator + item.quantity* item.price, 0).toFixed(2)

    return (
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{calculateTotal}</span>
          </div>
        </div>
    )
}
export default Total;