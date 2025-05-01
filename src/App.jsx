import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./Components/AboutUs/AboutUs";
import Cart from "./components/Store/Cart/Cart";
import Store from "./Components/Store/Store";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CartProductDetail from "./components/Store/ProductDetail";
import Prueba from "./components/Prueba/Prueba";
import PerfilUsuario from "./components/Perfil/PerfilUsuario/PerfilUsuario";
import SuccessfulPurchase from "./components/Store/SuccessfulPurchase/SuccessfulPurchase";
import Panel from "./admin/Panel/Panel";
import { RutasProtegidas } from "./RutasProtegidas";
import { RutasProtegidasAdmin } from "./RutasProtegidasAdmin";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { SaleProvider } from "./context/SaleContext";
import FormNuevoProducto from "./admin/FormNuevoProducto/FormNuevoProducto";
import FormModificarProducto from "./admin/FormModificarProducto/FormModificarProducto";

function App() {

  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <SaleProvider>
              <Header />
              <Routes>
                <Route path="product/crear" element={<Prueba />} />

                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />

                <Route path="store" element={<Store />} />
                <Route path="store/categoria/:categoria" element={<Store />} />

                <Route
                  path="store/detalle/:id"
                  element={<CartProductDetail />}
                />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route element={<RutasProtegidas />}>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/perfil" element={<PerfilUsuario />} />
                  <Route
                    path="/compraexitosa"
                    element={<SuccessfulPurchase />}
                  />
                </Route>

                <Route element={<RutasProtegidasAdmin />}>
                  <Route path="/panel" element={<Panel />} />
                  <Route
                    path="/panel/producto/nuevo"
                    element={<FormNuevoProducto />}
                  />
                  <Route
                    path="/panel/producto/modificar/:id"
                    element={<FormModificarProducto />}
                  />
                </Route>

                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Footer />
            </SaleProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
