import "./ProductView.css"
import PropTypes from 'prop-types'

const capitalizeString = (string) => {
    return (string.substring(0,1).toUpperCase() + string.substring(1,string.length))
}

const ProductView = ({product, setDetailView}) => {
    return (
        <div className="product-view-container">
            <img 
                id="close-component" 
                onClick={() => setDetailView(undefined)}
                src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-round-icon.png" 
            />
            <h3>{capitalizeString(product.name)}</h3>
            <p>Category: {product.type}</p>
            <p>Price: £{product.price}</p>
            <img id="product-image" src={"/assets/icons/"+product.id+".svg"} />
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
    setDetailView: PropTypes.func,
}

export default ProductView