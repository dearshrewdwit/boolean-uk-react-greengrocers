export default function Navbar(props) {
    return (
        <nav className="navbar">
        <ul>
            <li onClick={() => props.setStoreOrStock("store")}>Store</li>
            <li onClick={() => props.setStoreOrStock("stock")}>Stock</li>
        </ul>
      </nav>
    )
  }