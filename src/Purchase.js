export default function Purchase(props) {

const returnToMainPage = () => {
  props.setCartItems([])
  props.setPurchasePage(false)
}
    return (
        <div className="purchase">
        <p>Thank you for your purchase</p>
        <button onClick={returnToMainPage}>Back</button> 
      </div>
    )
  }
  