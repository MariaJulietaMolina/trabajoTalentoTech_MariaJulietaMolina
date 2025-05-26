import { useState } from "react";
import "./App.css";

import React from "react";


import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Productos from "./components/Productos";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from "./components/Carrito";
import Menu from "./components/Menu";
import Usuario from "./components/Usuario";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Nav />
       <Routes>
        <Route path="/Carrito" element={<Carrito />} /> {/* Carrito */}
        <Route path="/usuario" element={<Usuario />} /> {/* Usuario */}
        <Route path="/menu" element={<Menu />} /> {/* Menú */}
      </Routes>
      <Main />
      <Formulario />
      <Productos />
      <Gallery />
      <Footer />
    </div>
    </Router>
  );
}
export default App;
