import React from "react"
import "../styles/pages/Contactanos.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/seo.js"
import Certification from "../components/Certification.jsx"
import Clients from "../components/Clients.jsx"

export default function Asesoria() {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="contact__hero">
        <div className="contact__hero-container">
          <div className="contact__hero-grid">
            <div className="contact__hero-box">
              <h1 className="contact__hero-title">
                Solicita <br /> una asesoría
              </h1>
              <p className="contact__hero-text">
                Cuéntanos más sobre las problemáticas de tu empresa y un experto
                te ayudará a evaluar cómo podemos mejorar tus campañas digitales
              </p>
              <div className="contact__hero-actions">
                <button className="contact__hero-button contact__hero-button--green">
                  Solicita una asesoría
                </button>
              </div>
            </div>
            <div className="contact__hero-box contact__hero-box--form">
              <form action="" className="contact__hero-form">
                <input
                  type="text"
                  className="contact__hero-input"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  className="contact__hero-input"
                  placeholder="Apellido"
                />
                <input
                  type="text"
                  className="contact__hero-input contact__hero-input--full"
                  placeholder="Correo"
                />
                <input
                  type="text"
                  className="contact__hero-input contact__hero-input--full"
                  placeholder="Compañia"
                />
                <textarea
                  name="mensaje"
                  id="mensaje"
                  className="contact__hero-textarea"
                  placeholder="Mensaje"
                ></textarea>
                <button className="contact__hero-submit">Registrar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Certification />
      <Clients />
    </Layout>
  )
}
