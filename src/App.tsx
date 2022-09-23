import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { About } from "./pages/about";
import { NavbarComponent } from "./components/navbar";
import { Store } from "./pages/store";
import { ShoppingCardProvider } from "./context/shoppingCartContext";

function App() {
  return (
    <ShoppingCardProvider>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
}

export default App;
