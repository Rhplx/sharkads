import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Services.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/seo.js"
import Certification from "../components/Certification.jsx"
import Clients from "../components/Clients.jsx"
import GoogleCampaign from "../assets/images/google-campaign.png"
import processOne from "../assets/images/process-1.png"
import processTwo from "../assets/images/process-2.png"
import processThree from "../assets/images/process-3.png"
import processFour from "../assets/images/process-4.png"
import HeroPhone from "../assets/images/hero-phone.png"
import SocialOne from "../assets/images/social-1.png"
import SocialTwo from "../assets/images/social-2.png"
import SocialThree from "../assets/images/social-3.png"
import SocialFour from "../assets/images/social-4.png"

export default function Servicios() {
  return (
    <Layout>
      <Seo title="Servicios" />
      <section className="home__hero">
        <div className="home__hero-container">
          <div className="home__hero-grid">
            <div className="home__hero-box">
              <h1 className="home__hero-title">Pautas search & social</h1>
              <p className="home__hero-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
              <div className="home__hero-actions">
                <Link
                  to="/asesoria"
                  className="home__hero-button home__hero-button--green"
                >
                  Solicita una asesoría
                </Link>
              </div>
            </div>
            <div className="home__hero-box home__hero-box--image">
              <img src={HeroPhone} alt="Hero" className="home__hero-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="services__bullets">
        <div className="services__bullets-container">
          <div className="services__bullets-grid">
            <article className="services__bullets-social">
              <img
                src={SocialOne}
                alt="Social"
                className="services__bullets-social-image"
              />
              <h5 className="services__bullets-social-name">Google Ads</h5>
              <p className="services__bullets-social-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
              <Link
                to="/google-ads"
                className="services__bullets-social-button services__bullets-social-button--green"
              >
                Ver más
              </Link>
            </article>
            <article className="services__bullets-social">
              <img
                src={SocialTwo}
                alt="Social"
                className="services__bullets-social-image"
              />
              <h5 className="services__bullets-social-name">
                Facebook & Instagram
              </h5>
              <p className="services__bullets-social-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
              <Link
                to="/facebook"
                className="services__bullets-social-button services__bullets-social-button--blue"
              >
                Ver más
              </Link>
            </article>
            <article className="services__bullets-social">
              <img
                src={SocialThree}
                alt="Social"
                className="services__bullets-social-image"
              />
              <h5 className="services__bullets-social-name">LinkedIn</h5>
              <p className="services__bullets-social-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
              <Link
                to="/linkedin"
                className="services__bullets-social-button services__bullets-social-button--deep"
              >
                Ver más
              </Link>
            </article>
            <article className="services__bullets-social">
              <img
                src={SocialFour}
                alt="Social"
                className="services__bullets-social-image"
              />
              <h5 className="services__bullets-social-name">Twitter</h5>
              <p className="services__bullets-social-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales.
              </p>
              <Link
                to="/twitter"
                className="services__bullets-social-button services__bullets-social-button--light"
              >
                Ver más
              </Link>
            </article>
          </div>
          <h2 className="services__bullets-title services__bullets-title--two">
            Nuestro proceso
          </h2>
          <div className="services__bullets-grid">
            <div className="services__bullets-holder">
              <img
                src={processOne}
                alt="Process"
                className="services__bullets-holder-image"
              />
              <p className="services__bullets-text">
                Entendimiento del negocio y los objetivos
              </p>
            </div>
            <div className="services__bullets-holder">
              <img
                src={processTwo}
                alt="Process"
                className="services__bullets-holder-image"
              />
              <p className="services__bullets-text">
                Análisis de búsquedas, canales y montos a invertir
              </p>
            </div>
            <div className="services__bullets-holder">
              <img
                src={processThree}
                alt="Process"
                className="services__bullets-holder-image"
              />
              <p className="services__bullets-text">
                Creación e implementación de anuncios
              </p>
            </div>
            <div className="services__bullets-holder">
              <img
                src={processFour}
                alt="Process"
                className="services__bullets-holder-image"
              />
              <p className="services__bullets-text">
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
