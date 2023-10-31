function Header ({items}) {
    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {items.map(item => {
                    return (
                        <li key={item.id} className="store--item">
                            <div className="store--item-icon">
                                <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
                            </div>
                            <button className="btn btn-primary btn-add">Add To Cart</button>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default Header