import ItemImage from './ItemImage'

import { useState } from 'react'

function StoreItem(props) {
  console.log('StoreItem invoked')

  const [showInfo, setShowInfo] = useState(false)

  const show = () => {
    setShowInfo(false)
  }

  const hide = () => {
    setShowInfo(true)
  }

  return(
    <>
      { showInfo ? (
        <div className='extra-info'>
          <div>
            {props.storeItem.description}
          </div>
          <button type='button' onClick={show}>
            Close
          </button>
        </div>

      ) : (

        <li>
          <div className="store--item-icon">
            <button className='info-button' type='button' onClick={hide}>
              <ItemImage item={props.storeItem} />
            </button>
          </div>
          <button onClick={() => props.addItemToCart(props.storeItem)}>Add to cart</button>
        </li>
      )}
    </>
  )
}

export default StoreItem