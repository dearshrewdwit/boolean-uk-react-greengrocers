function App() {
    // Define your base64-encoded SVG string
    const base64EncodedSVG = "data:image/svg+xml;base64,..."; // Your base64-encoded SVG here
  
    return (
      <div>
        <h1>My SVG Image</h1>
        <img src={base64EncodedSVG} alt="My SVG" />
      </div>
    );
  }
  
  export default App;