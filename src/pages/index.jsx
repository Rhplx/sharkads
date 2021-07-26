import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Index.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/Seo"
import Experience from "../components/Experience.jsx"
import Certification from "../components/Certification.jsx"
import Clients from "../components/Clients.jsx"
import HeroPhone from "../assets/images/hero-phone.png"
import PautaScreen from "../assets/images/pauta-image.png"
import AnouncesIcon from "../assets/images/anounces.png"
import CodesIcon from "../assets/images/codes.png"
import FormIcon from "../assets/images/forms.png"
import SiteIcon from "../assets/images/site.png"
import BudgetImage from "../assets/images/budget.png"
import BudgetGrayImage from "../assets/images/budget-gray.png"
import AdsImage from "../assets/images/ads.png"
import AdsGrayImage from "../assets/images/ads-gray.png"
import GoogleCampaign from "../assets/images/google-campaign.png"
import Logobg from "../assets/images/logo-bo.svg"

export default function Index() {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="home__hero">
        <div className="home__hero-container">
          <div className="home__hero-grid">
            <div className="home__hero-box">
              <h1 className="home__hero-title">
                Agencia <br /> especialista en SEM
              </h1>
              <p className="home__hero-text">
                Haz que tu estrategia de anuncios digitales sea más rentable a
                través de una constante optimización y seguimiento en resultados
                de ventas.
              </p>
              <div className="home__hero-actions">
                <Link
                  to="/asesoria"
                  className="home__hero-button home__hero-button--green"
                >
                  Solicita una asesoría
                </Link>
                <button className="home__hero-button home__hero-button--gray">
                  Descubre cuando invertir
                </button>
              </div>
            </div>
            <div className="home__hero-box home__hero-box--image">
              <img src={HeroPhone} alt="Hero" className="home__hero-image" />
            </div>
          </div>
          <div className="home__hero-grid home__hero-grid--bottom">
            <div className="home__hero-box home__hero-box--image">
              <img src={PautaScreen} alt="Hero" className="home__hero-image" />
            </div>
            <div className="home__hero-box">
              <h1 className="home__hero-title">
                Pautas search <br /> and social
              </h1>
              <p className="home__hero-text">
                Creación de campañas y anuncios digitales en los principales
                canales, siempre buscando construir mensajes y audiencias que
                optimicen tus resultados comerciales
              </p>
              <div className="home__hero-actions">
                <button className="home__hero-button home__hero-button--black">
                  Genera más prospectos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__convert">
        <div className="home__convert-container">
          <h1 className="home__convert-title">Rutas de conversión</h1>
          <p className="home__convert-subtitle">
            Creamos todos los recursos que necesita tu empresa para empezar a
            generar más prospectos:
          </p>
          <div className="home__convert-grid">
            <article className="home__convert-item">
              <img src={SiteIcon} alt="Form" className="home__convert-icon" />
              <p className="home__convert-text">Un sitio de aterrizaje</p>
            </article>
            <article className="home__convert-item">
              <img
                src={AnouncesIcon}
                alt="Form"
                className="home__convert-icon"
              />
              <p className="home__convert-text">Anuncios</p>
            </article>
            <article className="home__convert-item">
              <img src={CodesIcon} alt="Form" className="home__convert-icon" />
              <p className="home__convert-text">Códigos de rastreo</p>
            </article>
            <article className="home__convert-item">
              <img src={FormIcon} alt="Form" className="home__convert-icon" />
              <p className="home__convert-text">Formularios</p>
            </article>
          </div>
          <p className="home__convert-paragraph">
            Desde el punto en el que la persona te conoce, hasta que hables con
            él.
          </p>
          <button className="home__convert-button">
            Conoce cómo generar más prospectos
          </button>
        </div>
      </section>
      <section className="home__questions">
        <div className="home__questions-container">
          <div className="home__questions-grid">
            <div className="home__questions-box"></div>
            <div className="home__questions-box">
              <img
                src={BudgetImage}
                alt="Budget"
                className="home__questions-image home__questions-image--left"
              />
              <img
                src={BudgetGrayImage}
                alt="Budget"
                className="home__questions-image home__questions-image--gray"
              />
              <h2 className="home__questions-title">
                ¿No sabes qué pasa con tu Budget?
              </h2>
              <p className="home__questions-paragraph">
                Invertir más en anuncios digitales no necesariamente quiere
                decir más contactos o más clientes. <br /> <br /> Es importante
                realizar un buen análisis del negocio para entender los canales
                adecuados, los mensajes adecuados y los segmentos adecuados para
                generar un mejor balance entre el costo y beneficio de cada
                campaña.
              </p>
            </div>
          </div>
          <div className="home__questions-grid">
            <div className="home__questions-box">
              <img
                src={AdsImage}
                alt="Ads"
                className="home__questions-image home__questions-image--right"
              />
              <img
                src={AdsGrayImage}
                alt="Ads Gray"
                className="home__questions-image home__questions-image--gray"
              />
              <h2 className="home__questions-title">
                ¿Tus Ads <br /> no funcionan?
              </h2>
              <p className="home__questions-paragraph">
                En Shark Ads somos consultores de negocios que nos centramos en
                entender tu empresa y cómo genera negocio. A través de esto
                generamos campañas mejor enfocadas con indicadores de desempeño
                bien planteados. Que nos permiten generar las optimizaciones
                necesarias para lograr mejores resultados.
              </p>
            </div>
            <div className="home__questions-box"></div>
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
      <section className="home__bo">
        <div className="home__bo-container">
          <img src={Logobg} alt="Logo" className="home__bo-image" />
          <p className="home__bo-text">
            Somos un grupo enfocado en brindar soluciones para la transformación
            digital de las empresas, entendemos los negocios de nuestros
            clientes para crear las herramientas y estrategias adecuadas que les
            permitan generar un crecimiento importante según sus objetivos.{" "}
            <br /> <br /> Contamos con experiencia trabajando con más de 200
            clientes y más de 20 industrias, de esta manera aportamos
            experiencia y reducimos las curvas de aprendizaje de incursionar en
            el mundo digital.
          </p>
        </div>
      </section>
      <Clients />
    </Layout>
  )
}
