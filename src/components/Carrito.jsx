function Carrito() {
  return <h1>Bienvenido al Carrito</h1>;

  <div>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/productos" element={<Productos />} />
 <Route path="/productos/:id" element={<ProductoDetalle />} />
 </Routes>
 </div>


};

export default Carrito;