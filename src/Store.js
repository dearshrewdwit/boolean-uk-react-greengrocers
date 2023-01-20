function Store(props) {
  const listOfFruits = props.storeItems

  return (
    <>
      {listOfFruits.map((fruit, index) => (
        <li>{fruit.id}
            <img src={`./assets/icons/${fruit.id}.svg`}></img>
            <button>Add To Cart</button>
        </li>
      ))}
    </>
  )
}

export default Store

// {listOfFruits.map((fruit, index) => (
//     <li key={index} className={fruit.name}>
//         <img></img>
//         <button></button>
//     </li>
// ))}
