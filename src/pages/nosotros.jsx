import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Nosotros.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/Seo"
import AboutGrid from "../assets/images/about-grid.png"
import Experience from "../components/Experience.jsx"
import Certification from "../components/Certification.jsx"
import Clients from "../components/Clients.jsx"
import GoogleCampaign from "../assets/images/google-campaign.png"

export default function Nosotros() {
  return (
    <Layout>
      <Seo title="Nosotros" />
      <section className="about__hero">
        <div className="about__hero-container">
          <div className="about__hero-data">
            <h1 className="about__hero-title">
              Somos shark ads, agencia especialista en anuncios digitales
            </h1>
            <div className="about__hero-actions">
              <Link
                to="/asesoria"
                className="about__hero-button about__hero-button--green"
              >
                Solicita una asesoría
              </Link>
              <button className="about__hero-button about__hero-button--blue">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="about__info">
        <div className="about__info-container">
          <div className="about__info-grid">
            <div className="about__info-box about__info-box--right">
              <h2 className="about__info-title">¿Qué hacemos?</h2>
              <p className="about__info-text about__info-text--right">
                En Shark Ads nos especializamos en análisis, creación,
                optimización y manejo de anuncios pagados en medios como Google
                Adwords, Facebook ads, Linkedin Ads, entre otros.
              </p>
            </div>
            <div className="about__info-box">
              <picture className="about__info-picture">
                <img
                  src={AboutGrid}
                  alt="About"
                  className="about__info-image"
                />
              </picture>
            </div>
          </div>
          <div className="about__info-grid">
            <div className="about__info-box">
              <picture className="about__info-picture">
                <img
                  src={AboutGrid}
                  alt="About"
                  className="about__info-image"
                />
              </picture>
            </div>
            <div className="about__info-box about__info-box--left">
              <h2 className="about__info-title">¿Quiénes somos?</h2>
              <p className="about__info-text about__info-text--left">
                Somos una empresa que busca realizar anuncios digitales para
                instituciones, centrados en la manera en la que las personas hoy
                en día compran.
              </p>
            </div>
          </div>
          <div className="about__info-grid">
            <div className="about__info-box about__info-box--right">
              <h2 className="about__info-title">¿Por qué lo hacemos?</h2>
              <p className="about__info-text about__info-text--right">
                Estamos convencidos en que exiten mejores maneras de generar
                demanda, y sabemos que los negocios tienen un potencial de
                crecimiento, pero muchas veces no saben como encararlo o
                potencializar nuevos canales para generarlo. Queremos ayudar a
                las empresas a destapar su potencial de una manera más
                inteligente y eficiente, siendo socios de negocios y cuidando
                los intereses de nuestros clientes en el camino.
              </p>
            </div>
            <div className="about__info-box">
              <picture className="about__info-picture">
                <img
                  src={AboutGrid}
                  alt="About"
                  className="about__info-image"
                />
              </picture>
            </div>
          </div>
          <div className="about__info-grid">
            <div className="about__info-box">
              <picture className="about__info-picture">
                <img
                  src={AboutGrid}
                  alt="About"
                  className="about__info-image"
                />
              </picture>
            </div>
            <div className="about__info-box about__info-box--left">
              <h2 className="about__info-title">
                ¿Por qué nuestro clientes trabajan con nosotros?
              </h2>
              <p className="about__info-text about__info-text--left">
                Tenemos la honestidad como principal valor, esto nos hace ser
                más concretos, directos y estar más alerta de los errores que
                podemos cometer, pero al mismo tiempo nos hace encarar las
                decisiones difíciles de una manera más directa y no dejarnos
                distraer por métricas de vanidad. Nuestros clientes aprecian y
                confían en nosotros, sabiendo que entendemos sus negocios y la
                manera en la que pueden generar más demanda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Experience />
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
