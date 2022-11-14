function ItemImage(props) {
  return <img className={props.className || ''}
    src={`/assets/icons/${props.item.id}.svg`}
    alt={props.item.name}/>
}

export default ItemImage