import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Rutas.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/Seo"
import Certification from "../components/Certification.jsx"
import Clients from "../components/Clients.jsx"
import GoogleCampaign from "../assets/images/google-campaign.png"
import processOne from "../assets/images/process-1.png"
import processTwo from "../assets/images/process-2.png"
import processThree from "../assets/images/process-3.png"
import processFour from "../assets/images/process-4.png"

export default function Rutas() {
  return (
    <Layout>
      <Seo title="Rutas de conversion" />
      <section className="routes__hero">
        <div className="routes__hero-container">
          <div className="routes__hero-data">
            <h1 className="routes__hero-title">Rutas de conversión</h1>
            <p className="routes__hero-text">
              Creamos todos los recursos que necesita tu empresa para empezar a
              generar más prospectos, un sitio de aterrizaje, anuncios, códigos
              de rastreo y formularios. Desde el punto en el que la persona te
              conoce, hasta que hables con él.
            </p>
            <div className="routes__hero-actions">
              <Link
                to="/asesoria"
                className="routes__hero-button routes__hero-button--green"
              >
                Solicita una asesoría
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="routes__bullets">
        <div className="routes__bullets-container">
          <h2 className="routes__bullets-title">¿Cómo lo hacemos?</h2>
          <div className="routes__bullets-grid">
            <article className="routes__bullets-item routes__bullets-item--green">
              <h4 className="routes__bullets-name">
                Análisis del publico objetivo
              </h4>
              <p className="routes__bullets-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
            </article>
            <article className="routes__bullets-item routes__bullets-item--blue">
              <h4 className="routes__bullets-name">
                Creación de landing pages
              </h4>
              <p className="routes__bullets-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
            </article>
            <article className="routes__bullets-item routes__bullets-item--black">
              <h4 className="routes__bullets-name">
                Journey del usuario a través de rutas de anuncios
              </h4>
              <p className="routes__bullets-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
            </article>
            <article className="routes__bullets-item routes__bullets-item--gray">
              <h4 className="routes__bullets-name">Reporte de desempeño</h4>
              <p className="routes__bullets-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
            </article>
          </div>
          <h2 className="routes__bullets-title routes__bullets-title--two">
            Nuestro proceso
          </h2>

          <div className="routes__bullets-grid">
            <div className="routes__bullets-holder">
              <img
                src={processOne}
                alt="Process"
                className="routes__bullets-holder-image"
              />
              <p className="routes__bullets-text">
                Entendimiento del negocio y los objetivos
              </p>
            </div>
            <div className="routes__bullets-holder">
              <img
                src={processTwo}
                alt="Process"
                className="routes__bullets-holder-image"
              />
              <p className="routes__bullets-text">
                Análisis de búsquedas, canales y montos a invertir
              </p>
            </div>
            <div className="routes__bullets-holder">
              <img
                src={processThree}
                alt="Process"
                className="routes__bullets-holder-image"
              />
              <p className="routes__bullets-text">
                Creación e implementación de anuncios
              </p>
            </div>
            <div className="routes__bullets-holder">
              <img
                src={processFour}
                alt="Process"
                className="routes__bullets-holder-image"
              />
              <p className="routes__bullets-text">
                Optimización, creación de reportes y seguimiento
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home__campaign">
        <img
          src={GoogleCampaign}
          alt="Google"
          className="home__campaign-image"
        />
      </section>
      <Certification />
      <Clients />
    </Layout>
  )
}
