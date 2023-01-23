export default function Details({itemSelected, setSeeDetails, seeDetails}) {

    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="store-item-details">
            <p 
            className="align-me-right" 
            onClick={() => {
                setSeeDetails(false)
            }}> x </p>
            <h2>{capitalise(itemSelected.name)}</h2>
            <img 
            src={`/assets/icons/${itemSelected.id}.svg`} 
            alt={itemSelected.name}
            />
            <p>
                £ {itemSelected.price}
            </p>
            <p>
                Food Type: {capitalise(itemSelected.type)}
            </p>
            
        </div>
    )
}