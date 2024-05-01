/* eslint-disable react/prop-types */
import '../styles/modal.css'

function Detail({ fruit, dismiss }) {
    

    if (fruit === null) return <></>

    return <>
        <div className="modal">
            <div className='modal-content'>
                <span className="close" onClick={dismiss}>&times;</span>

                <img
                    className="store--item-icon "
                    src={`./assets/icons/${fruit.id}.svg`}
                ></img>

                <div>
                    <p>ID: {fruit.id}</p>
                    <p>Name: {fruit.name}</p>
                    <p>Price: ${fruit.price}</p>
                    <p>Description: {fruit.description}</p>
                    <p>Type: {fruit.type}</p>
                </div>

            </div>
        </div>
    </>
}

export default Detail