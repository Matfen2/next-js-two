'use client'

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        alert(data.message); // Message de succès
        setFormData({ username: "", email: "", message: "" }); // Réinitialise le formulaire
      } else {
        alert(data.message); // Affiche les erreurs
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact-section" className="bg-black py-4">
      <h2 className="text-gray-50 text-xl font-bold text-center">
        Envie d'en savoir plus ? Contactez-moi
      </h2>
      <div className="max-w-4xl mx-auto">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="p-4 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Adresse email"
              className="p-4 rounded-md w-full"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="p-4 rounded-md mt-5 w-full"
            required
          />
          <button
            type="submit"
            className="bg-transparent border-solid border-2 border-gray-50 rounded-md w-48 text-gray-50 p-2 mt-5 mx-auto block transition-all duration-150 hover:rounded-lg hover:scale-110"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
