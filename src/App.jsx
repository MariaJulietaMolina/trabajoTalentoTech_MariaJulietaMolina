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

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Formulario />
      <Productos />
      <Gallery />
      <Footer />
    </div>
  );
}
export default App;
