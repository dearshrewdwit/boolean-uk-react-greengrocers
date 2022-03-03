function StoreItems (props) {
    return (
<li>
  <div class="store--item-icon">
    <img src={`.assets/icons/${item.id}.svg`} alt={`${item.name}`} />
  </div>
  <button>Add to cart</button>
</li>
    )
}


export default StoreItems