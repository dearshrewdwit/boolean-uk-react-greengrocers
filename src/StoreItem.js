import './styles/reset.css'
import './styles/index.css'
import storeItems from './store-items'

function StoreItem(props) {
  const { singularItem, addToCart } = props

  return (
    <li>
      <div className="store--item-icon">
        <img
          src={`/assets/icons/${singularItem.id}.svg`}
          alt={singularItem.name}
        />
      </div>
      <button
        // onClick={() => props.addToCart(storeItem)}
        onClick={function addToCartBtn() {
          addToCart(singularItem)
        }}
      >
        Add to cart
      </button>
    </li>
  )
}
export default StoreItem
