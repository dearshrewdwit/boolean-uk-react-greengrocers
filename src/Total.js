import { useState } from "react"

function Total(props) {

    const [totalCart, setTotalCart] = useState(0);

    //if (cartArray.length === 0) {let total = £0}
    //else (calulate the quantity * price inside each array, 
    //THEN take those new totals and add those together for final total to display )
    //remember toFloor(2) for decimals

    // props.cart.map((items) => {
    //     let total = 0
    //     let totalOfEachItem = price * quantity
    //     total += totalOfEachItem

    //     setTotalCart(total)
    // })

    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">£0</span>
            </div>
        </div>
    )

}

export default Total; 