import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./Components/AboutUs/AboutUs";
import Store from "./Components/Store/Store";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CartProductDetail from "./components/Store/ProductDetail";
import Prueba from "./components/Prueba/Prueba";
import { ProductsProvider } from "./context/productsContext";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
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

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;

//git init -> inicializa el repositorio
//git status -> es para ver el estado de los archivos
//git add . -> añadir los archivo al area previa antes de hacer el guardado final (commit)(el punto selecciona todos los archivos)
//git commit -m "mensaje para representar el cambio"
//git remote add origin -> vincula un repositorio remoto (de la compu a la pagina de github)
//git push -u origin main -> sube los archivo del local al remoto

//git pull origin main
