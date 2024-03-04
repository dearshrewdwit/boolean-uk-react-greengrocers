const TotalCost = ({cartPrice}) => {
    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">£{cartPrice}</span>
            </div>
      </div>
    )
}

export default TotalCost