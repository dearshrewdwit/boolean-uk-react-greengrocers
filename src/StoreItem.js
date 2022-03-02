export const StoreItem = props => {
const item = props.item
return <li key={item.id}>
        <div className="store--item-icon">
            <img src= {`./assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
        <button onClick={() => props.addItem(item)}>Add to cart</button>
       </li>
}