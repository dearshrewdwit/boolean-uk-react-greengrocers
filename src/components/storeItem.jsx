export default function StoreItem({item, index}) {
  return (
    <li key={index}>
    <div className="store--item-icon">
      <img src={"../public/assets/icons/"+item.id+".svg"}
      alt={item.name}
      />
    </div>
    <p>{item.name}</p>
    <button>Add to cart</button>
  </li>
  )
}