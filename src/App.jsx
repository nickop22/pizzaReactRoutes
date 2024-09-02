/* import Navegacion from "./componentes/Navegacion.jsx"; */
import Home from "./pages/Home.jsx";
import Footer from "./componentes/Footer.jsx";
import "./App.css";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import CarritoCompras from "./componentes/CarritoCompras.jsx";
import Pizza from "./pages/Pizza.jsx";
import { Link, Route, Routes } from "react-router-dom";
import Navegacion from "./componentes/Navegacion.jsx";
import NotFound from "./componentes/NotFound.jsx";
import Profile from "./componentes/Profile.jsx";

function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carritoCompras" element={<CarritoCompras />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/*  <Navegacion />
      <Home />
      <Pizza />
      <Registro />
      <Login />
      <CarritoCompras />
      <Footer /> */}
    </>
  );
}

export default App;
