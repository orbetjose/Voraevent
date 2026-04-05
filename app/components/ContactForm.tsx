"use client";

import Image from "next/image";
import { useState, SubmitEvent } from "react";

export default function ContactForm() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    numero: "",
    mensaje: "",
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("¡Formulario enviado exitosamente!");
        setFormData({ nombre: "", correo: "", numero: "", mensaje: "" });
        setAceptaTerminos(false);
      } else {
        setStatus("error");
        setMessage(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error de conexión");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className=""
      id="contacto">
      <div
        className="flex flex-col-reverse md:flex-row  md:h-[90vh] 3xl:h-[60vh] px-2 md:px-0 bg-cover bg-left items-center"
        style={{ backgroundImage: `url(${currentDomain}wp-content/uploads/2026/04/bg-contact.png)` }}>
        <div className="flex-1 flex items-center justify-center relative text-white z-1">
          <div className="relative z-1 font-medium space-y-10 py-20">
            <h2 className=" md:text-5xl text-4xl text-center md:text-left hidden md:block">Contacto</h2>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-wsp.png`}
                className="h-8"
                alt="Icono whatsapp"
              />
              <a
                href="#"
                target="_blank"
                className="text-lg">
                321 439 2546
              </a>
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <img
                src={`${currentDomain}wp-content/uploads/2026/04/location-ico.png`}
                className="h-6"
                alt="Icono ubicación"
              />
              <a
                href="mailto:gerencia@voraevent.co"
                className="text-lg">
                gerencia@voraevent.co
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 py-6 md:py-0 ">
          <h2 className=" md:text-5xl text-4xl text-center md:text-left md:hidden font-medium text-white pb-4">Contacto</h2>
          <div className="bg-white px-10 md:px-10 py-6 rounded-4xl md:w-4/5 3xl:w-3/5 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-2 text-primary-blue font-medium w-full">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2  ">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black  "
                />
              </div>
              <div>
                <label
                  htmlFor="numero"
                  className="mb-2 ">
                  Número teléfonico
                </label>
                <input
                  type="tel"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black "
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="mb-2 ">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black "
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 ">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black "
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="aceptaTerminos"
                  checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                  required
                  className="w-4 h-4 accent-purple cursor-pointer"
                />
                <label
                  htmlFor="aceptaTerminos"
                  className="text-sm  cursor-pointer text-primary-blue">
                  Acepto el tratamiento de datos personales
                </label>
              </div>

              <div className="bg-transparent border gradient-border-image text-primary-blue py-1 px-4 rounded-full! disabled:opacity-50  font-poppins flex justify-evenly items-center w-30! hover:btn-primary-gradiant cursor-pointer">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="cursor-pointer">
                  {status === "loading" ? "Enviando..." : "Enviar"}
                </button>
                <img
                  className="h-2"
                  src={`${currentDomain}wp-content/uploads/2026/03/arrow-blue.png`}
                  alt=""
                />
              </div>

              {message && (
                <div
                  className={` p-4 rounded ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
