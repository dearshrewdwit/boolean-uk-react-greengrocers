
const Header = ({storeItems, addFunction}) => {
    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
            {storeItems?.map((entry, index) => 
                <li key={index}>
                    <img 
                        className="store--item-icon" 
                        src={"/assets/icons/"+entry.id+".svg"} 
                    />
                    <p>{entry.name}</p>
                    <button onClick={() => addFunction(entry.id)}>add to cart</button>
                </li>
            )}
        </ul>
      </header>
    )
}

export default Header