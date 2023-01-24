import { useState } from "react"

function Total(props) {

    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">£{props.totalCart}</span>
            </div>
        </div>
    )

}

export default Total; 