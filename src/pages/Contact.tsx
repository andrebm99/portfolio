import React, { useState } from "react";
import "../css/contact.css";

export default function Contact() {
  {
    /* Conexión con el backend */
  }
  {/*
    - form: contiene los valores actuales del formulario
    - setForm: sirve para actualizar esos valores
    */}
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  {
    /* Si usamos varios tipos de inputs debemos agregar lo siguiente
    - e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> */
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const { name, value } = e.target; 
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try{
        const response = await fetch("https://c714o7k439.execute-api.us-east-1.amazonaws.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
        });

        if(!response.ok) throw new Error("Error al enviar mensaje."); 

        alert("El mensaje fue enviado correctamente.");
        setForm({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: ""
        });
    } catch(error){
        alert("Error al enviar el mensaje!."); 
    }
  }

  return (
    <section className="caja min-h-screen flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
        {/* Title */}
        <div className="text-center">
          <h4 className="text-caja">Contáctame</h4>
          <p className="mt-2 text-sm text-neutral-400">
            Te responderé lo antes posible
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 
                - Esta es la forma correcta de dividir los dos campos con tailwind css
                - utilizamos grid. 
            */}
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-neutral-50 py-2 text-white placeholder-neutral-500 focus:border-white focus:outline-none transition"
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-neutral-50 py-2 text-white placeholder-neutral-500 focus:border-white focus:outline-none transition"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-50 py-2 text-white placeholder-neutral-500 focus:border-white focus:outline-none transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-50 py-2 text-white placeholder-neutral-500 focus:border-white focus:outline-none transition"
          />

          <textarea
            rows={3}
            name="message"
            placeholder="Mensaje"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-50 py-2 text-white placeholder-neutral-500 focus:border-white focus:outline-none transition resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full border border-white py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
