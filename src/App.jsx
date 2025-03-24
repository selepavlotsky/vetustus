import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./Components/AboutUs/AboutUs";
import Cart from "./components/Store/Cart";
import Store from "./Components/Store/Store";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CartProductDetail from "./components/Store/ProductDetail";
import Prueba from "./components/Prueba/Prueba";
import PerfilUsuario from "./components/Perfil/PerfilUsuario";
import { RutasProtegidas } from "./RutasProtegidas";
import { ProductsProvider } from "./context/productsContext";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="product/crear" element={<Prueba />} />

              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />

              <Route path="store" element={<Store />} />
              <Route path="store/categoria/:categoria" element={<Store />} />

              <Route path="store/detalle/:id" element={<CartProductDetail />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route element={<RutasProtegidas />}>
                <Route path="/perfil" element={<PerfilUsuario />} />
              </Route>

              <Route element={<RutasProtegidas />}>
                <Route path="/carrito" element={<Cart />} />
              </Route>

              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
