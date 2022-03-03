function Detail(props) {
    return (
        <aside className="aside">
            <div>
            <button onClick={() => props.setShowingDetail(false)}>x</button>
            <h2>{props.detailItem.name[0].toUpperCase() + props.detailItem.name.slice(1)}</h2>
            </div>
            <div class="store--item-icon"> 
              <img src={`/assets/icons/${props.detailItem.id}.svg`} alt={props.detailItem.name}/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="add-cart" onClick={() => props.addToCart(props.detailItem)}>Add To Cart</button>
      </aside>
    )
  }

export default Detail
  