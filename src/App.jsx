// App.js
import React from "react";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "./styles.css"; // Importa tu archivo de estilos personalizados

const App = () => (
  <div>
    <div className="container mt-4">
      <Registro />
    </div>
  </div>
);
export default App;