import React, { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [personas, setPersonas] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPersonas([...personas, form]);
    setForm({ nombre: "", email: "", mensaje: "" });
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2000);
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
        {enviado && <div className="contact-success">¡Mensaje enviado!</div>}
      </form>

      <h3 style={{marginTop: "2rem"}}>Personas registradas</h3>
      <ul className="contact-list">
        {personas.map((p, idx) => (
          <li key={idx}>
            <strong>{p.nombre}</strong> - {p.email}
            <br />
            <span style={{color:"#bbb"}}>{p.mensaje}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactPage;