/* eslint-disable react/prop-types */
function Cart({fruits, incrementQuantity, decrementQuantity}) {

    return (
        <>
         {fruits.map((fruit, index) => (
                <li key={index}>
                    <img src={`./assets/icons/${fruit.id}.svg`}></img>
                    <p>{fruit.name}</p>
                    <button onClick={() => decrementQuantity(fruit.id)}>
                        -
                    </button>
                    <p>{fruit.quantity}</p>
                    <button onClick={() => incrementQuantity(fruit.id)}>
                        +
                    </button>
                </li>
            ))}  
        </>
    )
}
export default Cart