function Header() {
  return (
    <header id="header">
      <h1>Greengrocers</h1>
      <div className="right-side">
        <div className="dropdown">
          <button className="dropbtn material-symbols-outlined">
            filter_alt
          </button>
          <div className="dropdown-content">
            <a
              className="filter-content-btn"
              onClick={console.log('Filter content pressed, Fruits')}
            >
              Fruits
            </a>
            <a
              className="filter-content-btn"
              onClick={console.log('Filter content pressed, Vegetables')}
            >
              Vegetables
            </a>
            <a
              className="activeBtn filter-content-btn"
              onClick={console.log('Filter content pressed, All')}
            >
              All
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn material-symbols-outlined">sort</button>
          <div className="dropdown-content">
            <a
              className="sort-content-btn"
              onClick={console.log('Sort content pressed, Price')}
            >
              Price
            </a>
            <a
              className="sort-content-btn"
              onClick={console.log('Sort content pressed, Alpha')}
            >
              Alphabetically
            </a>
            <a
              className="activeBtn sort-content-btn"
              onClick={console.log('Sort content pressed, None')}
            >
              None
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
