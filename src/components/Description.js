function Description({ product, setShowDescription }) {
  return (
    <div className="description-container">
      <img
        src={`/assets/icons/${product.id}.svg`}
        alt={product.name}
        className="description-icon"
      />
      <p>{product.description}</p>
      <button onClick={() => setShowDescription(null)} className="back-btn">
        Back
      </button>
    </div>
  )
}

export default Description
