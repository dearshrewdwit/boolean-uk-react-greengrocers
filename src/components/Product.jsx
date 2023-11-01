const Product = ({ data, addProduct }) => {
    return (
        <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${data.id}.svg`} alt={data.name} />
            </div>
            <button onClick={() => addProduct(data)}>Add to cart</button>
        </li>
    );
};

export default Product;
