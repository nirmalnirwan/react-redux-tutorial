import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from  "./containers/ProductListing"
import ProductDetail from "./containers/ProductDetail";

function App() {
  console.log("here from app");

  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" exact element={<ProductListing></ProductListing>} />
          <Route path="/product/:productId" element={<ProductDetail></ProductDetail>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
