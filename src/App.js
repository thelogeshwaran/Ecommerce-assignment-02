import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CartPage from "./Pages/CartPage/CartPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
