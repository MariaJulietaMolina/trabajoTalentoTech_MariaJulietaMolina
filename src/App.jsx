import React from "react";
import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Productos from "./components/Productos";

import { Routes, Route } from 'react-router-dom';
import Carrito from "./components/Carrito";
import Menu from "./components/Menu";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Formulario />
            <Productos />
            <Gallery />
          </>
        } />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
