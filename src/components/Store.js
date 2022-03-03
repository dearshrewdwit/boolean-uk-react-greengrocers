

function Store(props){
    return (
        <li>
              <div class="store--item-icon">
                <img src={`assets/icons/${props.items.id}.svg`} alt={`${props.items.name}`} />
              </div>
              <button onClick={() => props.addToCart(props.items)}>Add to cart</button>
            </li>
    )
}

export default Store