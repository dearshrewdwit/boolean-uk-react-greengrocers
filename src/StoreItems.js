import initialStoreItems from './store-items'

function StoreSection() {

    const handleClick = () => {
        
    }

return (
    <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((item) =>
            <li>
              <div class="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button>Add to cart</button>
            </li>
          )}
        </ul>
      </header>
)
}

export default StoreSection