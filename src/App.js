import "./App.css";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Navbar } from "./components/Navbar";
import { ProductDetails } from "./components/ProductDetails";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
