import initialStoreItems from './store-items'
console.log(initialStoreItems)



export default function (props) {

    return (<div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{props.cartTotal()}</span>
          </div>
        </div>)
}