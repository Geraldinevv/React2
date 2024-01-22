// Registro.js
import React, { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";



const Registro = () => {
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleRegister = ({ nombre, email, contrasena }) => {
    // Lógica de registro aquí y actualización de alert
    // Puedes cambiar el estado de 'alert' según el resultado del registro
    setAlert({ message: "Registro exitoso", type: "success" });
  };

  return (
    <div className="registro-container">
      <h2>Crear una cuenta</h2>
      <div className="social-icons">
        <SocialButton
          icon="facebook-icon"
          network="Facebook"
          image="/ruta/de/tu/imagen/facebook.png"
        />
        <SocialButton
          icon="github-icon"
          network="GitHub"
          image="/ruta/de/tu/imagen/github.png"
        />
        <SocialButton
          icon="linkedin-icon"
          network="LinkedIn"
          image="/ruta/de/tu/imagen/linkedin.png"
        />
      </div>
      <p>o usa tu email para registrarte</p>
      <div className="form-container">
        <Formulario onRegister={handleRegister} />
        <Alert message={alert.message} type={alert.type} />
      </div>
    </div>
  );
};

export default Registro;