function Details ({item, details}) {
    return (
        <>
        {details === true &&
        <ul className="details">
          <li>{item.name}</li>
          <li>{'£' + item.price}</li>
          </ul>}
          </>
    )
}
export default Details