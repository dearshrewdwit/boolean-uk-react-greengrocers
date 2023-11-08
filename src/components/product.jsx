const Product = ({ data, addProduct }) => {
    return (
        <li>
            <span>{data.name}</span>
            <div className="store--item-icon">
                <img src={`/assets/icons/${data.id}.svg`} alt={data.name} />
            </div>
            <span>£{data.price}</span>
            <button onClick={() => addProduct(data)}>Add to cart</button>
        </li>
    );
};

export default Product;