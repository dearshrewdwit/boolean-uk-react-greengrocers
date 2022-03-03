export const Purchase = props => <div>
        <h1>Purchases</h1>
        <ul>{props.cart.map(cartItem => <li>
            <h1>{cartItem.name}</h1>
            <span>{`Quantity: ${cartItem.quantity}     £${cartItem.price*cartItem.quantity}`}</span>

        </li>)}
        </ul>
        <p>{`Total: ${props.total}`}</p>
        <button onClick={() => props.returnToCart()}>Back</button>
    </div>