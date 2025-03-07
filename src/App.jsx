import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./Components/AboutUs/AboutUs";
import Store from "./Components/Store/Store";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/store" element={<Store />} />
        {/*   <Route path="/contact" element={<Contact />} /> */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
