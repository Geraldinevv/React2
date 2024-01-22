// Formulario.js
import React, { useState } from "react";

const Formulario = ({ onRegister }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmContrasena, setConfirmContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si todos los campos están completos
    if (!nombre || !email || !contrasena || !confirmContrasena) {
      setError("Completa todos los campos.");
      return;
    }

    // Verificar si las contraseñas coinciden
    if (contrasena !== confirmContrasena) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Lógica de registro aquí y actualización de alert
    onRegister({ nombre, email, contrasena });

    // Reiniciar campos y error después del registro exitoso
    setNombre("");
    setEmail("");
    setContrasena("");
    setConfirmContrasena("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmContrasena}
          onChange={(e) => setConfirmContrasena(e.target.value)}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Formulario;