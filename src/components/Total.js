import { useState, useEffect } from 'react'

const Total = props => {
    const [total, setTotal] = useState('£0.00')

    // USE EFFECTS
    useEffect(() => {
        if (props.cartItems.length > 0) {
            totalPrice()
        }
        if (props.cartItems.length === 0) {
            setTotal('£0.00')
        }
    }, [props.cartItems]
    )
    
    const totalPrice = () => {
        const totalPrice = props.cartItems.map((item) => item.totalPrice).reduce((a, c) => a + c)
        return setTotal(`£ ${totalPrice.toFixed(2)}`)
    }
    return <div className="total-section">
        <div>
            <h3>Total</h3>
        </div>
        <div>
            <span className="total-number">{total}</span>
        </div>
    </div>
}

export default Total