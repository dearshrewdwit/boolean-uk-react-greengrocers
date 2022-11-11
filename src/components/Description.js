function Description({ product, setShowDescription }) {
  return (
    <div className="description-container">
      <p>{product.description}</p>
      <button onClick={() => setShowDescription(null)} className="back-btn">
        Back
      </button>
    </div>
  )
}

export default Description
