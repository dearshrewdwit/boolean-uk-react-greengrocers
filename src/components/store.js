import React from 'react'

export default function Store (props) {
    return (
        <li >
            <div class="store--item-icon">
                <img src={ "/assets/icons/" + props.item.id + '.svg' } alt={ props.item.name } />
            </div>
            <button onClick={ () => props.addToCart(props.item) }>Add to cart</button>
        </li>
    )
}