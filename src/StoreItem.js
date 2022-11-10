import './styles/reset.css'
import './styles/index.css'
function StoreItem(props) {
  const { singularItem } = props
  return (
    <li>
      <div className="store--item-icon">
        <img
          src={`/assets/icons/${singularItem.id}.svg`}
          alt={singularItem.name}
        />
      </div>
      <button
        onClick={function addToCart() {
          // see js dom greengrocers challenge for onclick event
        }}
      >
        Add to cart
      </button>
    </li>
  )
}
export default StoreItem
